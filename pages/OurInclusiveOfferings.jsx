import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProductShowcase from "./ProductShowcase";

import mascot from "../assets/mascot.gif";

import offerings1 from "../assets/offerings1.png";
import offerings2 from "../assets/offerings2.png";
import offerings3 from "../assets/offerings3.png";
import offerings4 from "../assets/offerings4.png";

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

export default function OurInclusiveOfferings() {
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
          Fertilizer
          <br />
          Agrochemicals
          <br />
          Biologicals
          <br />
          Specialities and water soluble fertilizers
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

            <p className="mx-auto mt-4 max-w-[1180px] text-[16px] font-semibold leading-snug text-black">
              Diagnose- Advise-Solution- Deliver – all at one place:
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