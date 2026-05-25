import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import logo from "../assets/logo.png";

export default function VideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.45 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.muted = true;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isInView]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
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
        {<video
          ref={videoRef}
          className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] object-cover rounded-[24px] md:rounded-[34px]"
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video> }

        <div className="absolute inset-0 rounded-[24px] md:rounded-[34px] bg-gradient-to-t from-black/35 via-black/5 to-transparent pointer-events-none" />

        <button
          onClick={toggleVideo}
          className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/90 text-green-700 flex items-center justify-center shadow-2xl hover:scale-110 transition z-20"
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