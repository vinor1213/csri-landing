"use client";

import { motion } from "framer-motion";
import {
  HiMiniAcademicCap,
  HiMiniCubeTransparent,
  HiMiniUserGroup,
  HiMiniGlobeAmericas,
  HiMiniSparkles,
} from "react-icons/hi2";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function ResearchProjectsPage() {
  return (
    <div>
      {/* ---------- Banner ---------- */}
      <ReuseBanner
        image="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg"
        title="Programs - Research Projects for Communities"
        subtitle="Science, Innovation & Social Transformation"
      />

      {/* ---------- Breadcrumb ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Programs", href: "/programs/Research Projects" },
            { label: "Research Projects" },
          ]}
        />
      </div>

      {/* ---------- RESEARCH PROJECT SECTION ---------- */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Research Projects for Communities
          </h2>

          {/* INTRO CONTENT */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
            CSRI promotes socially relevant research through Academic-led
            Research Grant Projects that connect academia with grassroots
            impact. These projects have earned recognition from academicians,
            researchers, and communities across diverse social and professional
            structures. Grants have been successfully sanctioned through leading
            national bodies such as{" "}
            <span className="font-semibold">
              DST, AICTE, SIDBI, ICSSR, UGC, and BIRAC
            </span>
            .
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-justify">
            The program emphasizes participatory research, with themes ranging
            from climate-smart agriculture and renewable energy to women’s
            empowerment, tribal livelihoods, and public health. Projects are
            designed not only for academic contribution but also for practical
            solutions that benefit communities. Dissemination workshops, pilot
            implementations, and policy linkages ensure that research outcomes
            translate into real-world impact. This initiative strengthens
            India’s research ecosystem while positioning CSRI as a bridge
            between knowledge and social transformation.
          </p>

          {/* ---------- MODERN CARDS (KEY THEMES) ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-20">
            {/* CARD 1 */}
            <div className="p-6 sm:p-8  bg-white/80  backdrop-blur-xl  border border-gray-200   ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center  bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                <HiMiniAcademicCap className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-6">
                Academic-led Research Grants
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-3  leading-relaxed text-justify">
                Nationally funded projects advancing technology-driven social
                development.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 sm:p-8  bg-white/80  backdrop-blur-xl  border border-gray-200  ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <HiMiniGlobeAmericas className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-6">
                Sustainability & Tribal Livelihoods
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-3 leading-relaxed text-justify">
                Climate-smart agriculture, ecological systems, and rural
                livelihood enhancement.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 sm:p-8  bg-white/80  backdrop-blur-xl  border border-gray-200  ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white">
                <HiMiniUserGroup className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-6">
                Women Empowerment Initiatives
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-3  leading-relaxed text-justify">
                Enabling women through skills, entrepreneurship, and technology.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="p-6 sm:p-8 bg-white/80  backdrop-blur-xl  border border-gray-200 ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                <HiMiniSparkles className="text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-6">
                Technology for Social Good
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-3 leading-relaxed text-justify">
                Assistive devices, ICT solutions, and inclusive innovations for
                communities.
              </p>
            </div>
          </div>

          {/* ---------- NOTABLE PROJECTS (BULLET LIST) ---------- */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Notable Projects & Grants
          </h3>

          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <p>
                Empowering differently-abled women in tailoring with patented
                sensor-enabled sewing machines and entrepreneurship support.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-green-600 dark:bg-green-400"></div>
              <p>
                Science Technology and Innovation Hub for livelihood enhancement
                of SC community in Omalur and Kadayampatti blocks.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-amber-600 dark:bg-amber-400"></div>
              <p>
                Women Technology Park (WTP) empowering rural women with solar
                food processing, handicrafts, and entrepreneurship programs.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
              <p>
                ICT interventions to promote entrepreneurship among Women SHGs
                in Salem District through Rural Agricultural Support Centers
                (Agri BPOs).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
