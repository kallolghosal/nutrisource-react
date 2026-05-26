import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "../components/Hero";
import VideoSection from "../pages/VideoSection";

export default function HomeVideoTransition() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Hero disappears quickly
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.32], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.32], [1, 0.86]);
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -80]);

  // Video comes from center and becomes full visible quickly
  const videoOpacity = useTransform(scrollYProgress, [0.18, 0.32, 0.45], [0, 0.6, 1]);
  const videoScale = useTransform(scrollYProgress, [0.18, 0.45], [0.55, 1]);
  const videoY = useTransform(scrollYProgress, [0.18, 0.45], [120, 0]);

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Hero Layer */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="absolute inset-0 z-20"
        >
          <Hero />
        </motion.div>

        {/* Video Layer */}
        <motion.div
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            y: videoY,
          }}
          className="absolute inset-0 z-30"
        >
          <VideoSection />
        </motion.div>
      </div>
    </section>
  );
}