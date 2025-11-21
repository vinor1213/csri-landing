"use client";

import Link from "next/link";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";

export default function PartnersPage() {
  const tabs = [
    { label: "Why Partner", href: "/partners/whyPartner" },
    { label: "Alumni", href: "/partners/alumni" },
    { label: "NGO", href: "/partners/ngo" },
    { label: "Corporate CSR", href: "/partners/corporate" },
  ];

  return (
    <div>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/business-handshake-partners_160672-4152.jpg"
        title="Our Partners"
        subtitle="Collaborating for a Sustainable Future"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
        ]}
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-14 text-center">
          Explore Our Partnerships
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {tabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className="group p-6 rounded-2xl shadow-lg bg-white border hover:border-blue-600 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  {/* Replace with any Lucide or FontAwesome icon */}
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">{tab.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
