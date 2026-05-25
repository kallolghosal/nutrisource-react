import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";
import leaf4 from "../assets/leaf4.png";
import leaf5 from "../assets/leaf5.png";
import leaf6 from "../assets/leaf6.png";

const capabilities = [
  {
    text: "Passion to create impact and improve rural livelihoods",
    image: leaf1,
    side: "left",
    width: 220,
    left: "calc(50% - 245px)",
    bottom: "0px",
    textLeft: "calc(50% - 570px)",
    textBottom: "190px",
  },
  {
    text: "Global expertise in agri business domain for over 30 years",
    image: leaf2,
    side: "right",
    width: 200,
    left: "calc(50% - 5px)",
    bottom: "0px",
    textLeft: "calc(50% + 225px)",
    textBottom: "135px",
  },
  {
    text: "Robust knowledge on agriculture and operating geography",
    image: leaf3,
    side: "left",
    width: 200,
    left: "calc(50% - 220px)",
    bottom: "0px",
    textLeft: "calc(50% - 540px)",
    textBottom: "348px",
  },
  {
    text: "Best in class digital technology platform",
    image: leaf4,
    side: "right",
    width: 200,
    left: "calc(50% - 9px)",
    bottom: "10px",
    textLeft: "calc(50% + 210px)",
    textBottom: "270px",
  },
  {
    text: "Best in quality products and services",
    image: leaf5,
    side: "right",
    width: 175,
    left: "calc(50% - 14px)",
    bottom: "0px",
    textLeft: "calc(50% + 180px)",
    textBottom: "410px",
  },
  {
    text: "Dedicated and expert team to deliver impact and excellence",
    image: leaf6,
    side: "left",
    width: 175,
    left: "calc(50% - 190px)",
    bottom: "0px",
    textLeft: "calc(50% - 510px)",
    textBottom: "500px",
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

export default function CapabilityCore() {
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