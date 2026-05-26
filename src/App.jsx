import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import {
  Home,
  Building,
  Heart,
  Cpu,
  Package,
  Leaf,
  Users,
  Megaphone,
  Smile,
  MessageCircle,
  TrendingUp,
  PhoneCall,
  Mail,
  MapPin,
  Award,
  Briefcase,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import heroLogo from "./assets/logo.png";
import videoLogo from "./assets/logo.png";
import mascot from "./assets/mascot.gif";
import rotatingLogo from "./assets/Rotatinglogo.png";
import rotatingCircleText from "./assets/Rotatingcircle.png";

import heroLeaf1 from "./assets/leaf11.png";
import heroLeaf2 from "./assets/leaf12.png";
import heroLeaf3 from "./assets/leaf13.png";

import growImage from "./assets/grow-image.jpg";

import logo from "./assets/logo.png";
import sdg1 from "./assets/sdg/sdg1.png";
import sdg2 from "./assets/sdg/sdg2.png";
import sdg3 from "./assets/sdg/sdg3.png";
import sdg4 from "./assets/sdg/sdg4.png";
import sdg5 from "./assets/sdg/sdg5.png";
import sdg6 from "./assets/sdg/sdg6.png";
import sdg7 from "./assets/sdg/sdg7.png";
import sdg8 from "./assets/sdg/sdg8.png";
import sdg9 from "./assets/sdg/sdg9.png";
import sdg10 from "./assets/sdg/sdg10.png";
import sdg11 from "./assets/sdg/sdg11.png";
import sdg12 from "./assets/sdg/sdg12.png";
import sdg13 from "./assets/sdg/sdg13.png";
import sdg14 from "./assets/sdg/sdg14.png";
import sdg15 from "./assets/sdg/sdg15.png";
import sdg16 from "./assets/sdg/sdg16.png";
import sdg17 from "./assets/sdg/sdg17.png";

import org1 from "./assets/Organization we built/1.jpg";
import org2 from "./assets/Organization we built/2.jpg";
import org3 from "./assets/Organization we built/3.jpg";
import org4 from "./assets/Organization we built/4.jpg";
import org5 from "./assets/Organization we built/5.jpg";
import org6 from "./assets/Organization we built/6.jpg";
import org7 from "./assets/Organization we built/7.jpg";
import org8 from "./assets/Organization we built/8.jpg";
import org9 from "./assets/Organization we built/9.jpg";
import org10 from "./assets/Organization we built/10.jpg";
import org11 from "./assets/Organization we built/11.jpg";

import capLeaf1 from "./assets/leaf1.png";
import capLeaf2 from "./assets/leaf2.png";
import capLeaf3 from "./assets/leaf3.png";
import capLeaf4 from "./assets/leaf4.png";
import capLeaf5 from "./assets/leaf5.png";
import capLeaf6 from "./assets/leaf6.png";

import offerings1 from "./assets/offerings1.png";
import offerings2 from "./assets/offerings2.png";
import offerings3 from "./assets/offerings3.png";
import offerings4 from "./assets/offerings4.png";

import productGrass from "./assets/grass.png";

// import brochurePdf from "./assets/product-brochure.pdf";

/*Insecticide */
import productShowcaseProduct1 from "./assets/Canine.png";
import productShowcaseProduct2 from "./assets/Savage.png";
import productShowcaseProduct3 from "./assets/Nutripole_2.png";
import productShowcaseProduct4 from "./assets/Nutri-CYP.png";
import productShowcaseProduct5 from "./assets/Shutter.png";
import productShowcaseProduct6 from "./assets/Tejas.png";

/*Adjuvent*/
import productShowcaseProduct7 from "./assets/NutriSil.png";

/*Boi Products*/
import productShowcaseProduct8 from "./assets/K-Force.png";
import productShowcaseProduct9 from "./assets/Magnum.png";
import productShowcaseProduct10 from "./assets/Marvel_Front.png";

/*Fungicides */
import productShowcaseProduct11 from "./assets/FUSION.png";
import productShowcaseProduct12 from "./assets/Hexacon.png";
import productShowcaseProduct13 from "./assets/Tifamide.png";
import productShowcaseProduct14 from "./assets/Wonder.png";

/*Herbicides */
import productShowcaseProduct15 from "./assets/GLYSOURCE 41.png";
import productShowcaseProduct16 from "./assets/GLYSOURCE 71_2.png";
import productShowcaseProduct17 from "./assets/NUTRIQUAT.png";


import productLeaf1 from "./assets/leaf11.png";
import productLeaf2 from "./assets/leaf12.png";
import productLeaf3 from "./assets/leaf13.png";

import farmSantaLogo from "./assets/farmsanta-logo.png";
import santa1 from "./assets/santa1.png";
import santa2 from "./assets/santa2.png";
import santa3 from "./assets/santa3.png";
import santa4 from "./assets/santa4.png";
import santa5 from "./assets/santa5.png";

import member1 from "./assets/Waseem.png";
import member2 from "./assets/MMR.png";
import member3 from "./assets/Abhichal.png";
import member4 from "./assets/Pinaki.png";
import member5 from "./assets/Naznin.png";
/* import member6 from "./assets/member6.png";  */

/* Awards Images - place your award/certificate images in src/assets/awards/ */
import award1 from "./assets/awards/award1.jpg";
import award2 from "./assets/awards/award2.jpg";
import award3 from "./assets/awards/award3.jpg";
import award4 from "./assets/awards/award4.jpg";
import award5 from "./assets/awards/award5.jpg";
import award6 from "./assets/awards/award6.jpg";
import award7 from "./assets/awards/award7.jpg";
import award8 from "./assets/awards/award8.jpg";


// ===== RotatingCircle.jsx =====
function RotatingCircle() {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 flex items-center justify-center">

      {/* Rotating outer circle */}
      <motion.img
        src={rotatingCircleText}
        alt="Engage Enable Enrich Empower"
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Static center rotatingLogo pill */}
{/*       <div className="absolute z-20 w-[110%] h-[12%] flex items-center justify-center px-2">
        <img
          src={rotatingLogo}
          alt="NutriSource Logo"
          className="w-[100%] h-auto object-contain"
        />
      </div> */}

    </div>
  );
}


// ===== Hero.jsx =====
const YOUTUBE_VIDEO_ID = "PPSSZl3Hy3Q";

function Hero() {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const sendCommand = (command) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      sendCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const floatingLeaves = [
    { image: heroLeaf1, size: 70, left: "2%", duration: 18, delay: 0 },
    { image: heroLeaf2, size: 45, left: "5%", duration: 16, delay: 2 },
    { image: heroLeaf3, size: 58, left: "8%", duration: 20, delay: 1 },
    { image: heroLeaf1, size: 35, left: "10%", duration: 15, delay: 4 },
    { image: heroLeaf2, size: 62, left: "12%", duration: 22, delay: 3 },
    { image: heroLeaf3, size: 40, left: "15%", duration: 17, delay: 5 },
    { image: heroLeaf1, size: 52, left: "18%", duration: 19, delay: 6 },
    { image: heroLeaf2, size: 38, left: "20%", duration: 14, delay: 2 },
    { image: heroLeaf3, size: 65, left: "23%", duration: 21, delay: 7 },
    { image: heroLeaf1, size: 48, left: "26%", duration: 18, delay: 1 },
    { image: heroLeaf2, size: 55, left: "35%", duration: 20, delay: 3 },
    { image: heroLeaf3, size: 42, left: "40%", duration: 16, delay: 5 },
    { image: heroLeaf1, size: 50, left: "45%", duration: 22, delay: 2 },
    { image: heroLeaf2, size: 36, left: "50%", duration: 17, delay: 6 },
    { image: heroLeaf3, size: 60, left: "55%", duration: 19, delay: 4 },
    { image: heroLeaf1, size: 45, left: "65%", duration: 16, delay: 3 },
    { image: heroLeaf2, size: 58, left: "70%", duration: 21, delay: 2 },
    { image: heroLeaf3, size: 40, left: "74%", duration: 15, delay: 5 },
    { image: heroLeaf1, size: 65, left: "78%", duration: 23, delay: 1 },
    { image: heroLeaf2, size: 38, left: "82%", duration: 17, delay: 6 },
    { image: heroLeaf3, size: 55, left: "86%", duration: 20, delay: 4 },
    { image: heroLeaf1, size: 42, left: "90%", duration: 18, delay: 2 },
    { image: heroLeaf2, size: 48, left: "94%", duration: 22, delay: 7 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center px-4 py-24 md:px-8 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {floatingLeaves.map((leaf, index) => (
          <motion.img
            key={index}
            src={leaf.image}
            alt="leaf"
            className="absolute"
            style={{
              width: `${leaf.size}px`,
              left: leaf.left,
            }}
            initial={{
              y: "120vh",
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "-25vh",
              rotate: [0, 180, 360],
              x: [0, 40, -30, 20, 0],
              opacity: [0, 0.18, 0.25, 0.18, 0],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay,
            }}
          />
        ))}
      </div>

      <motion.img
        src={heroLogo}
        alt="NutriSource Logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-2 left-2 md:top-4 md:left-10 w-44 sm:w-56 md:w-64 lg:w-66 xl:w-70 z-50"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="group relative z-20 w-full max-w-6xl rounded-[24px] md:rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
      >
        <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] rounded-[24px] md:rounded-[34px] overflow-hidden bg-black">
          <iframe
            ref={iframeRef}
            title="FarmSanta Hero Video"
            /* src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&autoplay=0&mute=0&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0&iv_load_policy=3&fs=0&disablekb=1`} */
            src="https://www.youtube.com/embed/T1ogWaJdfFA?enablejsapi=1&autoplay=0&mute=0&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0&iv_load_policy=3&fs=0&disablekb=1"
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 pointer-events-none" />
        </div>

        <button
          onClick={handlePlayPause}
          className="absolute left-1/2 top-1/2 z-[90] -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-600/90 hover:bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.6)] transition">
            {isPlaying ? (
              <div className="flex gap-1">
                <span className="w-2 h-8 bg-white rounded" />
                <span className="w-2 h-8 bg-white rounded" />
              </div>
            ) : (
              <div
                className="ml-1"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: "22px solid white",
                }}
              />
            )}
          </div>
        </button>

        <AnimatePresence>
          {!isPlaying && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -80, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.85 }}
                transition={{ duration: 0.6 }}
                className="absolute -left-14 sm:-left-20 md:-left-24 lg:-left-32 top-1/2 -translate-y-1/2 z-[100]"
              >
                <RotatingCircle />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute -right-14 sm:-right-20 md:-right-24 lg:-right-32 top-1/2 -translate-y-1/2 flex flex-col items-center z-[100]"
              >
                <img
                  src={mascot}
                  alt="FarmSanta Mascot"
                  className="w-32 sm:w-44 md:w-52 lg:w-64 drop-shadow-2xl"
                />

                <button className="mt-3 md:mt-4 bg-gradient-to-r from-green-600 to-lime-500 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full text-sm md:text-base font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition">
                  DOWNLOAD
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}


