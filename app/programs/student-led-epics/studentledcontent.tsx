"use client";

import { motion } from "framer-motion";
import {
  FaUniversity,
  FaRecycle,
  FaAssistiveListeningSystems,
  FaPeopleCarry,
} from "react-icons/fa";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function EPICSPage() {
  return (
    <div>
      {/* ---------- Banner ---------- */}
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/group-students-working-robotics-project_1232-2123.jpg"
        title=" Programs - Student-led EPICS Initiative"
        subtitle="Engineering Projects in Community Service"
      />

      {/* ---------- Breadcrumb ---------- */}
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Programs", href: "/programs/student-led-epics" },
            { label: "Student-led EPICS Initiative" },
          ]}
        />
      </div>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/gallery/Education/Education-3.webp"
              className=" object-cover w-full"
              alt="EPICS Project"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              Student-led EPICS Initiative
            </h2>

            <p className="text-lg text-gray-700  mb-4 text-justify leading-relaxed">
              The Engineering Projects in Community Service (EPICS) initiative
              at CSRI enables students to apply classroom learning to real-world
              social challenges. Conducted in joint collaboration with Purdue
              University, this program encourages students to design
              sustainable, technology-based solutions in areas such as renewable
              energy, water management, assistive devices, and digital tools for
              communities.
            </p>

            <p className="text-lg text-gray-700  mb-4 text-justify leading-relaxed">
              Working in interdisciplinary teams under faculty mentorship,
              students engage directly with stakeholders, ensuring practical and
              need-based outcomes. The program fosters creativity, teamwork, and
              leadership while embedding social responsibility into academic
              learning. Many projects have been scaled through corporate CSR and
              funding agencies, making EPICS a proven model of education-driven
              community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- CARDS SECTION ---------- */}
      {/* ---------- NEW MODERN CARD SECTION ---------- */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
            Key Highlights of EPICS Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* CARD 1 */}
            <div className="group bg-white/40  backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8 ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 group-hover:bg-indigo-600 transition-all duration-300">
                <FaUniversity className="text-indigo-600 dark:text-indigo-300 group-hover:text-white text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-5">
                EPICS – Global Framework
              </h4>
              <p className="text-gray-600  text-center mt-3  leading-relaxed">
                A global service-learning model enabling students to build
                real-world community solutions.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white/40  backdrop-blur-lg  border border-gray-200 p-8 ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 group-hover:bg-teal-600 transition-all duration-300">
                <FaRecycle className="text-teal-600 dark:text-teal-300 group-hover:text-white text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-5">
                Sustainable Engineering
              </h4>
              <p className="text-gray-600  text-center mt-3  leading-relaxed">
                Solutions focused on renewable energy, waste reduction, and
                long-term environmental benefits.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white/40backdrop-blur-lg  border border-gray-200 dark:border-gray-700 p-8 ">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900 group-hover:bg-rose-600 transition-all duration-300">
                <FaAssistiveListeningSystems className="text-rose-600 dark:text-rose-300 group-hover:text-white text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-5">
                Assistive Tech Solutions
              </h4>
              <p className="text-gray-600  text-center mt-3  leading-relaxed">
                Engineering devices and tools that improve independence and
                accessibility for users.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group bg-white/40  backdrop-blur-lg  border border-gray-200 dark:border-gray-700 p-8">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900 group-hover:bg-amber-600 transition-all duration-300">
                <FaPeopleCarry className="text-amber-600 dark:text-amber-300 group-hover:text-white text-3xl" />
              </div>
              <h4 className="font-bold text-xl text-center mt-5">
                Community-Centered Impact
              </h4>
              <p className="text-gray-600  text-center mt-3  leading-relaxed">
                Co-created solutions shaped with stakeholders to ensure maximum
                real-world value.
              </p>
            </div>
          </div>

          {/* FINAL DESCRIPTION */}
          <div className="max-w-4xl mx-auto mt-16 space-y-6 text-lg text-gray-700  leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <p>
                <span className="font-semibold">
                  Community Project on “Protective Garments for Sewage Cleaners”
                </span>{" "}
                — developed by final-year Fashion Technology students to improve
                safety, comfort, and hygiene for sanitation workers.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-amber-600 dark:bg-amber-400"></div>
              <p>
                <span className="font-semibold">
                  Smart Shoe for the Visually Impaired
                </span>{" "}
                — an IoT-based assistive device created by Computer Science
                Engineering students using sensors to enhance safe navigation
                for blind individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
