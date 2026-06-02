import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import logo from "../assets/logo.png";

const YOUTUBE_VIDEO_ID = "PPSSZl3Hy3Q";

export default function VideoSection() {
  const iframeRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.45 });
  const [isPlaying, setIsPlaying] = useState(false);

  const sendCommand = (command) => {
    if (!iframeRef.current) return;

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  };

  useEffect(() => {
    sendCommand("pauseVideo");
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (!isInView) {
      sendCommand("pauseVideo");
      setIsPlaying(false);
    }
  }, [isInView]);

    const toggleVideo = () => {
      if (isPlaying) {
        sendCommand("pauseVideo");
        setIsPlaying(false);
      } else {
        sendCommand("unMute");
        sendCommand("setVolume", [100]);
        sendCommand("playVideo");
        setIsPlaying(true);
      }
    };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center justify-center overflow-hidden px-4 py-24 md:px-8"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl" />

      <motion.img
        src={logo}
        alt="NutriSource Logo"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="absolute top-4 left-4 md:top-6 md:left-10 w-36 sm:w-44 md:w-52 lg:w-60 z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative w-full max-w-6xl rounded-[24px] md:rounded-[34px] bg-white/40 border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.18)] overflow-hidden group"
      >
        <iframe
          ref={iframeRef}
          className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] rounded-[24px] md:rounded-[34px]"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 rounded-[24px] md:rounded-[34px] bg-gradient-to-t from-black/35 via-black/5 to-transparent pointer-events-none" />

        <button
        onClick={toggleVideo}
        className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/90 text-green-700 flex items-center justify-center shadow-2xl transition-all duration-300 z-20 opacity-100 group-hover:opacity-100 md:opacity-0 hover:scale-110"
        >
          {isPlaying ? (
            <Pause size={30} fill="currentColor" />
          ) : (
            <Play size={34} fill="currentColor" className="ml-1" />
          )}
        </button>

      </motion.div>
    </section>
  );
}