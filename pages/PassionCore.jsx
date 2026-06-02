import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mascot from "../assets/mascot.gif";

export default function PassionCore() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const greenTop = useTransform(scrollYProgress, [0, 0.35], ["0%", "78%"]);
  const greenHeight = useTransform(scrollYProgress, [0, 0.35], ["100%", "22%"]);
  const footerCurveOpacity = useTransform(scrollYProgress, [0.3, 0.38], [0, 1]);

  const titleColor = useTransform(scrollYProgress, [0, 0.35], ["#ffffff", "#000000"]);

  const mascotScale = useTransform(scrollYProgress, [0, 0.35], [1.14, 0.9]);
  const mascotY = useTransform(scrollYProgress, [0, 0.35], [0, 5]);

  const leftOpacity = useTransform(scrollYProgress, [0.30, 0.38], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0.30, 0.38], [-80, 0]);

  const rightOpacity = useTransform(scrollYProgress, [0.39, 0.47], [0, 1]);
  const rightX = useTransform(scrollYProgress, [0.39, 0.47], [30, 0]);

  
  return (
    <section ref={sectionRef} className="relative h-[650vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white px-6 md:px-12">
        {/* Green Background */}
        <motion.div
          style={{
            top: greenTop,
            height: greenHeight,
          }}
          className="absolute left-0 w-full z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#6fd600] via-[#48a900] to-[#1f6f00]" />

          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.10) 25%,
                  transparent 25%,
                  transparent 50%,
                  rgba(255,255,255,0.10) 50%,
                  rgba(255,255,255,0.10) 75%,
                  transparent 75%,
                  transparent
                )
              `,
              backgroundSize: "55px 55px",
            }}
          />

          <motion.div style={{ opacity: footerCurveOpacity }} className="absolute inset-0">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M0,35 C260,140 500,260 720,260 C940,260 1180,140 1440,35 L1440,320 L0,320 Z"
                fill="url(#grassGradient)"
              />

              <defs>
                <linearGradient id="grassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1f6f00" />
                  <stop offset="50%" stopColor="#63bd00" />
                  <stop offset="100%" stopColor="#48a900" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          style={{ color: titleColor }}
          className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl md:text-5xl font-black z-[1200] tracking-tight"
        >
          Passion @ Core
        </motion.h2>

        {/* Left Content */}
        <motion.div
          style={{ opacity: leftOpacity, x: leftX }}
          className="absolute left-8 md:left-20 top-[20%] w-[34%] z-[1100]"
        >
          <div className="space-y-2">
            <p className="text-[16px] leading-[30px] text-justify text-black font-bold">
              Our Passion @ Core is to promote sustainable agriculture and
              empower rural livelihoods for a better future, greener planet,
              and inclusive growth of society.
            </p>

            <p className="text-[16px] leading-[30px] text-justify text-black font-bold">
              Our integrated approach combines innovative products, expert
              agriculture domain knowledge, best-in-class Agritech platform,
              and real-time farm advisory services for farmers and stakeholders.
            </p>

            <ul className="space-y-1 text-[16px] leading-[28px] text-black font-bold">
              <li>• Efficient and cost-effective agriculture</li>
              <li>• Better yield with reduced environmental impact</li>
              <li>• Collaborative ecosystem for rural livelihood growth</li>
              <li>• Direct market access and value creation for farmers</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          style={{
            opacity: rightOpacity,
            x: rightX,
          }}
          className="absolute right-4 md:right-20 top-[18%] w-[34%] z-[3000] pointer-events-none"
        >
          <div className="space-y-2 bg-white/90 rounded-2xl p-4">
            <p className="text-[16px] leading-[30px] text-justify text-black font-bold">
              NutriSource is built on strong agriculture domain expertise,
              innovation, and passion to deliver excellence and create
              measurable impact on rural livelihood and sustainable farming.
            </p>

            <p className="text-[16px] leading-[30px] text-justify text-black font-bold">
              We believe sustainability is essential for long-term growth,
              while collaboration among stakeholders is key to building a
              stronger and more inclusive agricultural ecosystem.
            </p>

            <p className="text-[16px] leading-[30px] text-justify text-black font-bold">
              We remain committed to enabling and empowering marginal farmers
              through comprehensive 360-degree Agri solutions, technology
              integration, and real-time support systems.
            </p>

            <p className="pt-1 text-[18px] leading-[30px] font-black text-[#ff861c] text-left">
              It is not just a vision or mission — it is our passion to
              deliver Change, Excellence, Sustainability, and Impact.
            </p>
          </div>
        </motion.div>

        {/* Mascot */}
        <motion.div
          style={{ scale: mascotScale, y: mascotY }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[900] flex flex-col items-center"
        >
          <img
            src={mascot}
            alt="FarmSanta Mascot"
            className="w-52 sm:w-60 md:w-72 lg:w-[310px] drop-shadow-2xl"
          />

          <button className="mt-3 bg-green-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-black hover:bg-green-800 transition-all duration-300 hover:scale-105 shadow-xl">
            DOWNLOAD APP
          </button>
        </motion.div>
      </div>
    </section>
  );
}