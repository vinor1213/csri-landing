"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Program {
  title: string;
  slug: string;
  categorySlug: string;
  date: string;
  description: string;
  metaTitle: string;
  image: string;
}

interface ProgramDetailsProps {
  program: Program;
}

export default function ProgramDetails({ program }: ProgramDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      return;
    }
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", });
      setTimeout(() => setIsOpen(false), 1500);
    }, 1000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
      {/* Program Info */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        initial="hidden"
        animate="show"
        className="flex flex-col lg:flex-row gap-8 items-center"
      >
        {/* Image */}
        <div className="lg:w-1/2 w-full h-80 overflow-hidden shadow-lg rounded-xl">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-900">{program.title}</h1>
          <p className="text-gray-700 text-lg">{program.description}</p>

          <div className="mt-4">
            <p className="text-gray-500 mb-1">
              Date: {(() => {
                const d = new Date(program.date);
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                const year = d.getFullYear();
                return `${day}/${month}/${year}`;
              })()}
            </p>

          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 w-max"
          >
            Join Program

            {/* Notification Effect */}
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2H9v-2h2V9h2v2h2v2h-2v2z" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Program Details */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Program Details</h2>
        <p className="text-gray-600 leading-relaxed">{program.description}</p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // optional close on backdrop click
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-xl font-bold mb-4">Join {program.title}</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* ✅ Added Contact Number */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={15}
                />

                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  Join
                </button>

                {status === "success" && (
                  <p className="text-green-600">Successfully joined!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600">
                    Please enter a valid name, contact number and email.
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
