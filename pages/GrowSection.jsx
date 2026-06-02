import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import growImage from "../assets/grow-image.jpg";

export default function GrowSection() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.34) {
      setStep(1); // GROW + Image
    } else if (latest < 0.67) {
      setStep(2); // GROW + WITH + Image
    } else {
      setStep(3); // GROW + WITH + GROWTH
    }
  });

  const wordClass =
    "text-black font-black tracking-tight leading-none text-[8vw] md:text-[6vw] lg:text-[5vw]";

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-gradient-to-br from-white via-[#fff4df] to-[#ffc77d]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.85),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.7),transparent_30%)] opacity-90" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl flex items-center justify-center text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 whitespace-nowrap">

            {/* GROW */}
            <motion.span
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className={wordClass}
            >
              GROW
            </motion.span>

            {/* WITH */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.span
                  key="with"
                  initial={{ opacity: 0, x: 80, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={wordClass}
                >
                  WITH
                </motion.span>
              )}
            </AnimatePresence>

            {/* IMAGE / GROWTH SWITCH */}
            <AnimatePresence mode="wait">
              {step < 3 ? (
                <motion.div
                  key="grow-image"
                  initial={{ opacity: 0, x: 80, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-[18vw] h-[8vw] sm:w-[16vw] sm:h-[7vw] md:w-[14vw] md:h-[6vw] lg:w-[12vw] lg:h-[5.5vw] rounded-full overflow-hidden shadow-2xl border-4 border-white/80 flex-shrink-0"
                >
                  <img
                    src={growImage}
                    alt="Growth"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.span
                  key="growth"
                  initial={{ opacity: 0, x: 80, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={wordClass}
                >
                  GROWTH
                </motion.span>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}