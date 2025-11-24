"use client";

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
];

const ReportsPage = () => {
  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/banner/reports-banner.webp"
        title="Reports"
        subtitle="Stay updated with our publications"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Reports", href: "/reports" },
        ]}
      />

      <section className="pt-10 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Heading */}
          <motion.div
            className="text-center mb-8"
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

          {/* Report Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {reports.map((report, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white h-full flex flex-col rounded-xl  p-6 justify-between transition cursor-pointer border"
                onClick={() => window.open(report.href, "_blank")}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                    {report.name}
                  </h3>

                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {report.subReports
                      ? "Explore the monthly editions below"
                      : "View or download the full report to get detailed insights."}
                  </p>

                  {/* Sub-reports */}
                  {report.subReports && (
                    <ul className="mb-4 space-y-2">
                      {report.subReports.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // prevent parent click
                            className="text-blue-600 hover:underline"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ReportsPage;
