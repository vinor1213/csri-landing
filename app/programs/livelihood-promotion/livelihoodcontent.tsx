"use client";

import { motion } from "framer-motion";
import {
  HiMiniComputerDesktop,
  HiMiniBuildingStorefront,
  HiMiniUsers,
  HiMiniCurrencyRupee,
  HiMiniSignal,
} from "react-icons/hi2";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function LivelihoodContent() {
  return (
    <div>
      {/* ---------- BANNER ---------- */}
      <ReuseBanner
        image="https://csri.sonatech.ac.in/images/banners/livelihood-promotion.jpg"
        title="Programs - Livelihood Promotion Activities"
        subtitle="Building Skills, Enterprise & Economic Resilience"
      />

      {/* ---------- BREADCRUMB ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Programs", href: "/programs/Livelihood Promotion" },
            { label: "Livelihood Promotion" },
          ]}
        />
      </div>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Livelihood Promotion Activities
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5 text-justify">
            CSRI nurtures community resilience by supporting people to build
            dependable income sources rooted in local strengths. The initiatives
            focus on improving productivity, encouraging micro-enterprise, and
            enabling marginalized groups to participate in the economy with
            dignity and confidence.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Our approach centres on community ownership—mobilising local groups,
            strengthening traditional skills, and introducing modern techniques
            where needed. Each initiative is designed to reduce livelihood
            risks, widen market opportunities, and build long-term economic
            security for rural and semi-urban communities.
          </p>
        </div>
      </section>

      {/* ---------- CARD SECTION ---------- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
            Major Interventions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* CARD TEMPLATE */}
            {[
              {
                icon: <HiMiniComputerDesktop className="text-3xl" />,
                color: "from-blue-500 to-indigo-500",
                title: "Skill Labs & Learning Spaces",
                text: "Hands-on learning spaces for rural youth & women to practice new trades, build employability, and start enterprises.",
              },
              {
                icon: <HiMiniBuildingStorefront className="text-3xl" />,
                color: "from-emerald-500 to-green-500",
                title: "Enterprise Acceleration",
                text: "Mentoring, micro-unit setup, production tools, and business support for community entrepreneurs.",
              },
              {
                icon: <HiMiniUsers className="text-3xl" />,
                color: "from-pink-500 to-rose-500",
                title: "Inclusive Livelihood Support",
                text: "Income pathways for tribal communities, single women, and vulnerable households.",
              },
              {
                icon: <HiMiniCurrencyRupee className="text-3xl" />,
                color: "from-amber-500 to-orange-500",
                title: "Agri-Based Value Chains",
                text: "Farm & non-farm value addition, community processing units, and post-harvest strengthening.",
              },
              {
                icon: <HiMiniSignal className="text-3xl" />,
                color: "from-cyan-500 to-blue-600",
                title: "Digital Market Access",
                text: "Helping small producers adopt digital payments, e-commerce platforms, and traceability tools.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white/80  border backdrop-blur-xl  transition"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${card.color} text-white rounded-2xl flex items-center justify-center`}
                >
                  {card.icon}
                </div>
                <h4 className="font-bold text-xl mt-6">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm leading-relaxed text-justify">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
