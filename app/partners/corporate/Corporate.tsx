"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { postData } from "@/app/lib/api";
import { toast } from "react-toastify";

import { FaProjectDiagram, FaChartLine, FaFlask, FaSchool, FaBullhorn } from "react-icons/fa";

const features = [
  {
    icon: <FaProjectDiagram />,
    title: "Turnkey CSR Project Management",
    description:
      "From design to execution, monitoring, and reporting, we deliver end-to-end project solutions aligned with your CSR mandate.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaChartLine />,
    title: "Measurable & Transparent Outcomes",
    description:
      "Real-time dashboards, detailed reports, and case studies that showcase impact, ensuring accountability and CSR compliance.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaFlask />,
    title: "Innovation with Academic Backing",
    description:
      "Access Sona’s 23+ R&D centres for tech-driven, scalable, and sustainable CSR solutions.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaSchool />,
    title: "On-Campus & Community Infrastructure",
    description:
      "Dedicated labs, training centres, and rural field sites available for CSR project establishment.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaBullhorn />,
    title: "Recognition & Visibility",
    description:
      "Showcase your brand through co-branded initiatives, impact storytelling, and community media coverage.",
    color: "bg-pink-100 text-pink-600",
  },
];

const corporatePartners = [
  {
    name: "Company A",
    logoSrc: "/images/corporates/aicte-0.webp",
  },
  {
    name: "Company B",
    logoSrc: "/images/corporates/NSDC.webp",
  },
  {
    name: "Company C",
    logoSrc: "/images/corporates/PMKVY.webp",
  },
  {
    name: "Company D",
    logoSrc: "/images/corporates/SAIL.webp",
  },
  {
    name: "Company E",
    logoSrc: "/images/corporates/SRCL.webp",
  },
  {
    name: "Company F",
    logoSrc: "/images/corporates/TNSDC.webp",
  },
  {
    name: "Company G",
    logoSrc: "/images/corporates/uba.webp",
  },
];

export default function CorporatePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        setFormData({
          ...formData,
          [arrKey]: currentArr.filter((v) => v !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { companyName, contactPerson, email, contactNumber, budget } =
      formData;

    // 🔥 VALIDATION
    if (!companyName.trim()) {
      toast.error("Please enter Company Name", { theme: "colored" });
      return;
    }
    if (!contactPerson.trim()) {
      toast.error("Please enter Contact Person Name", { theme: "colored" });
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter Email ID", { theme: "colored" });
      return;
    }
    if (!contactNumber.trim()) {
      toast.error("Please enter Contact Number", { theme: "colored" });
      return;
    }
    if (!budget.trim()) {
      toast.error("Please select Estimated CSR Budget", { theme: "colored" });
      return;
    }

    setLoading(true);

    // Payload creation
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // Handle array values properly
      if (Array.isArray(value)) {
        value.forEach((v) => payload.append(key + "[]", v));
      } else {
        payload.append(key, value as string);
      }
    });

    try {
      // 🔥 Correct endpoint → partnerships
      const res = await postData("partnerships", payload);

      if (res.success) {
        toast.success("Form submitted successfully!", {
          theme: "colored",
        });

        console.log("CSR Partnership Form Data:", formData);

        setIsFormOpen(false);

        // Reset form
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
      } else {
        toast.error("Something went wrong!", { theme: "colored" });
      }
    } catch (error) {
      toast.error("Server Error!", { theme: "colored" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ReuseBanner
        image="/images/banner/corporate-partners.jpg"
        title="Pratner With Us - Corporates"
        subtitle="Projects with Sustainable Impact"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners/corporate" },
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
                Partner with CSRI to transform your CSR goals into measurable,
                sustainable impact. We serve as a trusted implementing partner
                ensuring compliance, innovation, and on-ground success.
              </p>
            </motion.div>
          </div>
        </div>




        <motion.div
          className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* LEFT: Features (now 3/5) */}
          <motion.div
            className="w-full lg:w-3/5 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center ${feature.color} rounded-full`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT: CTA + Logos (now 2/5) */}
          <motion.div
            className="w-full lg:w-2/5 flex flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
              With our strong academic foundation, deep community engagement,
              and award-winning track record, CSRI ensures that your CSR funds
              are not just spent—but invested in long-term, visible change.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full flex justify-center"
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

                <span className="relative italic">
                  Partner with Us – Build Sustainable Impact
                </span>

                <div
                  className="animate-shine-infinite absolute inset-0 -top-[20px] 
                flex h-[calc(100%+40px)] w-full justify-center blur-[12px]"
                >
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
              </button>
            </motion.div>

            {/* Logos */}
            <div className="flex flex-wrap gap-4 justify-center">
              {corporatePartners.slice(0, 9).map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center p-2 bg-white rounded shadow hover:shadow-2xl transition w-[102px]"
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
            </div>
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

                <form
                  className="space-y-6 text-gray-700 dark:text-gray-300"
                  onSubmit={handleSubmit}
                >
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
                      {[
                        "Education & Skill Development",
                        "Women Empowerment & Livelihoods",
                        "Environment & Sustainability",
                        "Health & Wellbeing",
                        "Technology & Innovation",
                      ].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="csrFocus"
                            value={item}
                            checked={formData.csrFocus.includes(item)}
                            onChange={handleChange}
                          />{" "}
                          {item}
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
                        <label className="block mb-1">
                          Geographic Preference:
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {[
                            "Local (Tamil Nadu)",
                            "Regional (South India)",
                            "Pan-India",
                          ].map((item, idx) => (
                            <label
                              key={idx}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="checkbox"
                                name="geography"
                                value={item}
                                checked={formData.geography.includes(item)}
                                onChange={handleChange}
                              />{" "}
                              {item}
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
                      {[
                        "End-to-End Project Implementation",
                        "Joint Program Development",
                        "Infrastructure/Facility Support",
                        "Research & Innovation Support",
                      ].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="partnershipMode"
                            value={item}
                            checked={formData.partnershipMode.includes(item)}
                            onChange={handleChange}
                          />{" "}
                          {item}
                        </label>
                      ))}
                      <div className="md:col-span-2">
                        <label className="block mb-1">
                          Estimated CSR Budget:
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="border p-2 rounded w-full"
                        >
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
                      disabled={loading}
                      className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      {loading
                        ? "Loading..."
                        : "Submit CSR Partnership Enquiry"}
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
