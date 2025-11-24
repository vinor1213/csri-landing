"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHeartbeat,
  FaLeaf,
  FaAmbulance,
  FaHandsHelping,
} from "react-icons/fa";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function CommunityHealthPage() {
  return (
    <div>
      {/* ---------- Banner ---------- */}
      <ReuseBanner
        image="https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-stethoscope_23-2149611227.jpg"
        title="Programs - Community Health Initiative"
        subtitle="A Commitment to Holistic and Accessible Healthcare"
      />

      {/* ---------- Breadcrumb ---------- */}
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Programs", href: "/programs/Community Health Initiative" },
            { label: "Community Health Initiative" },
          ]}
        />
      </div>

      {/* ---------- INTRO SECTION ---------- */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/gallery/health/health1-15.webp"
              className=" object-cover w-full"
              alt="Community Health Initiative"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Impacting Communities Through Healthcare
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-justify">
              CSRI organizes Awareness and Medical Camps aimed at improving
              community health and social well-being. In collaboration with
              healthcare professionals, these camps offer free check-ups,
              consultations, medicines, and essential health awareness.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
              These camps emphasize both modern medicine and AYUSH-based
              practices through Sona Medical College of Naturopathy and
              Yoga—bringing yoga therapy, naturopathy, and preventive care
              directly to the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- CARDS SECTION ---------- */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 mt-0">
            Core Elements of Our Health Initiative
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1 */}
            <motion.div
              className="bg-blue-50 border border-blue-200  p-6  text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaHeartbeat className="text-blue-600 dark:text-blue-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Medical Camps</h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Free check-ups, medicines, consultations & preventive health
                awareness.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="bg-green-50 border border-green-200  p-6  text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaLeaf className="text-green-600 dark:text-green-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                AYUSH & Naturopathy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Yoga therapy, naturopathy treatments, preventive care workshops.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="bg-red-50 border border-red-200 p-6  text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <FaAmbulance className="text-red-500  w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Health on Wheels</h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                A mobile medical unit taking healthcare to rural & underserved
                areas.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              className="bg-yellow-50 border border-yellow-200  p-6  text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaHandsHelping className="text-yellow-600 dark:text-yellow-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Holistic Well-being
              </h4>
              <p className="text-gray-600 dark:text-gray-300 ">
                Combining modern & traditional care for long-term well-being.
              </p>
            </motion.div>
          </div>

          {/* FINAL DESCRIPTION */}
          <motion.p
            className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            CSRI believes in making healthcare accessible for all.
            <span className="font-semibold"> Sona Health on Wheels </span>
            enables medical teams to reach remote communities and ensure
            consistent healthcare access for every individual.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
