import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import member6 from "../assets/member6.png";

const teamMembers = [
  {
    name: "Mohammad Waseem Makrani",
    designation: "Director & Technology Head",
    image: member1,
    profile:
      "Leading digital transformation, technology innovation and strategic business growth initiatives across FarmSanta ecosystem.",
  },
  {
    name: "Murari Mohan Rakshit",
    designation: "Founder & CEO",
    image: member2,
    profile:
      "Visionary entrepreneur driving sustainable agriculture transformation and rural empowerment initiatives.",
  },
  {
    name: "Sourav",
    designation: "Creative & Marketing",
    image: member5,
    profile:
      "Handling branding, visual communication, marketing design and creative storytelling.",
  },
  {
    name: "Naznin",
    designation: "Director & Product Manager",
    image: member6,
    profile:
      "Supporting operational workflows, coordination, finance follow-ups and execution management.",
  },
];

export default function TeamOnMission() {
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

        if (
        scrollAmount >=
        container.scrollWidth - container.clientWidth
        ) {
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
    <section className="relative h-screen overflow-hidden bg-[#f7f7f4]">
      {/* RIGHT GREEN GLOW */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[95px] bg-gradient-to-l from-[#048300] via-[#8fd14f] to-transparent" />

      {/* TITLE */}
      <div className="relative z-20 pt-[40px] text-center">
        <h1 className="text-[48px] font-black leading-none tracking-[-1px] text-black">
          Team on Mission
        </h1>

{/*         <p className="mx-auto mt-5 max-w-[1000px] text-[18px] font-semibold leading-snug text-[#444]">
          Passionate professionals driving innovation, agriculture excellence,
          technology and sustainable rural transformation together.
        </p>
 */}
 
       </div>

      {/* TEAM SLIDER */}
      <div className="relative mt-[70px]">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[180px] bg-gradient-to-r from-[#f7f7f4] via-[#f7f7f4]/95 to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-[180px] bg-gradient-to-l from-[#f7f7f4] via-[#f7f7f4]/95 to-transparent" />

        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-8 overflow-x-scroll px-[140px] py-5"
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}

            className="group relative flex-shrink-0"
                onMouseEnter={() => {
                pauseRef.current = true;
                }}
                onMouseLeave={() => {
                pauseRef.current = false;
                }}

            >
              {/* PROFILE CARD */}
              <div className="relative h-[440px] w-[290px] overflow-hidden rounded-[34px] bg-white shadow-xl">
                {/* IMAGE */}
                <div className="relative h-[335px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />

                  {/* HOVER PROFILE OVERLAY */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="text-[14px] leading-[1.6] text-white">
                      {member.profile}
                    </p>
                  </div>
                </div>

                {/* MEMBER INFO */}
                <div className="flex h-[100px] flex-col justify-center px-6">
                  <h3 className="text-[22px] font-black leading-tight text-black">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[14px] font-semibold uppercase tracking-wide text-[#048300]">
                    {member.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HIDE SCROLLBAR */}
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