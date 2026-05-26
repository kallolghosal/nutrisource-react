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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.22, 0.35], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.82]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);

  const videoOpacity = useTransform(scrollYProgress, [0.18, 0.35, 0.5], [0, 1, 1]);
  const videoScale = useTransform(scrollYProgress, [0.18, 0.5], [0.55, 1]);
  const videoY = useTransform(scrollYProgress, [0.18, 0.5], [120, 0]);

  return (
    <section ref={sectionRef} className="relative h-[230vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Video must be behind but visible */}
        <motion.div
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            y: videoY,
          }}
          className="absolute inset-0 z-10"
        >
          <VideoSection />
        </motion.div>

        {/* Hero on top and fade out */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <Hero />
        </motion.div>

      </div>
    </section>
  );
}