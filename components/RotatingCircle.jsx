import { motion } from "framer-motion";
import logo from "../assets/Rotatinglogo.png";
import circleText from "../assets/Rotatingcircle.png";

export default function RotatingCircle() {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 flex items-center justify-center">

      {/* Rotating outer circle */}
      <motion.img
        src={circleText}
        alt="Engage Enable Enrich Empower"
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Static center logo pill */}
      <div className="absolute z-20 w-[110%] h-[12%] flex items-center justify-center px-2">
        <img
          src={logo}
          alt="NutriSource Logo"
          className="w-[100%] h-auto object-contain"
        />
      </div>

    </div>
  );
}