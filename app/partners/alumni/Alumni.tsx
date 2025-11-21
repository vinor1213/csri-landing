"use client";

import { useState } from "react";
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";
import { FaMoneyBillWave, FaChalkboardTeacher, FaBuilding, FaHandsHelping, FaHeartbeat, FaLeaf, FaHome } from "react-icons/fa";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
export default function AlumniPage() {
  const [showAppeal, setShowAppeal] = useState(false);

  const alumniCards = [
    {
      title: "Reconnect & Contribute: ",
      icon: <FaMoneyBillWave className="text-blue-600 w-12 h-12 mb-4" />,
      desc: "Rejoin the Sona family through social impact initiatives close to your heart.",
    },
    {
      title: "Mentorship & Guidance",
      icon: <FaChalkboardTeacher className="text-blue-600 w-12 h-12 mb-4" />,
      desc: "Share your professional expertise with students, rural youth, and women entrepreneurs.",
    },
    {
      title: "Support Training Programs",
      icon: <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />,
      desc: "Sponsor a woman’s tailoring toolkit, a youth training course, or a community health initiative",
    },
    {
      title: "Corporate Connect",
      icon: <FaHandsHelping className="text-blue-600 w-12 h-12 mb-4" />,
      desc: "Introduce CSRI to your employer for potential CSR partnerships, amplifying alumni-driven impact.",
    },
    {
      title: "Volunteer & Advocate: ",
      icon: <FaHandsHelping className="text-blue-600 w-12 h-12 mb-4" />,
      desc: "Join outreach activities, represent Sona at social forums, and spread awareness of our mission.",
    },
  ];
  const programs = [
    {
      title: "Health and Wellness",
      icon: <FaHeartbeat className="text-blue-600 w-8 h-8 mb-2" />,
    },
    {
      title: "Environment and Sustainability",
      icon: <FaLeaf className="text-blue-600 w-8 h-8 mb-2" />,
    },
    {
      title: "Skill & Community Development",
      icon: <FaHandsHelping className="text-blue-600 w-8 h-8 mb-2" />,
    },
    {
      title: "Village Adoption Programs",
      icon: <FaHome className="text-blue-600 w-8 h-8 mb-2" />,
    },
  ];

  return (
    <div>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/business-handshake-partners_160672-4152.jpg"
        title=" Pratner With Us - Alumni"
        subtitle="Reconnect, Mentor, Volunteer"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
          { label: "Alumni" },
        ]}
      />

      <section className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Paragraph */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As a proud Sona graduate, your journey doesn’t end at graduation.
              By engaging with CSRI, you continue the legacy of giving back,
              mentoring, and shaping future changemakers.
            </p>
          </motion.div>


          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {alumniCards.slice(0, 5).map((item, idx) => (
              <motion.div
                key={idx}
                className=" bg-white dark:bg-gray-800 p-6 shadow hover:shadow-xl transition flex flex-col items-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 70, damping: 14 },
                  },
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}

            {/* ✨ Fill remaining 3-column space with a CTA box */}
            <motion.div
              className="text-white bg-white  shadow-lg flex flex-col justify-center items-center text-center lg:col-span-3 md:col-span-2 col-span-1 min-h-[320px]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 70, damping: 14 },
                },
              }}
            >
              <div className="relative flex flex-col items-center w-full mx-auto overflow-hidden  md:flex-row-reverse md:max-w-4xl lg:max-w-5xl">
                {/* Image Section */}
                <div className="w-full h-48 md:h-60 md:w-1/2">
                  <img
                    className="h-full w-full object-cover"
                    src="https://picsum.photos/id/1018/800/600"
                    alt="Winding mountain road"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-white text-gray-800 w-full md:w-1/2 h-full flex flex-col justify-center p-6 md:p-8">

                  <p className="text-sm md:text-base mb-4">
                    Every contribution, big or small, helps us achieve sustained development and inclusive growth.
                  </p>


                  <button
                    onClick={() => setShowAppeal((prev) => !prev)}
                    type="button"
                    className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600 flex items-center gap-3"
                    aria-label="Toggle Alumni Appeal"
                  >
                    {/* 👁 Toggle between View / Hide icons */}
                    {showAppeal ? (
                      // Hide Icon (Eye Off)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 flex-shrink-0"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    ) : (
                      // View Icon (Eye)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 flex-shrink-0"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    )}

                    <span className="relative italic">
                      {showAppeal ? "Hide Alumni Appeal" : "View Alumni Appeal"}
                    </span>

                    <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                      <div className="relative h-full w-8 bg-white/30" />
                    </div>
                  </button>

                </div>
              </div>
            </motion.div>

          </motion.div>




          {/* Expanding Alumni Appeal Section */}
          <AnimatePresence>
            {showAppeal && (
              <motion.div
                key="appeal"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden mt-10"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 p-8 space-y-6 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 text-center">
                    Alumni Appeal
                  </h2>

                  <p className="leading-relaxed">
                    Dear Esteemed Alumni,
                    <br />
                    Sona College of Technology has always been a cradle of
                    innovation, excellence, and social responsibility. As alumni,
                    you have carried forward this legacy, creating meaningful
                    impacts in your respective fields. Today, we invite you to
                    strengthen this legacy by supporting a cause that uplifts
                    lives and transforms communities through the{" "}
                    <strong>Centre for Social Responsibility Initiatives (Sona CSRI)</strong>.
                  </p>

                  <div className="w-full py-10 bg-gray-50 relative overflow-hidden">

                    {/* HANDSHAKE ICON BEHIND TEXT */}
                    <FaHandsHelping
                      className="absolute inset-0 m-auto text-gray-800 w-32 h-32 opacity-20 pointer-events-none"
                      style={{ zIndex: 0 }}
                    />

                    {/* LEFT → CENTER → RIGHT GRADIENT FADE */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>

                    {/* Text Content */}
                    <p className="relative italic font-medium text-gray-800 dark:text-gray-200 text-center z-10">
                      Join Hands with Sona CSRI: Empowering Communities, Creating Impact
                    </p>
                  </div>


                  <p><strong>Sona CSRI,</strong> the CSR implementing wing of Sona Group of Institutions, is dedicated to certain focus areas that benefits the community. Now, Sona CSRI is reaching out through our college alumnus currently employed at a reputed MNCs and entrepreneurs actively engaged in philanthropic and CSR initiatives. Through this connection, we seek to explore funding support from the company for Sona CSRI’s key focus areas:</p>

                  <div className="flex flex-wrap gap-6 justify-center">
                    {programs.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center bg-gray-100 text-gray-900  py-1  shadow hover:shadow-lg transition w-60"
                      >
                        <div className="text-xl">{item.icon}</div>
                        <h3 className="text-sm font-semibold mt-1 text-center">{item.title}</h3>
                      </div>
                    ))}
                  </div>
                  <p className="leading-relaxed">
                    This outreach aims to build strategic collaboration through
                    alumni channels for impactful societal development. Together,
                    we’re building a future where every life touched by Sona CSRI
                    becomes a story of empowerment and dignity.
                  </p>

                  <p className="leading-relaxed">
                    This is more than an appeal—it’s a call to carry forward the
                    values that Sona instilled in us: excellence with empathy.
                    Join us in creating sustainable, inclusive growth for the
                    communities we serve.
                  </p>



                  <div className="w-full flex justify-center">
                    <Link href="/contact">
                      <button className="
    relative
    flex items-center gap-4
    px-10 py-3
    font-semibold text-white
    bg-blue-500
    rounded-xl
    shadow-[0_4px_20px_rgba(59,130,246,0.4)]
    hover:shadow-[0_6px_25px_rgba(59,130,246,0.5)]
    transition-all duration-300
    overflow-hidden
  ">

                        {/* LEFT ARROW BOX */}
                        <div className="
      absolute left-0 top-1/2 -translate-y-1/2
      bg-blue-600
      w-10 h-10
      rounded-md
      flex items-center justify-center
      shadow-inner
      ml-2
    ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-6-6l6 6-6 6" />
                          </svg>
                        </div>

                        {/* LABEL */}
                        <span className="pl-12 tracking-wide text-lg text-center">
                          Let’s Build a Legacy Beyond Degrees!
                        </span>

                        {/* RIGHT CURVE SHAPE */}
                        <div className="
      absolute right-0 top-0 h-full w-6
      bg-blue-400
      rounded-bl-[40px]
    "></div>

                      </button>
                    </Link>
                  </div>


                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
