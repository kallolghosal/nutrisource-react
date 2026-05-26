import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import grass from "../assets/grass.png";
import Product1 from "../assets/Product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

import leaf1 from "../assets/leaf11.png";
import leaf2 from "../assets/leaf12.png";
import leaf3 from "../assets/leaf13.png";

const categories = [
  "Agrochemicals",
  "Fertilizer",
  "Biologicals",
  "Water Soluble",
];

const products = [
  {
    id: 1,
    category: "Agrochemicals",
    name: "Canine",
    image: Product1,
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
    category: "Agrochemicals",
    name: "SAVAGE",
    image: product2,
    title: "SAVAGE",
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
    category: "Biologicals",
    name: "NUTRIPOLE GR",
    image: product3,
    title: "NUTRIPOLE GR",
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
    category: "Water Soluble",
    name: "DUOGUARD",
    image: product4,
    title: "DUOGUARD",
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

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("Agrochemicals");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const activeProduct = filteredProducts[activeIndex];

  const floatingLeaves = [
    { image: leaf1, size: 60, left: "6%", duration: 14, delay: 0 },
    { image: leaf2, size: 45, left: "22%", duration: 18, delay: 2 },
    { image: leaf3, size: 55, left: "78%", duration: 16, delay: 1 },
    { image: leaf1, size: 38, left: "88%", duration: 20, delay: 3 },
    { image: leaf2, size: 50, left: "48%", duration: 22, delay: 4 },
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

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative flex min-h-[560px] items-end justify-center overflow-hidden">
            <img
              src={grass}
              alt="Grass Platform"
              className="absolute z-10"
              style={{
                width: "520px",
                bottom: "-100px",
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
          <div className="mb-10 flex flex-col items-center justify-between gap-5 lg:flex-row">
            <div className="flex flex-wrap gap-4">
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

            <div className="flex h-[42px] w-full max-w-[420px] items-center rounded-full border border-gray-300 bg-white px-4">
              <input
                type="text"
                placeholder="Select Categories"
                className="h-full flex-1 bg-transparent text-sm outline-none"
              />
              <span className="text-lg text-gray-500">⌕</span>
            </div>
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