"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 bg-faqblue/80 rounded-xl my-6 "
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        {/* Left: FAQ List */}
        <div className="w-full lg:w-1/2 space-y-3 flex flex-col">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className=" bg-white py-3 px-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Disclosure>
                {() => (
                  <>
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === idx ? null : idx)
                      }
                      className="flex w-full justify-between items-center rounded-lg px-2 py-2 text-left text-base sm:text-lg font-medium text-gray-900"
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronUpIcon className="h-5 w-5 text-blue-500" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-2 pt-1 pb-2 text-sm sm:text-base text-black font-normal opacity-80">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-start lg:items-center PX-4">
          <img
            src="/images/home/woman-thinking-with-diverse-people-her_53876-22938.webp"
            alt="FAQ Image"
            className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Why Sona CSRI?",
    answer:
      "Sona Centre for Social Responsibility Initiatives (CSRI) focuses on empowering communities through education, skill development, and sustainable social projects.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can participate as a student, volunteer, or alumnus by mentoring, contributing to skill-development programs, or supporting community outreach initiatives.",
  },
  {
    question: "Which communities does CSRI work with?",
    answer:
      "CSRI works with underprivileged and underserved communities, including rural, peri-urban, and marginalized groups, to promote inclusive growth and sustainable development.",
  },
  {
    question: "What makes Sona CSRI unique?",
    answer: (
      <ul className="list-disc pl-5 space-y-1 text-black font-normal opacity-80 text-sm sm:text-base">
        <li>Innovation-led solutions with academic backing</li>
        <li>Projects on Campus with space for establishment</li>
        <li>Community-first approaches</li>
        <li>End-to-end project implementation</li>
        <li>Transparent impact reporting</li>
      </ul>
    ),
  },
  {
    question: "How does CSRI ensure project sustainability?",
    answer:
      "Every CSRI initiative is designed with long-term impact in mind. Projects focus on capacity building, local ownership, and scalable models to ensure benefits continue beyond initial implementation.",
  },
  {
    question: "Does CSRI collaborate with external organizations?",
    answer:
      "Yes, CSRI partners with NGOs, government bodies, and corporate CSR teams to expand its outreach, share expertise, and co-create impactful community development programs.",
  },
];

export default FAQ;
