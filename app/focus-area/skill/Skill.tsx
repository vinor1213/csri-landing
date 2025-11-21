"use client";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const trainingPrograms = [
  { sn: 1, name: "Gardening and Landscaping", duration: "3 Months" },
  { sn: 2, name: "Cultivation of Medicinal and Aromatic Plants", duration: "3 Months" },
  { sn: 3, name: "Mushroom Cultivator", duration: "4 Months" },
  { sn: 4, name: "Aloe Veera Cultivator cum Processor", duration: "3 Months" },
  { sn: 5, name: "Bee Keeping", duration: "2 Months" },
  { sn: 6, name: "Sericulturist", duration: "3 Months" },
  { sn: 7, name: "Multi Skilled Garment Technician", duration: "3 Months" },
  { sn: 8, name: "Solar PV Engineer (Option: Solar Water Pumping System)", duration: "6 Months" },
  { sn: 9, name: "Product Assembly Assistant(Solar-LED)", duration: "4 Months" },
  { sn: 10, name: "Drone Manufacturing and Assembly Technician", duration: "5 Months" },
  { sn: 11, name: "3D Printing Operator", duration: "6 Months" },
  { sn: 12, name: "Assistant Surveyor", duration: "4 Months" },
  { sn: 13, name: "Traditional Snack and Savoury Maker", duration: "3 Months" },
  { sn: 14, name: "Hand Rolled Agarbatti Maker", duration: "2 Months" },
  { sn: 15, name: "Artificial Jewellery Designer", duration: "4 Months" },
  { sn: 16, name: "Travel and Tourist Guide", duration: "4 Months" },
  { sn: 17, name: "Aari", duration: "2 Months" },
  { sn: 18, name: "Beauty Therapist (Organic)", duration: "3 Months" },
  { sn: 19, name: "Beauty Therapist", duration: "4 Months" },
  { sn: 20, name: "Retail Sales Associate", duration: "3 Months" },
  { sn: 21, name: "Installation and Servicing of CCTV Camera, Security Alarm and Smoke Detector", duration: "3 Months" },
  { sn: 22, name: "Self Employed Tailor", duration: "3 Months" },
  { sn: 23, name: "IoT Hardware Analyst", duration: "4 Months" },
  { sn: 24, name: "Blockchain App Developer", duration: "6 Months" },
  { sn: 25, name: "Electronic Hardware Assembly Operator", duration: "5 Months" },
  { sn: 26, name: "Core BlockChain Developer", duration: "5 Months" },
  { sn: 27, name: "Vermicompost Producer", duration: "4 Months" },
  { sn: 28, name: "Assistant Electrician", duration: "5 Months" },
  { sn: 29, name: "Plumber (General)", duration: "5 Months" },
  { sn: 30, name: "Housekeeper cum Cook", duration: "3 Months" },
];

const content = {
  label: "Skill Development & Livelihood Promotion",
  image: "/images/focus-area/Focus-Area-Skill-Development.webp",
};

const features = [
  "Industry-Relevant Training: Courses like Smart Energy Meter Technician, Data Entry, Tailoring (Basic & Advanced), Aari Work, and Beauty Therapy to meet both modern and traditional sector needs.",
  "Micro-Enterprise Support: Alumni and trainees are encouraged to establish rural businesses such as tailoring shops, craft units, or service enterprises, with post-training mentoring.",
  "Placement & Career Linkages: Partnerships with industries, retail outlets, and service providers ensure employment pathways for trained candidates.",
  "Inclusive Access: Programs tailored for differently-abled candidates, rural youth, and women, offering adaptive technology and flexible learning.",
  "Continuous Innovation: New-age skill additions such as renewable energy systems, ICT skills, and digital marketing introduced regularly.",
];

const SkillPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "captcha">("idle");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const filteredPrograms = trainingPrograms.filter(program =>
    program.name.toLowerCase().includes(search.toLowerCase())
  );

  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(filteredPrograms.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentPrograms = filteredPrograms.slice(startIndex, startIndex + PAGE_SIZE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaInput("");
  };
  useEffect(() => {
    if (isOpen) generateCaptcha();
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Check captcha
    if (captchaInput.trim().toLowerCase() !== captcha.toLowerCase()) {
      setStatus("captcha");
      generateCaptcha();
      return;
    }

    // ✅ Validate form fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.program ||
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      setStatus("error");
      return;
    }

    // ✅ Simulate successful submission (without sending captcha)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", program: "" });
      generateCaptcha();
      setTimeout(() => setIsOpen(false), 1500);
    }, 1000);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/gallery/Computer-Training/Computer-Training-8.webp"
        title="Focus Area - Skill Development & Livelihood Promotion"
        subtitle="Where Responsibility Meets Community"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focus-area" },
          { label: content.label, href: "" },
        ]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* Intro + Image + Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Features */}
            <div className="space-y-6 h-full ">
              <p className="text-gray-700 leading-relaxed text-justify">
                CSRI has extensive experience in designing demand-driven training programs that align with both industry requirements and local livelihood opportunities. Training covers areas such as tailoring, data entry, retail management, CCTV supervision, rural enterprise development, and emerging skills like smart energy meter technology. We equip youth and communities with employable skills and entrepreneurial abilities, ensuring sustainable income opportunities.
              </p>

              <div className="space-y-4">
                {features.map((line, i) => {
                  // Split at the first colon to make the title bold
                  const [title, ...desc] = line.split(":");
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <MdStar className="mt-1 text-blue-500/70  w-6 h-6 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-bold">{title}:</span> {desc.join(":")}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600 flex items-center gap-3"
                aria-label="Join a Training Program"
              >
                {/* Graduation Cap Icon */}
                <svg
                  aria-hidden="true"
                  focusable="false"
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
                  <path d="M22 10L12 4 2 10l10 6 10-6z" />
                  <path d="M6 12v5a6 3 0 0012 0v-5" />
                </svg>

                <span className="relative">Join a Training Program</span>

                <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                  <div className="relative h-full w-8 bg-white/30" />
                </div>
              </button>


            </div>

            {/* Right: Image */}
            <div className="w-full h-full min-h-[400px] relative overflow-hidden shadow-lg">
              <Image src={content.image} alt={content.label} fill className="object-cover" />
            </div>
          </div>

          {/* Search + Table */}
          <div className="space-y-4">
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search by Course Name"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">S. No.</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Course Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentPrograms.map((program, idx) => (
                    <tr key={program.sn} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-sm text-gray-700">{program.sn}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{program.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{program.duration}</td>
                    </tr>
                  ))}

                  {currentPrograms.length === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center px-4 py-3 text-gray-500">
                        No courses found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h3 className="text-xl font-bold mb-4">Join an Ongoing Training Program</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={15}
                  />

                  {/* ✅ Program Dropdown */}
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Training Program</option>
                    <option value="Jr. Technician Training (Smart Energy Meter)">
                      Jr. Technician Training (Smart Energy Meter)
                    </option>
                    <option value="Tailoring Training (Basic & Advanced)">
                      Tailoring Training (Basic & Advanced)
                    </option>
                    <option value="Aari Work Skill Development">
                      Aari Work Skill Development
                    </option>
                    <option value="Beauty Therapist Training Program">
                      Beauty Therapist Training Program
                    </option>
                    <option value="Saree Pre-Pleating & Draping Course">
                      Saree Pre-Pleating & Draping Course
                    </option>
                  </select>

                  {/* ✅ String + Number Captcha */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="bg-gray-100 text-lg tracking-widest font-mono px-4 py-2 rounded-md select-none">
                      {captcha}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Refresh
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Enter CAPTCHA"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                  >
                    Join
                  </button>

                  {status === "success" && (
                    <p className="text-green-600">✅ Successfully joined!</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600">⚠️ Please fill all required fields.</p>
                  )}
                  {status === "captcha" && (
                    <p className="text-red-600">❌ Invalid CAPTCHA. Try again.</p>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default SkillPage;
