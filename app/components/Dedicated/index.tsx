"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Using react-icons

const Dedicated = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:text-left relative">

        {/* Left Quote Icon */}
        <FaQuoteLeft className="absolute left-0 top-0 text-gray-200 text-6xl sm:text-8xl" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4f4e50ff]  leading-snug relative z-10"
        >
          Driving positive transformation for people, planet, and prosperity.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed relative z-10"
        >
          At the <strong className="text-gray-900">Centre for Social Responsibility Initiatives (CSRI)</strong>, 
          we uplift the under-privileged through skill development programs in sectors like construction, 
          garment making, ICT, renewable energy, media, hospitality, and more. Partnering with government 
          and corporate stakeholders, we aim to promote sustainable livelihoods and inclusive development.
        </motion.p>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-xl font-semibold text-gray-800 lg:text-right relative z-10"
        >
          — CSRI Team
        </motion.p>

        {/* Right Quote Icon */}
        <FaQuoteRight className="absolute right-0 bottom-0 text-gray-200 text-6xl sm:text-8xl" />
      </div>
    </section>
  );
};

export default Dedicated;
