import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";
import mascot from "../assets/mascot.gif";
import RotatingCircle from "../components/RotatingCircle";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center overflow-hidden px-4 py-24 md:px-8">

      {/* Soft Background Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl" />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="NutriSource Logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-4 md:top-6 md:left-10 w-36 sm:w-44 md:w-52 lg:w-60 z-50"
      />

      {/* Main Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-6xl rounded-[24px] md:rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
      >

        {/* Background Image */}
        <img
          src={hero}
          alt="Hero Banner"
          className="w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] object-cover rounded-[24px] md:rounded-[34px]"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 rounded-[24px] md:rounded-[34px] bg-gradient-to-r from-black/10 via-transparent to-black/5" />

        {/* Rotating Circle */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-2 sm:-left-8 md:-left-16 lg:-left-20 top-[25%] sm:top-1/2 -translate-y-1/2 z-40"
        >
          <RotatingCircle />
        </motion.div>

        {/* Mascot + Button */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-2 sm:-right-8 md:-right-24 lg:-right-36 bottom-6 sm:top-1/2 sm:-translate-y-1/2 flex flex-col items-center z-40"
        >

          <img
            src={mascot}
            alt="FarmSanta Mascot"
            className="w-36 sm:w-52 md:w-64 lg:w-80 drop-shadow-2xl"
          />

          <button className="mt-3 md:mt-4 bg-gradient-to-r from-green-600 to-lime-500 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full text-sm md:text-base font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition">
            DOWNLOAD
          </button>

        </motion.div>

      </motion.div>
    </section>
  );
}