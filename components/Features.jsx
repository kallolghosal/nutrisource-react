import { motion } from "framer-motion";

const features = [
  { title: "Crop Advisory", desc: "AI-powered farming insights" },
  { title: "Marketplace", desc: "Buy & sell produce digitally" },
  { title: "Weather Data", desc: "Real-time weather updates" },
  { title: "Farmer Support", desc: "Expert consultation" },
];

export default function Features() {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        FarmSanta Platform
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}