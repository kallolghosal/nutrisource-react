import { motion } from "framer-motion";

import mascot from "../assets/mascot.gif";

import org1 from "../assets/Organization we built/1.jpg";
import org2 from "../assets/Organization we built/2.jpg";
import org3 from "../assets/Organization we built/3.jpg";
import org4 from "../assets/Organization we built/4.jpg";
import org5 from "../assets/Organization we built/5.jpg";
import org6 from "../assets/Organization we built/6.jpg";
import org7 from "../assets/Organization we built/7.jpg";
import org8 from "../assets/Organization we built/8.jpg";
import org9 from "../assets/Organization we built/9.jpg";
import org10 from "../assets/Organization we built/10.jpg";
import org11 from "../assets/Organization we built/11.jpg";

const images = [
  org1,
  org2,
  org3,
  org4,
  org5,
  org6,
  org7,
  org8,
  org9,
  org10,
  org11,
];

export default function OrganizationSection() {
  const scrollingImages = [...images, ...images];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 sm:px-6 md:px-10 pt-14 pb-20">
      {/* Top smooth overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ffe7bb] to-white z-0" />

      {/* Soft right glow */}
      <div className="absolute right-0 top-0 h-full w-14 sm:w-20 md:w-28 bg-gradient-to-l from-green-700/60 to-transparent blur-xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
        >
          Organization we built
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 max-w-4xl mx-auto"
        >
          Inclusive Business Model driven by passion, knowledge, SDG goals and
          delivering excellence
        </motion.p>

        {/* Main Section */}
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-7">
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center flex-shrink-0 lg:-ml-16"
          >
            <img
              src={mascot}
              alt="FarmSanta Mascot"
              className="w-40 sm:w-52 md:w-60 lg:w-72 drop-shadow-2xl mix-blend-multiply"
            />

            <button className="mt-2 bg-green-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-black shadow-lg hover:bg-green-800 transition">
              DOWNLOAD APP
            </button>
          </motion.div>

          {/* Curved Image Slider */}
          <div className="relative w-full overflow-hidden py-10">
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-30" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-30" />

            {/* Curved line behind images */}
            <svg
              className="absolute left-0 top-[52%] w-full h-24 z-0 pointer-events-none"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 70 Q 500 0 1000 70"
                fill="none"
                stroke="#74bf00"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.45"
              />
            </svg>

            {/* Slider Track */}
            <div className="relative h-[250px] overflow-hidden z-10">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 22,
                  ease: "linear",
                }}
                className="absolute left-0 top-4 flex items-center gap-4 w-max"
              >
                {scrollingImages.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-40 sm:w-52 md:w-64 lg:w-72 h-36 sm:h-44 md:h-52 lg:h-56 rounded-[24px] overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-5 max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed"
        >
          NutriSource is redefining agriculture through Optimal Nutrition
          Management, Innovative & Cutting Edge Digital Technology and Real
          Time Advisory Services to improve millions of lives of marginal
          farmers.
        </motion.p>

        <button className="mt-4 bg-green-700 text-white px-10 py-3 rounded-full text-sm md:text-base font-black shadow-lg hover:bg-green-800 transition">
          KNOW MORE
        </button>
      </div>
    </section>
  );
}