"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { HeartPulse } from "lucide-react";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import Notiflix from "notiflix";

const HealthPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    supportType: "",
    location: "",
    reason: "",
    disease: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: any) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone: any) => /^\d{10,15}$/.test(phone.replace(/\D/g, ""));

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { fullName, email, phone, supportType } = formData;

    if (!fullName || !email || !phone || !supportType) {
      Notiflix.Notify.failure("Please fill all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      Notiflix.Notify.failure("Please enter a valid email.");
      return;
    }

    if (!validatePhone(phone)) {
      Notiflix.Notify.failure("Please enter a valid phone number (10-15 digits).");
      return;
    }

    // Success
    console.log("Form Submitted:", formData);
    Notiflix.Notify.success("Enquiry submitted successfully!");
    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      supportType: "",
      location: "",
      reason: "",
      disease: "",
      message: "",
    });
    setIsOpen(false);
  };

  const content = {
    label: "Health & Well-being",
    image: "/images/focus-area/Focus-Area-Health.webp",
    icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
    features: [
      "Holistic Approaches: Yoga, naturopathy, and traditional therapies through Sona Medical College collaborations.",
      "Awareness Campaigns: Hygiene, sanitation, and mental health literacy drives in rural schools and villages.",
      "Capacity Building: Training health volunteers and community members for sustained local health practices.",
    ],
    ctaText: "Support a Health Camp",
  };

  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/gallery/health/health1-13.webp"
        title="Focus Area - Health & Well-being"
        subtitle="Where Responsibility Meets Community"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focusarea" },
          { label: content.label, href: "" },
        ]}
      />

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch px-6">

          {/* Left: Content */}
          <div className="space-y-6 text-gray-700 h-full flex flex-col">

            <p className="leading-relaxed text-justify">
              We promote preventive healthcare, rejuvenation, and health literacy by facilitating access to quality services through health camps, awareness drives, and capacity-building programs—building on our long-standing engagement in underserved areas. These efforts are further strengthened by the expertise and support of Sona Medical College of Naturopathy and Yoga, enabling us to deliver holistic wellness interventions such as medical camps, menstrual hygiene workshops, natural therapies, and yoga-based community health initiatives. We strengthen community health through preventive care, awareness, and access to wellness resources, blending modern healthcare with traditional practices. </p>

            <div className="space-y-3">
              {content.features.map((feature, i) => {
                const [title, ...desc] = feature.split(":"); // split at first colon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <MdStar className="mt-1 text-blue-500/70  flex-shrink-0 w-6 h-6" />
                    <p className="leading-relaxed">
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
              aria-label="Support a health camp"
            >
              {/* Icon */}
              <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span className="relative">{content.ctaText || 'SUPPORT A HEALTH CAMP'}</span>

              <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
                <div className="relative h-full w-8 bg-white/30" />
              </div>
            </button>


          </div>

          {/* Right: Image */}
          <div className="w-full h-full min-h-[350px] md:min_h-[450px] relative overflow-hidden shadow-md">
            <Image src={content.image} alt={content.label} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative"
                initial={{ opacity: 0, y: -50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end items-center mb-4">
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 font-bold">X</button>
                </div>
                <p className="mb-4 text-gray-600">
                  Bring quality healthcare to underserved communities. Join hands with us to organize or sponsor a medical camp and make a lasting impact.
                </p>
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization / Company"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <select
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="px-4 py-2 border rounded-lg w-full"
                    required
                  >
                    <option value="" disabled>
                      Type of Support *
                    </option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Preferred Location / Community for Camp"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Why the Location"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    placeholder="Any Predominant Disease"
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional Message / Query"
                    className="px-4 py-2 border rounded-lg w-full"
                    rows={4}
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 w-full"
                  >
                    Enquire Now
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HealthPage;
