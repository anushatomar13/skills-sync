"use client";

import { motion } from "framer-motion";

const objectives = [
  {
    title: "AI-Powered Matching",
    description:
      "SkillSync intelligently matches job seekers with roles that align with their skills, experience, and aspirations.",
  },
  {
    title: "Effortless Job Search",
    description:
      "Say goodbye to endless scrolling. Get personalized job recommendations in seconds with AI assistance.",
  },
  {
    title: "Seamless Experience",
    description:
      "Our platform provides a seamless and user-friendly job discovery experience with a focus on efficiency.",
  },
];

export default function Objectives() {
  return (
    <section className="py-20 px-8 sm:px-20 flex flex-col items-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-white"
      >
        Our Objectives ✨
      </motion.h2>

      {/* Cards Container */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {objectives.map((obj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }}
            className="border border-gray-400 dark:border-gray-700 p-6 rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/10 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {obj.title}
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{obj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
