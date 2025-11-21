"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

interface ReportItem {
  name: string;
  href: string;
  subReports?: { name: string; href: string }[];
}

const reports: ReportItem[] = [
  {
    name: "Newsletter",
    href: "/reports",
    subReports: [
      { name: "April 2025", href: "/images/preport-pdf/April 2025.pdf" },
      { name: "May 2025", href: "/images/preport-pdf/May 2025.pdf" },
      { name: "June 2025", href: "/images/preport-pdf/June 2025.pdf" }
    ],
  },
  { name: "Half Yearly Report", href: "/images/preport-pdf/CSRI Half Yealry Report.pdf" },
  { name: "Program Report", href: "/reports" },
];


const ReportsPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/business-handshake-partners_160672-4152.jpg"
        title="Reports"
        subtitle="Stay updated with our publications"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Reports", href: "/reports" },
        ]}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Reports & Publications
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Stay Informed on Our Impact
            </h2>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
              Explore our newsletters, annual reports, and program publications
              to see how we drive positive change.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {reports.map((report, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transition cursor-pointer hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                  {report.name}
                </h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  {report.subReports
                    ? "Click 'View Newsletter' to see monthly editions"
                    : "View or download the full report to get detailed insights."}
                </p>

                {/* Sub-reports (newsletters) */}
                {report.subReports && expandedIndex === idx && (
                  <ul className="mb-4 space-y-2">
                    {report.subReports.map((sub, i) => (
                      <li key={i}>
                        <a
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* View/Hide button for newsletters or main report link */}
                {report.subReports ? (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-auto inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition"
                  >
                    {expandedIndex === idx ? "Hide Newsletter" : "View Newsletter"}
                  </button>
                ) : (
                  <a
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition"
                  >
                    View Report
                  </a>
                )}
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReportsPage;
