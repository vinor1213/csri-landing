"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaCheckCircle } from "react-icons/fa";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import Notiflix from "notiflix";
import { FaBriefcase, FaLaptop, FaPaperPlane, FaLightbulb, FaFolder } from "react-icons/fa";
const partnerData = [
  {
    title: "Corporate Partner",
    description:
      "Supporting community programs with impactful and meaningful CSR contributions.",
    imgSrc: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760526272~exp=1760529872~hmac=8672d0a38f8414b1109c7ba04fd452e5bcd1f54eab27a0f73a17d5e2175010a3&w=1480",
  },
  {
    title: "Government Agency",
    description:
      "Collaborating on sustainable development and wide-reaching social initiatives.",
    imgSrc: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760526272~exp=1760529872~hmac=8672d0a38f8414b1109c7ba04fd452e5bcd1f54eab27a0f73a17d5e2175010a3&w=1480",
  },
  {
    title: "Foundation Partner",
    description:
      "Driving health, education, and environmental programs for lasting impact.",
    imgSrc: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760526272~exp=1760529872~hmac=8672d0a38f8414b1109c7ba04fd452e5bcd1f54eab27a0f73a17d5e2175010a3&w=1480",
  },
  {
    title: "Local Community Network",
    description:
      "Connecting CSR projects directly with the local communities that benefit.",
    imgSrc: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760526272~exp=1760529872~hmac=8672d0a38f8414b1109c7ba04fd452e5bcd1f54eab27a0f73a17d5e2175010a3&w=1480",
  },
  {
    title: "Skill Development Partner",
    description:
      "Empowering youth and communities through structured training programs.",
    imgSrc: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760526272~exp=1760529872~hmac=8672d0a38f8414b1109c7ba04fd452e5bcd1f54eab27a0f73a17d5e2175010a3&w=1480",
  },
];
const items = [
  { id: 1, img: "/images/inf/1.png" },
  { id: 2, img: "/images/inf/2.png" },
  { id: 3, img: "/images/inf/3.png" },
  { id: 4, img: "/images/inf/4.png" },
  { id: 5, img: "/images/inf/5.png" },
  { id: 6, img: "/images/inf/6.png" },
  { id: 7, img: "/images/inf/7.png" },
];
const corporatePartners = [
  {
    name: "Company A",
    logoSrc:
      "/images/corporates/aicte-0.webp",
  },
  {
    name: "Company B",
    logoSrc:
      "/images/corporates/NSDC.webp",
  },
  {
    name: "Company C",
    logoSrc:
      "/images/corporates/PMKVY.webp",
  },
  {
    name: "Company D",
    logoSrc:
      "/images/corporates/SAIL.webp",
  },
  {
    name: "Company E",
    logoSrc:
      "/images/corporates/SRCL.webp",
  },
  {
    name: "Company F",
    logoSrc:
      "/images/corporates/TNSDC.webp",
  },
  {
    name: "Company G",
    logoSrc:
      "/images/corporates/uba.webp",
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

export default function CorporatePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    designation: "",
    email: "",
    contactNumber: "",
    website: "",
    csrFocus: [] as string[],
    otherFocus: "",
    geography: [] as string[],
    specificArea: "",
    partnershipMode: [] as string[],
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement; // narrow type to HTMLInputElement for checkboxes
    const { name, value, type } = target;

    if (type === "checkbox") {
      const checked = target.checked; // ✅ now TS knows 'checked' exists
      const arrKey = name as keyof typeof formData;
      const currentArr = formData[arrKey] as string[];

      if (checked) {
        setFormData({ ...formData, [arrKey]: [...currentArr, value] });
      } else {
        setFormData({ ...formData, [arrKey]: currentArr.filter((v) => v !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.companyName.trim()) {
      Notiflix.Notify.failure("Please enter Company Name");
      return;
    }
    if (!formData.contactPerson.trim()) {
      Notiflix.Notify.failure("Please enter Contact Person Name");
      return;
    }
    if (!formData.email.trim()) {
      Notiflix.Notify.failure("Please enter Email ID");
      return;
    }
    if (!formData.contactNumber.trim()) {
      Notiflix.Notify.failure("Please enter Contact Number");
      return;
    }
    if (!formData.budget) {
      Notiflix.Notify.failure("Please select Estimated CSR Budget");
      return;
    }

    // All validations passed
    Notiflix.Notify.success("Form submitted successfully!");

    // Log all form data
    console.log("CSR Partnership Form Data:", formData);

    // Close modal
    setIsFormOpen(false);

    // Optional: Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      designation: "",
      email: "",
      contactNumber: "",
      website: "",
      csrFocus: [],
      otherFocus: "",
      geography: [],
      specificArea: "",
      partnershipMode: [],
      budget: "",
      description: "",
    });
  };
  return (
    <div>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/business-handshake-partners_160672-4152.jpg"
        title="Pratner With Us - Corporates"
        subtitle="Projects with Sustainable Impact"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
          { label: "Corporates " },
        ]}
      />

      <section className=" bg-gray-50 dark:bg-gray-900 dark:text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" px-4 md:px-12 space-y-16 bg-gray-50 dark:bg-gray-900">
            {/* Heading */}
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                Partner with CSRI to transform your CSR goals into measurable, sustainable impact. We serve as a trusted implementing partner ensuring compliance, innovation, and on-ground success.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1  gap-8 
             px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
             max-w-7xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            "Turnkey CSR Project Management: From design to execution, monitoring, and reporting, we deliver end-to-end project solutions aligned with your CSR mandate.",
            "Measurable & Transparent Outcomes: Real-time dashboards, detailed reports, and case studies that showcase impact, ensuring accountability and CSR compliance.",
            "Innovation with Academic Backing: Access Sona’s 23+ R&D centres for tech-driven, scalable, and sustainable CSR solutions.",
            "On-Campus & Community Infrastructure: Dedicated labs, training centres, and rural field sites available for CSR project establishment.",
            "Recognition & Visibility: Showcase your brand through co-branded initiatives, impact storytelling, and community media coverage.",
          ].map((item, idx) => {
            const [boldPart, ...rest] = item.split(":");
            const normalPart = rest.join(":"); // in case text contains more colons
            return (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition"
              >
                <FaCheckCircle className="text-blue-500 mt-1 w-8 h-8" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>{boldPart}:</strong> {normalPart}
                </p>
              </div>
            );
          })}
        </motion.div>




        <motion.div
          className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 
             flex flex-col lg:flex-row items-start gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* LEFT: 2/5 WIDTH */}
          <div className="w-full lg:w-2/6 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
              With our strong academic foundation, deep community engagement, and
              award-winning track record, CSRI ensures that your CSR funds are not
              just spent—but invested in long-term, visible change.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => setIsFormOpen(true)}
                type="button"
                className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 
                   text-neutral-50 transition hover:bg-blue-600 flex items-center gap-3"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <circle cx="9" cy="7" r="4" />
                  <path d="M17 11a4 4 0 110-8 4 4 0 010 8z" />
                  <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
                  <path d="M15 19v-1a4 4 0 014-4h1a4 4 0 014 4v1" />
                </svg>

                <span className="relative italic">Partner with Us – Build Sustainable Impact</span>

                <div className="animate-shine-infinite absolute inset-0 -top-[20px] 
                        flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* RIGHT: 3/5 WIDTH */}
          <motion.div
            className="w-full lg:w-4/6 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {corporatePartners.slice(0, 9).map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-2 bg-white rounded shadow 
                   hover:shadow-2xl transition w-[102px] "
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

        </motion.div>



        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex justify-center items-start overflow-auto z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl p-8 relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
              >
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-bold"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  CSR Partnership Enquiry
                </h3>

                <form className="space-y-6 text-gray-700 dark:text-gray-300" onSubmit={handleSubmit}>
                  {/* Section 1: Basic Info */}
                  <div>
                    <h4 className="font-semibold mb-2">Basic Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                      <input
                        type="text"
                        name="contactPerson"
                        placeholder="Contact Person Name"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                      <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                      <input
                        type="text"
                        name="website"
                        placeholder="Company Website"
                        value={formData.website}
                        onChange={handleChange}
                        className="border p-3 rounded w-full"
                      />
                    </div>
                  </div>

                  {/* Section 2: CSR Priorities */}
                  <div>
                    <h4 className="font-semibold mb-2">CSR Priorities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Education & Skill Development", "Women Empowerment & Livelihoods", "Environment & Sustainability", "Health & Wellbeing", "Technology & Innovation"].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="checkbox" name="csrFocus" value={item} checked={formData.csrFocus.includes(item)} onChange={handleChange} /> {item}
                        </label>
                      ))}
                      <input
                        type="text"
                        name="otherFocus"
                        placeholder="Other"
                        value={formData.otherFocus}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                      />
                      <div className="md:col-span-2">
                        <label className="block mb-1">Geographic Preference:</label>
                        <div className="flex flex-wrap gap-4">
                          {["Local (Tamil Nadu)", "Regional (South India)", "Pan-India"].map((item, idx) => (
                            <label key={idx} className="flex items-center gap-2">
                              <input type="checkbox" name="geography" value={item} checked={formData.geography.includes(item)} onChange={handleChange} /> {item}
                            </label>
                          ))}
                          <input
                            type="text"
                            name="specificArea"
                            placeholder="Specific District/Area"
                            value={formData.specificArea}
                            onChange={handleChange}
                            className="border p-2 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Engagement & Support */}
                  <div>
                    <h4 className="font-semibold mb-2">Engagement & Support</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["End-to-End Project Implementation", "Joint Program Development", "Infrastructure/Facility Support", "Research & Innovation Support"].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="checkbox" name="partnershipMode" value={item} checked={formData.partnershipMode.includes(item)} onChange={handleChange} /> {item}
                        </label>
                      ))}
                      <div className="md:col-span-2">
                        <label className="block mb-1">Estimated CSR Budget:</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} className="border p-2 rounded w-full">
                          <option value="">Select Budget</option>
                          <option>Below ₹10 lakh</option>
                          <option>₹10–25 lakh</option>
                          <option>₹25–50 lakh</option>
                          <option>₹50 lakh+</option>
                        </select>
                      </div>
                      <textarea
                        name="description"
                        placeholder="Brief Description of Proposed CSR Goals/Expectations"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-3 rounded w-full md:col-span-2"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Submit CSR Partnership Enquiry
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
}
