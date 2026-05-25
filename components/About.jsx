import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        About NutriSource
      </motion.h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        NutriSource is a global agri-tech company empowering farmers through digital innovation, supply chain integration, and real-time advisory solutions.
      </p>

    </div>
  );
}