// ===== GrowSection.jsx =====
function GrowSection() {
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


// ===== OrganizationSection.jsx =====
const sdgGoals = [
  { no: "1", title: "No Poverty", icon: sdg1, color: "#E5243B" },
  { no: "2", title: "Zero Hunger", icon: sdg2, color: "#DDA63A" },
  { no: "3", title: "Good Health", icon: sdg3, color: "#4C9F38" },
  { no: "4", title: "Quality Education", icon: sdg4, color: "#C5192D" },
  { no: "5", title: "Gender Equality", icon: sdg5, color: "#FF3A21" },
  { no: "6", title: "Clean Water", icon: sdg6, color: "#26BDE2" },
  { no: "7", title: "Clean Energy", icon: sdg7, color: "#FCC30B" },
  { no: "8", title: "Economic Growth", icon: sdg8, color: "#A21942" },
  { no: "9", title: "Innovation", icon: sdg9, color: "#FD6925" },
  { no: "10", title: "Reduced Inequality", icon: sdg10, color: "#DD1367" },
  { no: "11", title: "Sustainable Cities", icon: sdg11, color: "#FD9D24" },
  { no: "12", title: "Responsible Consumption", icon: sdg12, color: "#BF8B2E" },
  { no: "13", title: "Climate Action", icon: sdg13, color: "#3F7E44" },
  { no: "14", title: "Life Below Water", icon: sdg14, color: "#0A97D9" },
  { no: "15", title: "Life On Land", icon: sdg15, color: "#56C02B" },
  { no: "16", title: "Peace & Justice", icon: sdg16, color: "#00689D" },
  { no: "17", title: "Partnerships", icon: sdg17, color: "#19486A" },
];

function OrganizationSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#f7f7f4] px-5 md:px-10 py-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,#ffe8bf_0%,transparent_24%),radial-gradient(circle_at_92%_18%,#d9f4c7_0%,transparent_20%)]" />
      <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#048300]/70 to-transparent blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#048300]/18 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col">
        {/* PAGE HEADING */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
          >
            Organization We Built
          </motion.h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-orange-500 font-bold italic max-w-4xl mx-auto">
            Inclusive Business Model driven by passion, knowledge, SDG goals and
            delivering excellence
          </p>

        </div>

        {/* FULL SCREEN SDG PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative mt-5 flex-1 rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl border border-green-100 p-5 md:p-6 overflow-hidden"
        >
          <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-[#048300]/10 blur-3xl" />
          <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-[#f58220]/10 blur-3xl" />

          {/* SDG SECTION HEADING */}
          <div className="relative mb-4 flex items-center justify-center gap-5">
            <img
              src={logo}
              alt="NutriSource Logo"
              className="h-10 md:h-14 object-contain drop-shadow-md"
            />

            <div className="h-10 md:h-14 w-[2px] bg-[#048300]/50" />

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[13px] sm:text-[16px] md:text-[24px] font-black uppercase leading-tight text-[#1685d8]">
                  Sustainable
                  <br />
                  Development
                </p>
              </div>

              <div className="flex items-center text-[34px] sm:text-[44px] md:text-[62px] font-black leading-none tracking-tight text-[#1685d8]">
                G
                <span className="mx-1 flex h-8 w-8 sm:h-10 sm:w-10 md:h-13 md:w-13 items-center justify-center rounded-full bg-[conic-gradient(#e5243b,#dda63a,#4c9f38,#26bde2,#0a97d9,#19486a,#dd1367,#fd6925,#e5243b)]">
                  <span className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 rounded-full bg-white" />
                </span>
                ALS
              </div>
            </div>
          </div>

          {/* SDG GRID */}
          <div className="relative grid h-[calc(100%-78px)] grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.no}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className="group relative overflow-hidden rounded-[18px] shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
                style={{ backgroundColor: goal.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/15 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative h-full min-h-[86px] p-2 flex flex-col items-center justify-center text-center">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="h-12 md:h-14 xl:h-16 w-12 md:w-14 xl:w-16 object-contain drop-shadow-md"
                  />

                  <h4 className="mt-1 text-white text-[9px] md:text-[10px] xl:text-[12px] font-black leading-tight">
                    {goal.title}
                  </h4>
                </div>
              </motion.div>
            ))}

            {/* LAST CARD - MASCOT ONLY */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="group relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#f7fff1] via-white to-[#fff2df] border border-green-200 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,#04830022_0%,transparent_55%)]" />

              <div className="relative h-full min-h-[86px] p-2 flex items-center justify-center">
                <img
                  src={mascot}
                  alt="FarmSanta Mascot"
                  className="h-20 md:h-24 xl:h-28 object-contain drop-shadow-2xl mix-blend-multiply"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== PassionCore.jsx =====
function PassionCore() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) setStep(0);
    else if (latest < 0.36) setStep(1);
    else if (latest < 0.46) setStep(2);
    else if (latest < 0.56) setStep(3);
    else if (latest < 0.66) setStep(4);
    else if (latest < 0.76) setStep(5);
    else if (latest < 0.86) setStep(6);
    else setStep(7);
  });

  const greenTop = useTransform(scrollYProgress, [0, 0.35], ["0%", "78%"]);
  const greenHeight = useTransform(scrollYProgress, [0, 0.35], ["100%", "22%"]);
  const footerCurveOpacity = useTransform(scrollYProgress, [0.3, 0.38], [0, 1]);
  const titleColor = useTransform(scrollYProgress, [0, 0.35], ["#ffffff", "#000000"]);

  const mascotScale = useTransform(scrollYProgress, [0, 0.35], [1.14, 0.9]);
  const mascotY = useTransform(scrollYProgress, [0, 0.35], [0, 5]);

  const showClass = "opacity-100 translate-y-0";
  const hideClass = "opacity-0 translate-y-8";

  return (
    <section ref={sectionRef} className="relative h-[650vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white px-6 md:px-12">
        {/* Green Background */}
        <motion.div
          style={{ top: greenTop, height: greenHeight }}
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
<div className="absolute left-8 md:left-20 top-[20%] w-[34%] z-[3000]">
  <div className="space-y-5">
    <p
      className={`text-[16px] leading-[30px] text-justify text-black font-bold transition-all duration-700 ${
        step >= 1 ? showClass : hideClass
      }`}
    >
      Our Passion @ Core is to promote sustainable agriculture and
      empower rural livelihoods for a better future, greener planet,
      and inclusive growth of society.
    </p>

    <p
      className={`text-[16px] leading-[30px] text-justify text-orange-500 font-bold italic transition-all duration-700 ${
        step >= 2 ? showClass : hideClass
      }`}
    >
      Our integrated approach combines innovative products, expert
      agriculture domain knowledge, best-in-class Agritech platform,
      and real-time farm advisory services for farmers and stakeholders.
    </p>

    <ul
      className={`space-y-1 text-[16px] leading-[28px] text-black font-bold transition-all duration-700 ${
        step >= 3 ? showClass : hideClass
      }`}
    >
      <li>• Efficient and cost-effective agriculture</li>
      <li>• Better yield with reduced environmental impact</li>
      <li>• Collaborative ecosystem for rural livelihood growth</li>
      <li>• Direct market access and value creation for farmers</li>
    </ul>
  </div>
</div>

{/* Right Content */}
<div className="absolute right-4 md:right-20 top-[18%] w-[34%] z-[3000] pointer-events-none">
  <div className="space-y-5">
    <p
      className={`text-[16px] leading-[30px] text-justify text-black font-bold transition-all duration-700 ${
        step >= 4 ? showClass : hideClass
      }`}
    >
      NutriSource is built on strong agriculture domain expertise,
      innovation, and passion to deliver excellence and create
      measurable impact on rural livelihood and sustainable farming.
    </p>

    <p
      className={`text-[16px] leading-[30px] text-justify text-black font-bold transition-all duration-700 ${
        step >= 5 ? showClass : hideClass
      }`}
    >
      We believe sustainability is essential for long-term growth,
      while collaboration among stakeholders is key to building a
      stronger and more inclusive agricultural ecosystem.
    </p>

    <p
      className={`text-[16px] leading-[30px] text-justify text-black font-bold transition-all duration-700 ${
        step >= 6 ? showClass : hideClass
      }`}
    >
      We remain committed to enabling and empowering marginal farmers
      through comprehensive 360-degree Agri solutions, technology
      integration, and real-time support systems.
    </p>

    <p
      className={`text-[16px] leading-[30px] text-justify text-orange-500 font-bold italic transition-all duration-700 ${
        step >= 7 ? showClass : hideClass
      }`}
    >
      It is not just a vision or mission — it is our passion to
      deliver Change, Excellence, Sustainability, and Impact.
    </p>


  </div>
</div>


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



// ===== CapabilityCore.jsx =====
const capabilities = [
  {
    text: "Passion to create impact and improve rural livelihoods",
    image: capLeaf1,
    side: "Right",
    width: 175,
    left: "calc(65% - 177px)",
    bottom: "0px",

    // TEXT POSITION — Near Leaf 1 Number
    textLeft: "calc(71% - 60px)",
    textBottom: "105px",
  },

  {
    text: "Global expertise in agri business domain for over 30 years",
    image: capLeaf2,
    side: "Left",
    width: 175,
    left: "calc(38% - 60px)",
    bottom: "0px",

    // TEXT POSITION — Near Leaf 2 Number
    textLeft: "calc(10% - 15px)",
    textBottom: "142px",
  },

  {
    text: "Robust knowledge on agriculture and operating geography",
    image: capLeaf3,
    side: "Right",
    width: 175,
    left: "calc(68% - 220px)",
    bottom: "0px",

    // TEXT POSITION — Near Leaf 3 Number
    textLeft: "calc(70% - 55px)",
    textBottom: "223px",
  },

  {
    text: "Best in class digital technology platform",
    image: capLeaf4,
    side: "Right",
    width: 175,
    left: "calc(52% - 222px)",
    bottom: "10px",

    // TEXT POSITION — Near Leaf 4 Number
    textLeft: "calc(15% - 50px)",
    textBottom: "292px",
  },

  {
    text: "Best in quality products and services",
    image: capLeaf5,
    side: "right",
    width: 175,
    left: "calc(50% - 12px)",
    bottom: "0px",

    // TEXT POSITION — Near Leaf 5 Number
    textLeft: "calc(52% + 148px)",
    textBottom: "410px",
  },

  {
    text: "Dedicated and expert team to deliver impact and excellence",
    image: capLeaf6,
    side: "Right",
    width: 175,
    left: "calc(50% - 190px)",
    bottom: "0px",

    // TEXT POSITION — Near Leaf 6 Number
    textLeft: "calc(50% - 450px)",
    textBottom: "490px",
  },
];

function CapabilityItem({ item }) {
  return (
    <>
      <motion.img
        src={item.image}
        alt=""
        draggable="false"
        className="absolute bottom-0 z-30 hidden select-none object-contain lg:block"
        style={{
          width: `${item.width}px`,
          left: item.left,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />

      <motion.p
        className={`absolute z-40 hidden w-[300px] text-[18px] font-medium leading-[30px] text-black lg:block ${
          item.side === "left" ? "text-right" : "text-left"
        }`}
        style={{
          left: item.textLeft,
          bottom: item.textBottom,
        }}
        initial={{ opacity: 0, x: item.side === "left" ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
      >
        {item.text}
      </motion.p>
    </>
  );
}

function CapabilityCore() {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.12) setVisibleCount(0);
    else if (latest < 0.26) setVisibleCount(1);
    else if (latest < 0.4) setVisibleCount(2);
    else if (latest < 0.54) setVisibleCount(3);
    else if (latest < 0.68) setVisibleCount(4);
    else if (latest < 0.82) setVisibleCount(5);
    else setVisibleCount(6);
  });

  return (
    <section ref={sectionRef} className="relative h-[700vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="relative mx-auto h-full max-w-[1200px]">
          <div className="absolute left-1/2 top-[56%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#74bf00]/[0.06] blur-3xl" />
          <div className="absolute left-[52%] top-[60%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff861c]/[0.05] blur-3xl" />

          <h2 className="absolute left-1/2 top-6 z-50 -translate-x-1/2 text-center text-5xl font-black tracking-tight text-black">
            Capability @ Core
          </h2>

          {capabilities.slice(0, visibleCount).map((item, index) => (
            <CapabilityItem key={index} item={item} />
          ))}

          <div className="absolute left-4 right-4 top-[15%] z-30 grid gap-4 lg:hidden">
            {capabilities.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-24 w-24 shrink-0 object-contain"
                  draggable="false"
                />

                <p className="text-sm font-medium leading-6 text-black">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ===== ProductShowcase.jsx =====
const categories = [
  "Boi Products",
  "Fungicides",
  "Herbicides",
  "Insecticide",
];

const products = [
  
  {
    id: 1,
    category: "Insecticide",
    name: "Canine",
    image: productShowcaseProduct1,
    title: "Canine",
    benefits: [
      "Broad-spectrum foliar insecticide with acaricidal activity",
      "Dual mode of action provides enhanced efficacy against insect pests",
      "Synergistic combination helps manage pest populations",
      "Quick reduction of pest infestation",
    ],
    dosage: "400 - 600 ml/acre",
    mode: "Contact & stomach action",
    crop: "Paddy, Brinjal, Cole Crops, Sugarcane & Cotton",
    packing: "100 ml, 250 ml, 500 ml, 1 litre",
  },
  {
    id: 2,
    category: "Insecticide",
    name: "Savage",
    image: productShowcaseProduct2,
    title: "Savage",
    benefits: [
      "Improves crop growth and plant strength",
      "Supports better nutrient absorption",
      "Suitable for multiple crops",
    ],
    dosage: "500 ml/acre",
    mode: "Foliar application",
    crop: "Vegetables, Fruits & Field Crops",
    packing: "250 ml, 500 ml, 1 litre",
  },
  {
    id: 3,
    category: "Insecticide",
    name: "Nutripole GR",
    image: productShowcaseProduct3,
    title: "Nutripole GR",
    benefits: [
      "Effective pest and disease protection",
      "Helps improve plant health",
      "Easy to apply and crop safe",
    ],
    dosage: "300 - 500 ml/acre",
    mode: "Contact action",
    crop: "Paddy, Vegetables & Pulses",
    packing: "100 ml, 250 ml, 500 ml",
  },

  {
    id: 4,
    category: "Insecticide",
    name: "Nutri-CYP",
    image: productShowcaseProduct4,
    title: "Nutri-CYP",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

  {
    id: 5,
    category: "Insecticide",
    name: "Shutter",
    image: productShowcaseProduct5,
    title: "Shutter",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

          {
    id: 6,
    category: "Insecticide",
    name: "Tejas",
    image: productShowcaseProduct6,
    title: "Tejas",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

  {
    id: 7,
    category: "Adjuvent",
    name: "NutriSil",
    image: productShowcaseProduct7,
    title: "NutriSil",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

    {
    id: 8,
    category: "Boi Products",
    name: "K-Force",
    image: productShowcaseProduct8,
    title: "K-Force",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

    {
    id: 9,
    category: "Boi Products",
    name: "Magnum",
    image: productShowcaseProduct9,
    title: "Magnum",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

      {
    id: 10,
    category: "Boi Products",
    name: "Marvel",
    image: productShowcaseProduct10,
    title: "Marvel",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

      {
    id: 11,
    category: "Fungicides",
    name: "FUSION",
    image: productShowcaseProduct11,
    title: "FUSION",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

      {
    id: 12,
    category: "Fungicides",
    name: "Hexacon",
    image: productShowcaseProduct12,
    title: "Hexacon",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

        {
    id: 13,
    category: "Fungicides",
    name: "Tifamide",
    image: productShowcaseProduct13,
    title: "Tifamide",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

        {
    id: 14,
    category: "Fungicides",
    name: "Wonder",
    image: productShowcaseProduct14,
    title: "Wonder",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

        {
    id: 15,
    category: "Herbicides",
    name: "GLYSOURCE 41",
    image: productShowcaseProduct15,
    title: "GLYSOURCE 41",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

          {
    id: 16,
    category: "Herbicides",
    name: "GLYSOURCE 71",
    image: productShowcaseProduct16,
    title: "GLYSOURCE 71",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

    {
    id: 17,
    category: "Herbicides",
    name: "NUTRIQUAT",
    image: productShowcaseProduct17,
    title: "NUTRIQUAT",
    benefits: [
      "Supports soil health",
      "Improves root development",
      "Eco-friendly biological solution",
    ],
    dosage: "1 litre/acre",
    mode: "Soil application",
    crop: "All Crops",
    packing: "500 ml, 1 litre, 5 litre",
  },

];

function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("Boi Products");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const activeProduct = filteredProducts[activeIndex];

  const floatingLeaves = [
    { image: productLeaf1, size: 60, left: "6%", duration: 14, delay: 0 },
    { image: productLeaf2, size: 45, left: "22%", duration: 18, delay: 2 },
    { image: productLeaf3, size: 55, left: "78%", duration: 16, delay: 1 },
    { image: productLeaf1, size: 38, left: "88%", duration: 20, delay: 3 },
    { image: productLeaf2, size: 50, left: "48%", duration: 22, delay: 4 },
  ];

  const nextProduct = () => {
    setActiveIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === filteredProducts.length - 1 ? 0 : prev + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [filteredProducts]);

  return (
    <>
      {/* EXISTING SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-white px-6 py-8">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {floatingLeaves.map((leaf, index) => (
            <motion.img
              key={index}
              src={leaf.image}
              alt="leaf"
              className="absolute opacity-20"
              style={{
                width: `${leaf.size}px`,
                left: leaf.left,
              }}
              initial={{ y: "110vh", rotate: 0 }}
              animate={{
                y: "-20vh",
                rotate: 360,
                x: [0, 30, -20, 10, 0],
              }}
              transition={{
                duration: leaf.duration,
                repeat: Infinity,
                ease: "linear",
                delay: leaf.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto mb-8 flex w-fit gap-4 rounded-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(0);
              }}
              className={`min-w-[120px] rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-black hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

          {/* PRODUCT BROCHURE */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-[22px] border border-orange-200 bg-white px-10 py-4 shadow-xl backdrop-blur-sm">
              <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-green-700">
                Product Brochure
              </p>

              <a
                href={'#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl"
              >
                View / Download PDF
                <span className="text-lg leading-none">↗</span>
              </a>
            </div>
          </div>


        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative flex min-h-[560px] items-end justify-center overflow-hidden">
            <img
              src={productGrass}
              alt="Grass Platform"
              className="absolute z-10"
              style={{
                width: "520px",
                bottom: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            {activeProduct && (
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  initial={{ x: -220, opacity: 0, scale: 0.75 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: 220, opacity: 0, scale: 0.75 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute z-30 max-h-[280px] object-contain"
                  style={{
                    bottom: "285px",
                    left: "50%",
                    translate: "-50% 0",
                  }}
                />
              </AnimatePresence>
            )}

            {/* PREVIEW PRODUCT */}
            {activeProduct && filteredProducts.length > 1 && (
              <motion.img
                key={`preview-${activeProduct.id}`}
                src={
                  filteredProducts[
                    activeIndex === filteredProducts.length - 1
                      ? 0
                      : activeIndex + 1
                  ]?.image
                }
                alt="Next Product"
                className="absolute z-20 max-h-[140px] object-contain opacity-80"
                style={{
                  bottom: "365px",
                  left: "15px",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* POSTVIEW PRODUCT */}
            {activeProduct && filteredProducts.length > 1 && (
              <motion.img
                key={`postview-${activeProduct.id}`}
                src={
                  filteredProducts[
                    activeIndex === 0
                      ? filteredProducts.length - 1
                      : activeIndex - 1
                  ]?.image
                }
                alt="Previous Product"
                className="absolute z-20 max-h-[140px] object-contain opacity-80"
                style={{
                  bottom: "365px",
                  right: "15px",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            <button
              onClick={prevProduct}
              className="absolute z-40 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-green-700 text-[30px] text-white shadow-xl"
              style={{ left: "0px", bottom: "285px" }}
            >
              ‹
            </button>

            <button
              onClick={nextProduct}
              className="absolute z-40 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-green-700 text-[30px] text-white shadow-xl"
              style={{ right: "15px", bottom: "285px" }}
            >
              ›
            </button>
          </div>

          <div className="pr-4">
            <h1 className="mb-12 text-4xl font-extrabold text-black">
              Our Inclusive Offerings
            </h1>

            {activeProduct && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <h2 className="mb-4 text-4xl font-extrabold text-orange-500">
                    {activeProduct.title}
                  </h2>

                  <h3 className="mb-2 text-base font-bold text-black">
                    Key Benefits
                  </h3>

                  <ul className="mb-6 max-w-xl space-y-2 text-sm text-black">
                    {activeProduct.benefits.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-1 text-sm text-black">
                    <p>
                      <strong>Dosage:</strong> {activeProduct.dosage}
                    </p>
                    <p>
                      <strong>Mode of Action:</strong> {activeProduct.mode}
                    </p>
                    <p>
                      <strong>Crop:</strong> {activeProduct.crop}
                    </p>
                    <p>
                      <strong>Available Packing:</strong>{" "}
                      {activeProduct.packing}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

{/* NEW PRODUCT GRID SECTION */}
<section className="relative overflow-hidden bg-white px-6 py-14">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-black text-black">
        {activeCategory} Products
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative flex h-[270px] items-center justify-center rounded-[22px] border border-green-600 bg-white p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
            <button className="absolute left-5 top-5 text-xl text-black">
              ♡
            </button>

            <span className="absolute right-5 top-5 text-[9px] font-bold text-black">
              Featured
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="max-h-[190px] object-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>

          <h3 className="mt-5 min-h-[42px] text-[17px] font-extrabold text-black">
            {product.title}
          </h3>

          <div className="mt-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() =>
                  setRatings((prev) => ({
                    ...prev,
                    [product.id]: star,
                  }))
                }
                className={`text-xl leading-none transition-all ${
                  star <= (ratings[product.id] || 0)
                    ? "text-orange-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <p className="mt-1 text-[10px] text-gray-500">
            {ratings[product.id]
              ? `You rated ${ratings[product.id]} star`
              : "Give your rating"}
          </p>

          <button
            onClick={() => setSelectedProduct(product)}
            className="mt-4 rounded-full bg-orange-500 px-6 py-2 text-[11px] font-bold text-white transition-all duration-300 hover:bg-orange-600"
          >
            View Product
          </button>
        </motion.div>
      ))}
    </div>
  </div>
      </section>
            {/* PRODUCT DETAIL POPUP */}
            <AnimatePresence>
              {selectedProduct && (
                <motion.div
                  className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProduct(null)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 40 }}
                    transition={{ duration: 0.3 }}
                    className="relative grid w-full max-w-4xl grid-cols-1 gap-8 rounded-[30px] bg-white p-8 shadow-2xl lg:grid-cols-2"
                  >
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute right-5 top-4 text-3xl font-light text-gray-500 hover:text-black"
                    >
                      ×
                    </button>

                    <div className="flex items-center justify-center rounded-[24px] border border-green-600 p-8">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-h-[300px] object-contain"
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-bold uppercase text-green-700">
                        {selectedProduct.category}
                      </p>

                      <h2 className="mb-5 text-4xl font-extrabold text-orange-500">
                        {selectedProduct.title}
                      </h2>

                      <h3 className="mb-3 text-base font-bold text-black">
                        Key Benefits
                      </h3>

                      <ul className="mb-6 space-y-2 text-sm text-black">
                        {selectedProduct.benefits.map((item, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2 text-sm text-black">
                        <p>
                          <strong>Dosage:</strong> {selectedProduct.dosage}
                        </p>
                        <p>
                          <strong>Mode of Action:</strong> {selectedProduct.mode}
                        </p>
                        <p>
                          <strong>Crop:</strong> {selectedProduct.crop}
                        </p>
                        <p>
                          <strong>Available Packing:</strong>{" "}
                          {selectedProduct.packing}
                        </p>
                        <p>
                          <strong>Your Rating:</strong>{" "}
                          {ratings[selectedProduct.id]
                            ? `${ratings[selectedProduct.id]} star`
                            : "Not rated yet"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        );
      }


// ===== OurInclusiveOfferings.jsx =====
function OfferingsCard({
  title,
  subtitle,
  body,
  imageSrc,
  isProduct = false,
  onProductClick,
  className = "",
  style,
}) {
  return (
    <div
      onClick={() => {
        if (isProduct && onProductClick) {
          onProductClick();
        }
      }}
      className={`absolute inset-0 flex overflow-hidden rounded-[28px] shadow-2xl transition-all duration-700 ease-out ${
        isProduct ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        width: "680px",
        height: "390px",
        background: "linear-gradient(180deg, #76BC00 0%, #048300 100%)",
        ...style,
      }}
    >
      <div className="relative z-50 flex w-[390px] flex-col justify-center px-10 text-white">
        <h2 className="text-[32px] font-black leading-none">{title}</h2>

        <p
          className={`relative z-50 mt-5 font-extrabold tracking-wide ${
            isProduct
              ? "whitespace-nowrap text-[15px] leading-none"
              : "max-w-[285px] whitespace-normal text-[14px] leading-[1.25]"
          }`}
        >
          {subtitle}
        </p>

        {body && (
          <div className="relative z-50 mt-7 text-[14px] font-semibold leading-[1.8]">
            <div className="whitespace-nowrap">{body}</div>
          </div>
        )}

        {isProduct && (
          <div className="relative z-50 mt-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onProductClick) {
                  onProductClick();
                }
              }}
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-black uppercase tracking-wide text-[#048300] shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              Click here to know more
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#048300] text-[15px] text-white transition-all duration-300 group-hover:bg-white group-hover:text-orange-500">
                →
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="absolute right-0 top-0 z-10 flex h-full w-[420px] items-start justify-end pr-4">
        <img
          src={imageSrc}
          alt={title}
          className="max-h-[430px] w-auto object-contain"
          style={{
            position: "relative",
            top: "30px",
          }}
        />
      </div>
    </div>
  );
}

function OurInclusiveOfferings() {
  const sectionRef = useRef(null);

  const [cardStage, setCardStage] = useState(0);
  const [showProductShowcase, setShowProductShowcase] = useState(false);

  const cards = [
    {
      title: "PRODUCTS",
      subtitle: "Complete Agri Input Portfolio",
      imageSrc: offerings1,
      isProduct: true,
      body: (
        <>
          Agrochemicals
          <br />
          Biologicals
          <br />
          Specialities and water soluble fertilizers
          <br />
          Fertilizer
        </>
      ),
    },
    {
      title: "KNOWLEDGE",
      subtitle: "On ground and online 24x7 expert knowledge support",
      imageSrc: offerings2,
    },
    {
      title: "SERVICE",
      subtitle: "24x7 advisory services through best in class Agritech Platform",
      imageSrc: offerings3,
    },
    {
      title: "TECHNOLOGY",
      subtitle: "Best in class digital platform and technology interface",
      imageSrc: offerings4,
    },
  ];

  useEffect(() => {
    const closePopup = () => {
      setShowProductShowcase(false);
    };

    window.addEventListener("close-product-showcase", closePopup);

    return () => {
      window.removeEventListener("close-product-showcase", closePopup);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const totalScrollable = section.offsetHeight - window.innerHeight;

      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);

      const progress = scrolled / totalScrollable;

      if (progress < 0.25) setCardStage(0);
      else if (progress < 0.5) setCardStage(1);
      else if (progress < 0.75) setCardStage(2);
      else setCardStage(3);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative h-[400vh] bg-[#f5f5f2]">
        <div className="sticky top-0 z-10 flex h-screen flex-col overflow-hidden">
          {/* TITLE */}
          <div className="relative z-10 pt-[20px] text-center">
            <h1 className="text-[36px] font-black leading-none tracking-[-1px] text-black">
              Our Inclusive Offerings
            </h1>

            <p className="mx-auto mt-4 max-w-[1180px] text-[22px] font-semibold leading-snug text-orange-500">
              Diagnose - Advise - Solution - Deliver – all at one place:
              Accurate, Seamless, Fast and Cost Effective!
            </p>
            
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-1 items-start justify-center pt-[50px]">
            <div
              className="grid items-center justify-center"
              style={{
                width: "100%",
                maxWidth: "1220px",
                gridTemplateColumns: "380px 680px",
                columnGap: "15px",
                transform: "translateX(-45px)",
              }}
            >
              {/* LEFT MASCOT */}
              <div className="flex h-[500px] w-[380px] flex-col items-center justify-center">
                <img
                  src={mascot}
                  alt="Mascot"
                  className="block h-auto w-[320px] max-w-[320px] object-contain"
                />

                <button
                  style={{
                    marginTop: "18px",
                    background: "#048300",
                    color: "#ffffff",
                    padding: "14px 42px",
                    borderRadius: "999px",
                    fontSize: "17px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
                  }}
                >
                  Download App
                </button>
              </div>

              {/* CARD SECTION */}
              <div className="relative h-[390px] w-[680px] overflow-hidden rounded-[28px]">
                {cards.map((card, index) => {
                  const isCurrent = index === cardStage;
                  const isPrevious = index < cardStage;

                  const translateY = isCurrent
                    ? 0
                    : isPrevious
                    ? -430
                    : 430;

                  const opacity = isCurrent ? 1 : 0;

                  const scale = isCurrent ? 1 : 0.98;

                  const zIndex = isCurrent ? 100 : 10;

                  return (
                    <OfferingsCard
                      key={card.title}
                      {...card}
                      onProductClick={() => setShowProductShowcase(true)}
                      style={{
                        opacity,
                        transform: `translateY(${translateY}px) scale(${scale})`,
                        zIndex,
                        pointerEvents: isCurrent ? "auto" : "none",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE POPUP */}
      <AnimatePresence>
        {showProductShowcase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 top-0 z-[999] h-screen w-[calc(100%-90px)] bg-white"
          >
            <button
              onClick={() => setShowProductShowcase(false)}
              className="absolute right-6 top-6 z-[10000] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-black text-[30px] text-white shadow-xl"
            >
              ×
            </button>

            <div className="h-screen overflow-y-auto">
              <ProductShowcase />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// ===== FarmSantaServices.jsx =====
// ===== FarmSantaServices.jsx =====
const services = [
  {
    label: "Crop Advisory",
    image: santa1,
    description:
      "Managing crops becomes easier with the right guidance at the right time having right solutions ready nearby. FarmSanta combines cutting edge AI technology with real time expert agricultural knowledge specialist support to deliver personalized advice based on crop, soil, weather and real time field problem. From sowing to harvest, farmers get full stack authentic expert support to protect their crops with reduced pesticides usage, accurate and cost effective solutions alongwith timely delivery at their doorstep. Aim is focussed to improve productivity, reduce input usage, save farming cost, ensure availability and assure Happy Farming Always!",
  },
  {
    label: "Diagnosis",
    image: santa2,
    description:
      "Right and timely diagnosis is extremely critical to ensure right detection of problem and to reduce crop loss and spreading of the infestation. FarmSanta makes it easier and precise to identify the problem quickly and accurately with minimal lead time. Farmers can detect pest attacks, diseases, or nutrient deficiencies through AI/ML based analysis and expert knowledge support to take timely action to protect their precious crops.",
  },
  {
    label: "Prescription",
    image: santa3,
    description:
      "Once the problem is identified, prescribing the right solution is crucial to save the crop. FarmSanta provides precise recommendations on products, dosage, and application methods tailored to each issue with most cost effective approach. This helps farmers avoid unnecessary costs, ensure effective input usage and achieve better results while maintaining sustainable and responsible farming practices.",
  },
  {
    label: "Solution",
    image: santa4,
    description:
      "Turning recommendations into providing right products on time at farmers hand is what truly matters to support farmers in field. FarmSanta offers full range of latest agri input products through its comprehensive portfolio in NutriSource Bazar guaranteeing best quality, class leading packaging and most competitive prices. Farmers can buy directly all the agri inputs on the app and pay online enjoying a seamless purchase experience. FarmSanta App ensures farmers receive best quality products at quickest possible time to protect their crops and improve productivity.",
  },
  {
    label: "Delivery",
    image: santa5,
    description:
      "Ensuring delivery of right products at the right time finally makes all the difference and ensures farmer’s peace of mind. FarmSanta connects farmers directly with NutriSource Bazar for easy and reliable access to quality agricultural inputs. Thereafter through its vast retail network, it ensures quick delivery of the products to the farmers either through local retailers or through assisted doorstep delivery options.",
  },
];

function FarmSantaServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#f7f7f4]">
      {/* RIGHT GREEN GLOW */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[90px] bg-gradient-to-l from-[#048300] via-[#9bd55f] to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-8">
        <div
          className="grid items-center"
          style={{
            width: "100%",
            maxWidth: "1260px",
            gridTemplateColumns: "700px 610px",
            columnGap: "30px",
            transform: "translateX(-45px)",
          }}
        >
          {/* LEFT SECTION */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <img
                src={mascot}
                alt="FarmSanta Mascot"
                className="h-auto w-[380px] max-w-none object-contain"
              />

              <button className="mt-3 whitespace-nowrap rounded-full bg-[#048300] px-8 py-4 text-[14px] font-black uppercase text-white shadow-lg">
                Download App
              </button>
            </div>

            <div className="max-w-[420px]">
              <img
                src={farmSantaLogo}
                alt="FarmSanta"
                className="mb-3 h-auto w-[220px] object-contain"
              />

              <h1 className="whitespace-nowrap text-[34px] font-black italic leading-none text-orange-500">  
                Happy Farming Always!
              </h1>

              <p
                key={activeIndex}
                className="mt-8 text-justify text-[15px] font-medium leading-[1.5] text-black transition-all duration-500"
              >
                {services[activeIndex].description}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE + BUTTONS */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex h-[430px] w-[610px] items-center justify-center">
              <img
                key={activeIndex}
                src={services[activeIndex].image}
                alt={services[activeIndex].label}
                className="h-auto max-h-[430px] w-auto max-w-[610px] object-contain transition-all duration-500"
              />
            </div>

            <div className="mt-4 flex w-[520px] flex-wrap justify-center gap-3">
              {services.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[42px] min-w-[130px] rounded-full border text-[14px] font-black transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#ff5a1f] bg-[#ff5a1f] text-white"
                      : "border-[#bfbfbf] bg-white text-[#a6a6a6] hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TeamOnMission.jsx =====

const founderProfile = {
  name: "Murari Mohan Rakshit",
  designation: "Founder & CEO",
  image: member2,
  profile:
    "Visionary entrepreneur leading NutriSource with a strong commitment to sustainable agriculture, farmer empowerment, business growth, and rural transformation.",
};

const teamMembers = [
  {
    name: "MD. Waseem Makrani",
    designation: "Director & Technology Head",
    image: member1,
    profile:
      "Seasoned IT and business leader with 17+ years of experience in digital transformation, enterprise systems, and agritech innovation.",
  },
  {
    name: "Pinaki Sharma",
    designation: "Regional Business Manager",
    image: member4,
    profile:
      "Agriculture industry veteran with 30+ years of experience across sales, crop portfolio management, and agri-business operations.",
  },
  {
    name: "Abhichal Debnath",
    designation: "Regional Business Manager",
    image: member3,
    profile:
      "M.Sc (Agriculture) with 28+ years of experience in Agro Chemical industry. Ex Nagarjuna, Dhanuka, Biodstadt and Grow Indigo.",
  },
  {
    name: "Naznin",
    designation: "Director & Product Manager",
    image: member5,
    profile:
      "PhD in Plant Pathology with 4 years of experience in R&D, Compliance, Crop Nutrition, and Product Management.",
  },
];

function TeamOnMission({ onFounderKnowMore }) {
  const scrollRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!container) return;

      if (!pauseRef.current) {
        scrollAmount += 0.6;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }

        container.scrollTo({
          left: scrollAmount,
        });
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f7f4] pb-4">
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[95px] bg-gradient-to-l from-[#048300] via-[#8fd14f] to-transparent" />

      {/* TITLE - MOVED UP */}
      <div className="relative z-20 pt-[16px] text-center">
        <h1 className="text-[42px] font-black leading-none tracking-[-1px] text-black">
          Team on Mission
        </h1>
      </div>

      {/* FOUNDER PROFILE - MOVED UP + MORE COMPACT */}
      <div className="relative z-20 mx-auto mt-4 flex max-w-[800px] items-center gap-4 rounded-[26px] border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-md">
        <div className="relative h-[130px] w-[130px] flex-shrink-0 overflow-hidden rounded-[22px] bg-[#f1f1ea]">
          <img
            src={founderProfile.image}
            alt={founderProfile.name}
            className="h-full w-full object-cover object-top"
          />

          <div className="absolute left-0 top-0 rounded-br-[16px] bg-[#f58220] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
            Founder
          </div>
        </div>

        <div className="flex-1 pr-3">
          <p className="mb-1 text-[10.5px] font-black uppercase tracking-[2.5px] text-[#048300]">
            Leadership Vision
          </p>

          <h2 className="text-[26px] font-black leading-tight text-black">
            {founderProfile.name}
          </h2>

          <p className="mt-1 text-[13px] font-bold uppercase tracking-wide text-[#f58220]">
            {founderProfile.designation}
          </p>

          <p className="mt-2 max-w-[560px] text-[13px] font-medium leading-5 text-[#444]">
            {founderProfile.profile}
          </p>

          <button
            type="button"
            onClick={onFounderKnowMore}
            className="mt-3 inline-flex items-center rounded-full bg-[#048300] px-5 py-2 text-[12.5px] font-bold text-white shadow-md transition-all duration-300 hover:bg-[#f58220] hover:shadow-lg"
          >
            Know More
          </button>
        </div>
      </div>

      {/* TEAM SLIDER - MOVED UP */}
      <div className="relative mt-[18px]">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[160px] bg-gradient-to-r from-[#f7f7f4] via-[#f7f7f4]/95 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-[160px] bg-gradient-to-l from-[#f7f7f4] via-[#f7f7f4]/95 to-transparent" />

        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-8 overflow-x-scroll px-[140px] py-2"
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative flex-shrink-0"
              onMouseEnter={() => {
                pauseRef.current = true;
              }}
              onMouseLeave={() => {
                pauseRef.current = false;
              }}
            >
              <div className="relative h-[335px] w-[250px] overflow-hidden rounded-[28px] bg-white shadow-xl">
                <div className="relative h-[235px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-[12.5px] leading-[1.5] text-white">
                      {member.profile}
                    </p>
                  </div>
                </div>

                <div className="flex h-[100px] flex-col justify-center px-5">
                  <h3 className="text-[19px] font-black leading-tight text-black">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-[#048300]">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}


// ===== FounderCeoProfile.jsx =====
function FounderCeoProfile({ onBackHome, onBackTeam }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f7f4] px-8 py-12">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[95px] bg-gradient-to-l from-[#048300] via-[#8fd14f] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 rounded-[40px] bg-white/85 p-8 shadow-2xl backdrop-blur-md lg:grid-cols-[380px_1fr]">
        <div className="relative overflow-hidden rounded-[34px] bg-[#f1f1ea] shadow-xl">
          <img
            src={member2}
            alt="Murari Mohan Rakshit"
            className="h-[480px] w-full object-cover object-top"
          />

          <div className="absolute left-0 top-0 rounded-br-[24px] bg-[#f58220] px-6 py-3 text-[13px] font-black uppercase tracking-widest text-white">
            Founder & CEO
          </div>
        </div>

        <div>
          <p className="mb-4 text-[13px] font-black uppercase tracking-[3px] text-[#048300]">
            Founder Profile
          </p>

          <h1 className="text-[44px] font-black leading-tight text-black">
            (Dr) Murari M Rakshit
          </h1>

          <p className="mt-3 text-[18px] font-bold uppercase tracking-wide text-[#f58220]">
            Founder & CEO
          </p>

          <div className="mt-6 max-h-[520px] overflow-y-auto pr-4">
            <p className="text-[16px] font-medium leading-8 text-[#444]">
              (Dr) Murari M Rakshit is a seasoned Agri Input Business professional
              with over 30 years of comprehensive experience in the Global Fertilizer
              and Agri Input Industry, possessing deep industry expertise and
              strategic market insight.
            </p>

            <p className="mt-5 text-[16px] font-medium leading-8 text-[#444]">
              He is widely regarded as a thought leader in the global fertilizer
              industry, especially known for his strong advocacy and extensive
              contributions towards Sub-Saharan Africa and South-East Asian markets.
            </p>

            <p className="mt-5 text-[16px] font-medium leading-8 text-[#444]">
              Prior to his entrepreneurial journey, he served as Vice President –
              Fertilizer Division at Olam International Ltd., Singapore, a global
              agri-commodity giant with business operations across multiple
              geographies, from 2009 to 2020.
            </p>

            <p className="mt-5 text-[16px] font-medium leading-8 text-[#444]">
              With deep passion for agriculture, agri-value chain transformation,
              and rural livelihood enhancement, he founded NutriSource in 2020 with
              a vision to promote sustainable agriculture and empower farming
              communities through innovation and technology.
            </p>

            <p className="mt-5 text-[16px] font-medium leading-8 text-[#444]">
              FarmSanta — the unique and all-inclusive Agritech platform — is his
              brainchild and has been recognized globally by winning the Africa
              Agri-Tech Innovator of the Year Award in 2024.
            </p>

            <div className="mt-8 rounded-[24px] border border-[#048300]/15 bg-[#f8fbf4] p-6">
              <h3 className="mb-5 text-[22px] font-black text-[#048300]">
                Achievements & Global Recognition
              </h3>

              <ul className="space-y-4 text-[15px] leading-7 text-[#444]">
                <li>
                  • Ambassador for the Republic of Singapore at the International
                  Fertilizer Association (IFA) from 2015 to 2024.
                </li>

                <li>
                  • Held several strategic committee positions at IFA including:
                  Global Public Affairs & Communication Committee, Market
                  Intelligence Committee, Precision Crop Nutrition Committee, and
                  Africa Committee.
                </li>

                <li>
                  • Represented IFA at the United Nations Headquarters, New York,
                  during HLPF 2019 to address Climate Change and the Fertilizer
                  Industry’s responsibilities towards sustainability.
                </li>

                <li>
                  • Recognized as a prominent speaker at leading global fertilizer
                  conferences organized by Argus, CRU, ICIS, and GPCA.
                </li>

                <li>
                  • Awarded “Agricultural CEO of the Year – South East Asia” for
                  consecutive years 2023 and 2024 by APAC INSIDER, UK.
                </li>

                <li>
                  • Received the prestigious “AGRITECH INNOVATOR AWARD 2024” by
                  Argus Media for developing Africa’s leading Agritech platform,
                  FarmSanta.
                </li>

                <li>
                  • Honoured with the “PRIME ASIA AWARD 2023” in Bangkok for
                  meaningful contribution towards agriculture and farming.
                </li>

                <li>
                  • Featured in the Singapore Chemicals Report published by GBR
                  Reports UK in 2023 and 2024 representing the Fertilizer Industry.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onBackHome}
              className="rounded-full bg-[#048300] px-7 py-3 text-[14px] font-bold text-white shadow-md transition-all duration-300 hover:bg-[#f58220]"
            >
              Back to Home
            </button>

            <button
              type="button"
              onClick={onBackTeam}
              className="rounded-full border border-[#048300] px-7 py-3 text-[14px] font-bold text-[#048300] transition-all duration-300 hover:bg-[#048300] hover:text-white"
            >
              Back to Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== AwardsPage.jsx =====
const awards = [
{ title: "Agri-Tech Innovator of the Year 2024", subtitle: "Receiving prestigious recognition for driving innovation and digital transformation in agriculture.", image: award1 },
{ title: "Agri-Tech Innovator of the Year 2024", subtitle: "Honoured with a distinguished trophy celebrating excellence in agri-technology leadership.", image: award2 },
{ title: "Agri-Tech Innovator of the Year 2024", subtitle: "Official certification recognising impactful contributions towards sustainable agricultural advancement.", image: award3 },
{ title: "International Prime Award 2023", subtitle: "Recognising global excellence, visionary leadership, and outstanding business achievements.", image: award4 },
{ title: "APAC CEO of the Year 2023", subtitle: "Celebrating transformational leadership and strategic excellence across the Asia-Pacific region.", image: award5 },
{ title: "APAC CEO of the Year 2024", subtitle: "Honoured for exceptional leadership, innovation, and industry-driven business growth.", image: award6 },
{ title: "APAC CEO of the Year 2023", subtitle: "Certificate of recognition for exemplary leadership and professional excellence.", image: award7 },
{ title: "APAC CEO of the Year 2024", subtitle: "Recognised for continued excellence in leadership, innovation, and organizational impact.", image: award8},
];

function AwardsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextAward = () => {
    setActiveIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextAward, 3500);
    return () => clearInterval(interval);
  }, []);

  const activeAward = awards[activeIndex];

return (
  <section className="relative h-screen overflow-hidden bg-[#f7f9f4] px-6 py-6 text-black">
    {/* LIGHT TECH BACKGROUND */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(118,188,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(118,188,0,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
    <div className="absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[#76BC00]/10 blur-[100px]" />
    <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-orange-500/10 blur-[110px]" />

    <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col">
      {/* HEADER - COMPACT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto mb-4 max-w-4xl text-center"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#76BC00]/30 bg-white text-[#048300] shadow-[0_0_24px_rgba(118,188,0,0.16)]">
          <Award size={27} strokeWidth={2.4} />
        </div>

        <p className="text-[12px] font-black uppercase tracking-[0.38em] text-orange-500">
          Noise We Create
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
          Awards & Recognition
        </h1>
      </motion.div>

      {/* MAIN TECH SLIDER */}
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[28px] border border-[#76BC00]/20 bg-white/85 p-4 shadow-[0_0_35px_rgba(118,188,0,0.1)] backdrop-blur-xl">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#76BC00] to-transparent" />

          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            {/* IMAGE SECTION */}
            <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[22px] border border-[#76BC00]/10 bg-gradient-to-br from-white to-[#f4faea] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,188,0,0.12),transparent_60%)]" />

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.55 }}
                className="relative rounded-[20px] border border-[#76BC00]/20 bg-white p-3 shadow-[0_0_28px_rgba(118,188,0,0.13)]"
              >
                <img
                  src={activeAward.image}
                  alt={activeAward.title}
                  className="max-h-[285px] w-auto rounded-[15px] object-contain"
                />
              </motion.div>
            </div>

            {/* CONTENT SECTION */}
            <div className="flex h-[360px] flex-col justify-center rounded-[22px] border border-[#76BC00]/10 bg-gradient-to-br from-[#ffffff] to-[#f3f8ee] p-7">
              <div className="mb-5 w-fit rounded-full border border-orange-300/40 bg-orange-100 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-orange-600">
                Recognition
              </div>

              <motion.h2
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[28px] font-medium italic leading-tight text-[#ff6b00] md:text-[38px]"
              >
                {activeAward.title}
              </motion.h2>

              <motion.p
                key={`sub-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48 }}
                className="mt-4 text-[15px] font-medium leading-7 text-black"
              >
                {activeAward.subtitle}
              </motion.p>

              <div className="mt-7 flex gap-4">
                <button
                  type="button"
                  onClick={prevAward}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#76BC00]/30 bg-white text-[30px] font-black text-[#048300] shadow-lg transition-all duration-300 hover:bg-[#76BC00] hover:text-white"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextAward}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#76BC00]/30 bg-white text-[30px] font-black text-[#048300] shadow-lg transition-all duration-300 hover:bg-[#76BC00] hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* THUMBNAILS - COMPACT */}
        <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-1">
          {awards.map((award, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`min-w-[86px] overflow-hidden rounded-xl border p-1.5 transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#76BC00] bg-[#76BC00]/10 shadow-[0_0_16px_rgba(118,188,0,0.16)]"
                  : "border-gray-200 bg-white hover:border-[#76BC00]/40"
              }`}
            >
              <img
                src={award.image}
                alt={award.title}
                className="h-[48px] w-full rounded-lg object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}

// ===== JoinTeamPage.jsx =====
function JoinTeamPage() {
  const [showCareerDetails, setShowCareerDetails] = useState(false);

  return (
    <>
      {!showCareerDetails ? (
        <section className="relative min-h-screen overflow-hidden bg-white px-6 py-12">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[95px] bg-gradient-to-l from-[#048300] via-[#8fd14f] to-transparent" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="mb-10 text-[32px] font-black text-black">
              Grow With Us
            </h1>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-[1.15fr_0.9fr_0.8fr]">
              <div className="grid grid-rows-2 gap-2">
                <img src={growImage} alt="Team" className="h-[260px] w-full object-cover" />
                <div className="grid grid-cols-2 gap-2">
                  <img src={org1} alt="Office" className="h-[130px] w-full object-cover" />
                  <img src={org2} alt="Meeting" className="h-[130px] w-full object-cover" />
                </div>
              </div>

              <div className="grid grid-rows-2 gap-2">
                <img src={org3} alt="Team Work" className="h-[130px] w-full object-cover" />
                <img src={org4} alt="Workspace" className="h-[260px] w-full object-cover" />
              </div>

              <div className="grid grid-rows-2 gap-2">
                <img src={org5} alt="People" className="h-[260px] w-full object-cover" />

                <button
                  onClick={() => setShowCareerDetails(true)}
                  className="flex h-[130px] flex-col items-start justify-center bg-orange-500 px-8 text-left text-white transition-all duration-300 hover:bg-orange-600"
                >
                  <span className="text-[18px] font-black">Join Us Now</span>
                  <span className="mt-2 text-2xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative min-h-screen overflow-hidden bg-white px-8 py-12">
          <button
            onClick={() => setShowCareerDetails(false)}
            className="absolute left-8 top-8 z-20 rounded-full bg-gray-100 px-5 py-2 text-sm font-bold text-black hover:bg-gray-200"
          >
            ← Back
          </button>

          <div className="mx-auto grid min-h-[80vh] max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1 className="mb-6 text-[44px] font-black leading-tight text-black">
                Grow with Us
              </h1>

              <p className="mb-6 text-[15px] font-black leading-6 text-black">
                Are you honest and passionate about bringing positive impact on
                farming community and Rural livelihood?
              </p>

              <ul className="space-y-3 text-[15px] font-medium leading-6 text-black">
                <li>✺ Do you ignite and recharge yourself with new innovative ideas to improve rural livelihood?</li>
                <li>✺ Do you want to be visible among crowd and ordinary thinkers?</li>
                <li>✺ Do you want to be the Changemakers?</li>
                <li>✺ Do you believe in yourself and your dreams?</li>
              </ul>

              <p className="mt-5 text-[15px] font-black text-orange-500">
                Then the door is open for you with us…….
              </p>

              <p className="mt-2 text-[15px] font-black text-green-700">
                Don’t be ordinary, add a bit of passion and deliver excellence!
              </p>

              <a
                href="mailto:hr@nutrisourcegroup.com?subject=Career%20Application%20-%20NutriSource&body=Dear%20HR%20Team,%0D%0A%0D%0AI%20am%20interested%20to%20join%20Team%20NutriSource.%20Please%20find%20my%20profile%20details%20below.%0D%0A%0D%0AName:%0D%0AMobile:%0D%0AEmail:%0D%0AInterested%20Role:%0D%0AExperience:%0D%0A%0D%0ARegards,"
                className="mt-10 inline-flex items-center gap-4 rounded-full bg-green-700 px-7 py-4 text-[15px] font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800"
              >
                Connect with HR <span className="text-2xl">→</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full shadow-2xl">
                <iframe
                  title="Grow With Us Video"
                  src="https://www.youtube.com/embed/T1ogWaJdfFA"
                  className="h-full w-full scale-125"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-[18px] ring-white/70" />
              </div>

              <div className="absolute right-0 top-5 h-4 w-4 rounded-full bg-green-400" />
              <div className="absolute right-20 top-28 h-20 w-20 overflow-hidden rounded-full shadow-lg">
                <img src={member5} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-16 right-12 h-8 w-8 rounded-full bg-blue-700" />
              <div className="absolute bottom-5 right-0 h-10 w-10 rounded-full bg-gray-300" />
              <div className="absolute left-16 top-4 h-8 w-8 overflow-hidden rounded-full shadow-lg">
                <img src={member4} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute bottom-10 left-28 h-12 w-12 overflow-hidden rounded-full shadow-lg">
                <img src={member1} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// ===== ContactPage.jsx =====
const OFFICE_ADDRESS =
  "NutriSource India Private Limited, Kolkata, West Bengal, India";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    OFFICE_ADDRESS
  )}&output=embed`;

  return (
    <section className="relative h-screen overflow-hidden bg-[#f7f9f4] px-6 py-8">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(118,188,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(118,188,0,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#76BC00]/12 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-orange-500/12 blur-[120px]" />

      {/* RIGHT GREEN GLOW */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[90px] bg-gradient-to-l from-[#048300]/80 via-[#9bd55f]/50 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center">
        {/* HEADER */}
        <div className="mb-7 text-center">
          <p className="text-[13px] font-black uppercase tracking-[0.45em] text-orange-500">
            Connect With Us
          </p>

          <h1 className="mt-3 text-[38px] font-black leading-none tracking-tight text-black md:text-[48px]">
            Let’s Start a Conversation
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-7 text-gray-600">
            Reach out to NutriSource for business enquiries, partnerships,
            product information and support.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="grid max-h-[calc(100vh-210px)] overflow-hidden rounded-[34px] border border-[#76BC00]/20 bg-white/85 p-4 shadow-[0_0_45px_rgba(118,188,0,0.12)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ffffff] to-[#f3f8ee] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.25em] text-[#048300]">
                  Head Office
                </p>

                <h2 className="mt-2 text-[24px] font-black text-black">
                  NutriSource India Private Limited
                </h2>
              </div>

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#048300] p-3 text-white shadow-lg">
                <MapPin className="h-7 w-7" />
              </div>
            </div>

            {/* MAP */}
            <div className="relative h-[245px] overflow-hidden rounded-[22px] border border-[#76BC00]/15 bg-white shadow-xl">
              <iframe
                title="Office Location"
                src={mapUrl}
                className="h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
                loading="lazy"
                allowFullScreen
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-[18px] border border-[#76BC00]/15 bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#048300]/10 text-[#048300]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-[14px] font-black text-black">
                    Email Us
                  </h3>

                  <p className="mt-1 break-all text-[12px] font-semibold text-gray-600">
                    Contact@nutrisource.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[18px] border border-orange-200 bg-white p-3 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-[14px] font-black text-black">
                    Visit Office
                  </h3>

                  <p className="mt-1 text-[12px] font-semibold leading-5 text-gray-600">
                    12, Street Number 692, AA II, Action Area IID, Newtown, Kolkata, West Bengal 700161
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#048300] to-[#76BC00] p-5 text-white">
            <div className="mb-4">
              <h2 className="mt-2 text-[30px] font-black leading-none">
                Say Hi
              </h2>

              <p className="mt-3 text-[13px] font-medium leading-6 text-white/85">
                Share your details and our team will connect with you shortly.
              </p>
            </div>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-[48px] w-full rounded-[14px] border border-white/20 bg-white/95 px-4 text-[14px] font-semibold text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-300/30"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-[48px] w-full rounded-[14px] border border-white/20 bg-white/95 px-4 text-[14px] font-semibold text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-300/30"
              />

              <textarea
                placeholder="Write your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="h-[110px] w-full resize-none rounded-[14px] border border-white/20 bg-white/95 px-4 py-3 text-[14px] font-semibold text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-300/30"
              />

              <button
                type="submit"
                className="group flex h-[46px] w-full items-center justify-center gap-3 rounded-[14px] bg-orange-500 text-[15px] font-black uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-black"
              >
                Send Now
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Footer.jsx =====
function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.3c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.8V24h-4V8z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3.2-3.3.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.5l-.4 2.9H13v7A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#9EDB45] via-[#84C52D] to-[#5DAA18] text-white">
      <div className="absolute left-[-80px] top-[-80px] h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] h-80 w-80 rounded-full bg-green-900/10 blur-3xl" />

      <div className="relative w-full px-8 py-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.9fr_1fr]">
          <div>
            <h2 className="mb-4 whitespace-nowrap text-2xl font-black tracking-wide text-white lg:text-[30px]">
              NutriSource India Pvt. Ltd.
            </h2>

            <div className="space-y-1 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-lime-100">📍</div>
                <p>
                  12, Street Number 692, AA II, Action Area IID, Newtown, New Town
                  <br />
                  Kolkata, West Bengal - 700161, India
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="text-lime-100">📞</div>
                <a href="tel:+919999999999" className="hover:text-lime-100">
                  +91 99999 99999
                </a>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="text-lime-100">✉️</div>
                <a
                  href="mailto:info@nutrisource.in"
                  className="hover:text-lime-100"
                >
                  info@nutrisource.in
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#276B12]"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:-ml-16">
            <div className="relative flex h-[190px] w-[190px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="absolute inset-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl" />

              <img
                src={mascot}
                alt="Mascot"
                className="relative z-10 h-[160px] w-[160px] object-contain"
              />
            </div>

            <a
              href="/NutriSource-Brochure.pdf"
              download
              className="mt-3 rounded-full bg-white px-10 py-2 text-sm font-bold text-[#276B12] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-lime-100"
            >
              Download
            </a>
          </div>

          <div className="lg:-ml-10">
            <h3 className="mb-5 text-xl font-bold text-white">Newsletter</h3>

            <p className="mb-3 text-sm leading-6 text-white/90">
              Subscribe to receive updates about our products, innovations, and
              agricultural solutions.
            </p>

            <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/15 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none"
              />

              <button className="bg-white px-5 text-sm font-bold text-[#276B12] transition-all duration-300 hover:bg-lime-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/85 md:flex-row">
          <p>
            © {new Date().getFullYear()} NutriSource India Pvt. Ltd. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-lime-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lime-100">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// ===== RightMenu.jsx =====
const menu = [
  { name: "Home", icon: Home, target: "home" },
  { name: "Grow With Us", icon: TrendingUp, target: "grow-with-us" },
  { name: "Organization We Built", icon: Building, target: "organization" },
  { name: "Passion @ Core", icon: Heart, target: "passion-core" },
  { name: "Capability @ Core", icon: Cpu, target: "capability-core" },
  { name: "Our Inclusive Offerings", icon: Package, target: "inclusive-offerings" },
  { name: "FarmSanta", icon: Leaf, target: "farmsanta" },
  { name: "Team on Mission", icon: Users, target: "team" },
  { name: "Noise We Create", icon: Award, target: "awards" },
  /* { name: "Smiling Moments", icon: Smile, target: "video" }, */
  { name: "Growth With Us", icon: Briefcase, target: "join-team" },
  { name: "Say Hi", icon: MessageCircle, target: "say-hi" },
];

function RightMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (target) => {
    window.dispatchEvent(new Event("close-product-showcase"));

    setTimeout(() => {
      const section = document.getElementById(target);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`fixed top-0 right-0 h-screen z-[10000] transition-all duration-500 ${
        open ? "w-72" : "w-20"
      }`}
      style={{
        background:
          "linear-gradient(to left, rgba(15,90,35,1) 0%, rgba(50,145,35,0.95) 35%, rgba(110,190,46,0.7) 65%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="h-full flex flex-col justify-center gap-2 px-3">
        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleMenuClick(item.target)}
              className="group flex items-center gap-3 text-white cursor-pointer px-3 py-2 rounded-l-2xl rounded-r-none transition-all duration-300 hover:bg-gradient-to-r hover:from-green-900 hover:to-green-600 hover:-translate-x-1 text-left"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white group-hover:text-green-800 transition-all duration-300">
                <Icon size={17} strokeWidth={2.3} />
              </div>

              {open && (
                <span className="text-[13px] font-semibold whitespace-nowrap tracking-wide">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ===== Main App.jsx =====
/* import VideoSection from "./pages/VideoSection"; */


export default function App() {
  const [showFounderProfile, setShowFounderProfile] = useState(false);

  const scrollToSection = (sectionId) => {
    setShowFounderProfile(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  if (showFounderProfile) {
    return (
      <FounderCeoProfile
        onBackHome={() => scrollToSection("home")}
        onBackTeam={() => scrollToSection("team")}
      />
    );
  }

  return (
    <>
      <div id="home">
        <Hero />
      </div>

{/*       <div id="video">
        <VideoSection />
      </div>
 */}
      <div id="grow-with-us">
        <GrowSection />
      </div>

      <div id="organization">
        <OrganizationSection />
      </div>

      <div id="passion-core">
        <PassionCore />
      </div>

      <div id="capability-core">
        <CapabilityCore />
      </div>

      <div id="inclusive-offerings">
        <OurInclusiveOfferings />
      </div>


      <div id="farmsanta">
        <FarmSantaServices />
      </div>

      <div id="team">
        <TeamOnMission onFounderKnowMore={() => setShowFounderProfile(true)} />
      </div>

      <div id="awards">
        <AwardsPage />
      </div>

      <div id="join-team">
        <JoinTeamPage />
      </div>

      <div id="say-hi">
        <ContactPage />
      </div>

     <div id="Footer">
     <Footer />
     </div>

      <RightMenu />
    </>
  );
}
