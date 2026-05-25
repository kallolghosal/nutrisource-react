import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import growImage from "../assets/grow-image.jpg";

export default function GrowSection() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setStep(1); // GROW + image
    } else if (latest >= 0.25 && latest < 0.65) {
      setStep(2); // GROW WITH + image
    } else {
      setStep(3); // GROW WITH GROWTH
    }
  });

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-gradient-to-br from-white via-[#fff4df] to-[#ffc77d]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.85),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.7),transparent_30%)] opacity-90" />

        <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-5 md:gap-7 flex-wrap text-center">

          <AnimatePresence>
            {step >= 1 && (
              <motion.span
                key="grow"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-black font-black leading-none text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem]"
              >
                GROW
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 2 && (
              <motion.span
                key="with"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-black font-black leading-none text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem]"
              >
                WITH
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 3 && (
              <motion.span
                key="growth"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-black font-black leading-none text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem]"
              >
                GROWTH
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {step < 3 && (
              <motion.div
                key={`grow-image-${step}`}
                initial={{ opacity: 0, scale: 0.75, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.75, x: 40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-36 h-16 sm:w-48 sm:h-20 md:w-64 md:h-24 lg:w-80 lg:h-28 xl:w-96 xl:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/80"
              >
                <img
                  src={growImage}
                  alt="Growth"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}