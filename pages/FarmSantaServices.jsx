import { useEffect, useState } from "react";

import logo from "../assets/farmsanta-logo.png";
import mascot from "../assets/mascot.gif";

import santa1 from "../assets/santa1.png";
import santa2 from "../assets/santa2.png";
import santa3 from "../assets/santa3.png";
import santa4 from "../assets/santa4.png";
import santa5 from "../assets/santa5.png";

const services = [
  { label: "Crop Advisory", image: santa1 },
  { label: "Diagnosis", image: santa2 },
  { label: "Prescription", image: santa3 },
  { label: "Solution", image: santa4 },
  { label: "Delivery", image: santa5 },
];

export default function FarmSantaServices() {
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
                src={logo}
                alt="FarmSanta"
                className="mb-3 h-auto w-[220px] object-contain"
              />

              <h1 className="whitespace-nowrap text-[34px] font-black leading-none text-black">
                Happy Farming Always
              </h1>

              <p className="mt-8 text-justify text-[15px] font-medium leading-[1.5] text-black">
                Managing crops becomes easier with the right guidance at the
                right time. FarmSanta combines AI technology with expert
                agricultural support to deliver personalized advice based on
                crop, soil, and weather conditions. From sowing to protection,
                farmers get timely insights to improve productivity, maintain
                crop health, and reduce risks in every stage.
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