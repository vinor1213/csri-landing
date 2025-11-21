"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaUsers,
  FaGraduationCap,
  FaBuilding,
  FaBriefcase,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaHandshake,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

interface PartnerDataType {
  title: string;
  description: string;
  imgSrc: string;
}

const partnerData: PartnerDataType[] = [
  {
    title: "Corporate Partner",
    description:
      "Supporting community programs with impactful and meaningful CSR contributions.",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    title: "Government Agency",
    description:
      "Collaborating on sustainable development and wide-reaching social initiatives.",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    title: "Foundation Partner",
    description:
      "Driving health, education, and environmental programs for lasting impact.",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    title: "Local Community Network",
    description:
      "Connecting CSR projects directly with the local communities that benefit.",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    title: "Skill Development Partner",
    description:
      "Empowering youth and communities through structured training programs.",
    imgSrc: "/images/wework/avatar3.svg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2500,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 450, settings: { slidesToShow: 1 } },
  ],
};

const tabs = [
  { id: "whyPartner", label: "Why Partner", icon: <FaHandshake size={20} /> },
  { id: "alumni", label: "Alumni", icon: <FaGraduationCap size={20} /> },
  { id: "ngo", label: "NGO", icon: <FaBuilding size={20} /> },
  { id: "corporate", label: "Corporate CSR", icon: <FaBriefcase size={20} /> },
];
const corporatePartners = [
  {
    name: "Company A",
    logoSrc:
      "https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14770.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80", // replace with your image path or URL
  },
  {
    name: "Company B",
    logoSrc:
      "https://img.freepik.com/premium-vector/diverse-group-individuals-standing-together-top-bridge-overlooking-view-develop-clean-elegant-logo-conference-management-firm_538213-49725.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Company C",
    logoSrc:
      "https://img.freepik.com/free-vector/symetrical-business-logo_1025-939.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Company D",
    logoSrc:
      "https://img.freepik.com/premium-vector/coffee-community-logo-design-vector_474888-2181.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
];

const PartnersSection = () => {
  const searchParams = useSearchParams(); // <--- App Router hook
  const tabQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("whyPartner");
  useEffect(() => {
    if (tabQuery) {
      const tabExists = tabs.find(
        (t) => t.id.toLowerCase() === tabQuery.toLowerCase()
      );
      if (tabExists) setActiveTab(tabExists.id);
    }
  }, [tabQuery]);

  const handleTabClick = (id: string) => setActiveTab(id);

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/business-handshake-partners_160672-4152.jpg"
        title="Our Partners"
        subtitle="Collaborating for a Sustainable Future"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
          { label: "" },
        ]}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-300 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-12 px-4 md:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative flex items-center gap-2 pb-2 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Conditional Tab Content */}
          <div>
            {activeTab === "whyPartner" && (
              <div className="py-12  space-y-12">
                {/* Heading + Image Section */}
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:w-3/2">
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
                  <div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <button className="w-[90px] h-[90px] outline-none border-none bg-yellow-400 rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-yellow-600 group flex items-center justify-center">
                          Alumni
                        </button>

                        <button className="w-[90px] h-[90px] outline-none border-none bg-blue-400 rounded-[5px_90px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-blue-600 group flex items-center justify-center">
                          NGO
                        </button>
                      </div>

                      <div className="flex flex-row gap-2">
                        {/* Corporate Button */}
                        <button className="w-[90px] h-[90px] outline-none border-none bg-gray-400 rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-gray-600 group flex items-center justify-center flex-col text-black hover:text-white">
                          <span>Corpor</span>
                          <span>-ate</span>
                        </button>

                        {/* Partner Button */}
                        <button className="w-[90px] h-[90px] outline-none border-none bg-orange-400 rounded-[5px_5px_90px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-orange-600 group flex items-center justify-center text-black hover:text-white">
                          
                        </button>
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
                  className="text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg font-medium text-blue-600 dark:text-indigo-400">
                    Let’s Build Impact That Lasts
                  </p>
                </motion.div>
              </div>
            )}

            {activeTab === "alumni" && (
              <div className="py-12 space-y-16 bg-gray-50 dark:bg-gray-900">
                {/* Heading */}
                <motion.div
                  className="text-center max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.2,
                  }}
                >
                  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Alumni Engagement
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    As a proud alumnus, your experience, expertise, and network
                    can drive meaningful social impact. Reconnect, mentor, fund,
                    or volunteer to create sustainable change in underprivileged
                    communities.
                  </p>
                </motion.div>

                {/* Alumni Benefits Cards */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {[
                    {
                      title: "Financial Contributions",
                      icon: (
                        <FaMoneyBillWave className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Support initiatives like women’s training, rural entrepreneurship, or climate awareness programs.",
                    },
                    {
                      title: "Mentorship & Guidance",
                      icon: (
                        <FaChalkboardTeacher className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Offer your expertise to guide young changemakers and entrepreneurs.",
                    },
                    {
                      title: "Corporate & CSR Collaboration",
                      icon: (
                        <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Connect us with potential sponsors or funding opportunities to amplify impact.",
                    },
                    {
                      title: "Volunteering & Advocacy",
                      icon: (
                        <FaHandsHelping className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Join initiatives, spread awareness, and champion social causes.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white dark:bg-gray-800 p-6 shadow hover:shadow-xl transition flex flex-col items-center text-center"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 70,
                            damping: 14,
                          },
                        },
                      }}
                    >
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.5,
                  }}
                >
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                    Every contribution, big or small, helps us achieve sustained
                    development and inclusive growth.
                  </p>
                  <a
                    href="#alumni-appeal"
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
                  >
                    Appeal to Alumni
                  </a>
                </motion.div>
              </div>
            )}

            {activeTab === "ngo" && (
              <div className="py-16 space-y-16 bg-gray-50 dark:bg-gray-900 px-4 md:px-12">
                {/* Heading */}
                <motion.div
                  className="text-center max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.2,
                  }}
                >
                  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Partner with CSRI
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                    We believe collaboration drives greater impact. If your NGO
                    is committed to social development, women empowerment,
                    education, sustainability, or livelihood generation, we
                    invite you to partner with the Centre for Social
                    Responsibility Initiatives (CSRI) at Sona College of
                    Technology.
                  </p>
                </motion.div>

                {/* NGO Benefit Cards */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                  }}
                >
                  {[
                    {
                      title: "Collaborative Programs",
                      icon: (
                        <FaHandshake className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Co-design and implement programs that address community needs and create measurable impact.",
                    },
                    {
                      title: "Innovation & Resources",
                      icon: (
                        <FaLightbulb className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Share knowledge, resources, and innovative solutions to scale outreach effectively.",
                    },
                    {
                      title: "Global & Local Outreach",
                      icon: (
                        <FaGlobe className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Extend programs to underserved communities, ensuring inclusive development across regions.",
                    },
                    {
                      title: "Capacity Building",
                      icon: (
                        <FaUsers className="text-blue-600 w-12 h-12 mb-4" />
                      ),
                      description:
                        "Empower grassroots teams and local partners through training, mentorship, and collaborative learning.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white dark:bg-gray-800 p-6 shadow hover:shadow-xl transition flex flex-col items-center text-center rounded-xl"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 70,
                            damping: 14,
                          },
                        },
                      }}
                    >
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.5,
                  }}
                >
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                    Let’s join forces to create lasting social change and
                    amplify the impact of your initiatives.
                  </p>
                  <a
                    href="#ngo-partner"
                    className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
                  >
                    Join Partner with Us
                  </a>
                </motion.div>
              </div>
            )}

            {activeTab === "corporate" && (
              <div className="py-16 px-4 md:px-12 space-y-16 bg-gray-50 dark:bg-gray-900">
                {/* Heading */}
                <motion.div
                  className="text-center max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Corporate CSR Projects with Impact
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                    We transform your CSR vision into measurable, sustainable,
                    and community-driven impact. As a trusted CSR implementing
                    partner, we offer corporates a seamless, end-to-end project
                    execution model—anchored in transparency, innovation, and
                    social value.
                  </p>
                </motion.div>

                {/* CSR Projects Slider */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Slider {...settings}>
                    {partnerData.map((partner, idx) => (
                      <div key={idx} className="px-3">
                        <div className="h-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center justify-between transition hover:shadow-2xl">
                          <Image
                            src={partner.imgSrc}
                            alt={partner.title}
                            width={120}
                            height={120}
                            className="rounded-full mb-4"
                          />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                            {partner.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 text-center px-4 flex-1">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </motion.div>

                {/* Detailed Description */}
                <motion.div
                  className="max-w-4xl mx-auto text-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                    With our strong academic foundation, deep community
                    engagement, and award-winning track record, CSRI ensures
                    that your CSR funds are not just spent—but invested in
                    long-term, visible change.
                  </p>
                </motion.div>

                {/* Partners Logos */}
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-8 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {corporatePartners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-4"
                    >
                      <Image
                        src={partner.logoSrc}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
