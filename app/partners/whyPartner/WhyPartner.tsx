"use client";

import { motion } from "framer-motion";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { FaHome, FaUsers, FaBriefcase } from "react-icons/fa";
import Link from "next/link";
export default function WhyPartnerPages() {
  const steps = [
    {
      id: 1,
      title: "Alumni",
      bg: "bg-yellow-400",
      border: "border-yellow-400",
      line: "border-yellow-400",
      icon: <FaUsers size={14} />,
    },
    {
      id: 2,
      title: "NGO",
      bg: "bg-blue-300",
      border: "border-blue-300",
      line: "border-blue-300",
      icon: <FaUsers size={14} />,
    },
    {
      id: 3,
      title: "Corporate",
      bg: "bg-gray-400",
      border: "border-gray-400",
      line: "border-gray-400",
      icon: <FaBriefcase size={14} />,
    },
  ];



  return (
    <div>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/community-care_895622-720.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80"
        title=" Pratner With Us - Why Partner"
        subtitle="Collaborating for a Sustainable Future"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
          { label: "Why Partner" },
        ]}
      />

      <section className="py-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="py-12  space-y-12">
              <motion.div
                className="flex flex-col md:flex-row items-start md:items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* LEFT SECTION - 2/4 width */}
                <div className="md:w-3/4">
                  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Why Partner with CSRI?
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                    Join hands with SONA CSRI for meaningful CSR
                    collaborations. Whether you’re a corporate, government
                    agency, or foundation, we offer tailored solutions that
                    maximize impact, ensure compliance, and create lasting
                    value for communities. Our expertise spans project design,
                    execution, monitoring, and reporting, backed by a robust
                    network of local partners and skilled professionals.
                    Partnering with us means measurable outcomes, transparent
                    reporting, and initiatives that truly transform
                    lives—building a legacy of positive social change.
                  </p>
                </div>

                {/* RIGHT SECTION - 2/4 width */}
                <div className="flex justify-center items-center py-10 ">
                  <div className="relative flex items-center">
                    {/* Center Circle */}
                    <div className="relative w-28 h-28 flex justify-center items-center">

                      {/* OUTER ROTATING GRADIENT BORDER */}
                      <div className="
    absolute inset-0 rounded-full p-[3px]
    bg-[conic-gradient(#facc15,#60a5fa,#d1d5db,#facc15)]
    animate-spin
  "></div>

                      {/* INNER ROTATING GRADIENT CIRCLE */}
                      <div className="
    relative w-full h-full rounded-full flex justify-center items-center shadow-lg
    overflow-hidden
  ">

                        {/* Rotating gradient background */}
                        <div className="
      absolute inset-0 rounded-full
      bg-[conic-gradient(#fbbf24,#3b82f6,#9ca3af,#fbbf24)]
      animate-spin-slower
    "></div>

                        {/* Text (NOT rotating) */}
                        <div className="relative text-lg font-bold text-gray-800">
                          Partners
                        </div>
                      </div>
                    </div>



                    {/* Steps */}
                    <div className="ml-5 space-y-5">
                      {steps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          className="relative flex items-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* Curved Line for steps 1 & 3 */}
                          {(index === 0 || index === 2) && (
                            <div
                              className={`absolute -left-14 w-14 h-8 border-t-2 ${step.line} rounded-tl-full rounded-bl-full`}
                            ></div>
                          )}

                          {/* Step Item */}
                          <div
                            className={`flex items-center ${step.bg} ${step.border} text-gray-800 rounded-full shadow-lg pr-3 pl-3 py-1.5 w-48`}
                          >
                            <span className="text-3xl font-bold">{step.id}</span>

                            <div className="ml-2 flex-1">
                              <h3 className="font-semibold text-sm">{step.title}</h3>
                            </div>

                            <div className="ml-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow text-black text-xs">
                              {step.icon}
                            </div>
                          </div>
                        </motion.div>
                      ))}

                    </div>
                  </div>
                </div>
              </motion.div>


              {/* Features List using Flexbox - 3 per row */}
              <div className="flex flex-wrap -mx-3">
                {/* Turnkey Project */}
                <motion.div
                  className="w-full md:w-1/3 px-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="h-full flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Turnkey Project Implementation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-auto">
                      We handle the complete lifecycle of your CSR
                      project—from design and mobilization to execution,
                      monitoring, and reporting—customized to your goals and
                      timelines.
                    </p>
                  </div>
                </motion.div>

                {/* Measurable Outcomes */}
                <motion.div
                  className="w-full md:w-1/3 px-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-full flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Measurable Outcomes & Transparent Reporting
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-auto">
                      Our data-driven approach ensures that your impact is
                      well-documented through real-time dashboards,
                      beneficiary stories, and detailed progress
                      reports—aligned with CSR compliance norms.
                    </p>
                  </div>
                </motion.div>

                {/* Community Network */}
                <motion.div
                  className="w-full md:w-1/3 px-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="h-full flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Robust Community Network
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-auto">
                      With access to a strong network of local partners,
                      skilled trainers, and field coordinators, we bring your
                      CSR project closer to the community—where it matters
                      most.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Footer / Call to Action */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact">
                  <button
                    className="
        group
        flex justify-center items-center
        rounded-l-full
        pr-4 md:pr-6
        pl-2
        py-2 
        bg-gradient-to-r from-gray-300 to-gray-500
        text-white font-semibold
        shadow-md
        hover:shadow-lg
        transition-all duration-300
      "
                  >
                    {/* LEFT CIRCLE */}
                    <div
                      className="
          relative
          w-9 h-9 md:w-10 md:h-10
          rounded-l-full
          bg-white
          flex items-center justify-center
          shadow-[0_0_0_3px_rgba(255,255,255,0.3)]
          group-hover:scale-105
          transition-all duration-300
        "
                    >
                      {/* Arrow Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 md:w-5 md:h-5 text-orange-600"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                      </svg>
                    </div>

                    {/* TEXT */}
                    <span className="ml-3 tracking-wide text-lg md:text-xl italic">
                      Let’s Build Impact That Lasts
                    </span>
                  </button>
                </Link>
              </motion.div>



            </div>







          </div>
        </div>
      </section>
    </div>
  );
}
