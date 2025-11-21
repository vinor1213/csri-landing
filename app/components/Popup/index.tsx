"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function PopupNotice() {
  const [isVisible, setIsVisible] = useState(true);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="popup"
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 right-5 z-50 w-[90%] max-w-sm 
             bg-blue-600 text-white 
             shadow-xl rounded-2xl border border-blue-700"
        >
          <div className="flex justify-between items-start p-4">
            <div>
              <h2 className="text-lg font-bold text-gold">Upcoming Events</h2>
              <p className="text-sm text-offwhite">{date}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-offwhite hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 pb-4 font-medium text-sm leading-relaxed">
            <p>
              📅 Join us for the <strong>Annual CSRI Conference</strong>! Learn
              more about our <strong>community initiatives</strong> and how you
              can participate.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
