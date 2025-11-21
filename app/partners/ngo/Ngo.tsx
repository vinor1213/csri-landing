"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Notiflix from "notiflix";
import { FaHandshake, FaLightbulb, FaGlobe, FaUsers } from "react-icons/fa";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function NgoPage() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    ngoName: "",
    contactPerson: "",
    designation: "",
    registration: "",
    email: "",
    contactNumber: "",
    website: "",
    focusAreas: [] as string[],
    focusAreasOther: "",         // <-- add this
    beneficiaries: [] as string[],
    operationAreas: "",
    scale: [] as string[],
    collaboration: [] as string[],
    collaborationOther: "",      // <-- add this
    resources: [] as string[],
    resourcesOther: "",          // <-- add this
    successStories: "",
    reason: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    if (type === "checkbox") {
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

    if (!formData.ngoName.trim()) {
      Notiflix.Notify.failure("Please enter NGO Name");
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

    Notiflix.Notify.success("NGO Partnership Request submitted successfully!");
    console.log("NGO Partnership Form Data:", formData);

    setIsFormOpen(false);
    setFormData({
      ngoName: "",
      contactPerson: "",
      designation: "",
      registration: "",
      email: "",
      contactNumber: "",
      website: "",
      focusAreas: [],
      focusAreasOther: "",      // <-- added
      beneficiaries: [],
      operationAreas: "",
      scale: [],
      collaboration: [],
      collaborationOther: "",   // <-- added
      resources: [],
      resourcesOther: "",       // <-- added
      successStories: "",
      reason: "",
    });

  };


  return (
    <div>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/volunteer-hands-helping-people_1048-14970.jpg"
        title="Pratner With Us - NGO "
        subtitle="Collaborate for Greater Social Impact"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Partners", href: "/partners" },
          { label: "NGO" },
        ]}
      />

      <section className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                Together, we can expand the reach and impact of community development. CSRI values collaboration and believes that partnerships with grassroots organizations create deeper, lasting change.
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
                  title: "Co-Design Programs",
                  icon: <FaHandshake className="text-blue-600 w-12 h-12 mb-4" />,
                  description:
                    "Jointly conceptualize training, health, or empowerment initiatives tailored to local needs.",
                },
                {
                  title: "Resource Sharing",
                  icon: <FaLightbulb className="text-blue-600 w-12 h-12 mb-4" />,
                  description:
                    "Leverage Sona’s academic expertise, trainers, and research while contributing your community networks and insights.",
                },
                {
                  title: "Scale & Outreach",
                  icon: <FaGlobe className="text-blue-600 w-12 h-12 mb-4" />,
                  description:
                    "Extend program reach through our adopted villages, skill hubs, and strong institutional presence.",
                },
                {
                  title: "Mutual Learning",
                  icon: <FaUsers className="text-blue-600 w-12 h-12 mb-4" />,
                  description:
                    "Exchange knowledge and best practices, creating stronger, community-driven impact models.",
                },
                {
                  title: "Joint Advocacy",
                  icon: <FaUsers className="text-blue-600 w-12 h-12 mb-4" />,
                  description:
                    "Amplify voices together for policies that support sustainable livelihoods, education, and inclusion.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 shadow hover:shadow-xl transition flex flex-col items-center text-center "
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: "spring", stiffness: 70, damping: 14 },
                    },
                  }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}

              {/* ✨ Call to Action Card fills the remaining 3-column space */}
              <motion.div
                className="lg:col-span-3 md:col-span-1 col-span-1 bg-blue-500/80 text-white  shadow-lg flex flex-col justify-center items-center text-center p-8"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 70, damping: 14 },
                  },
                }}
              >


                <div className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16'>
                  <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
                    <p className="text-xl  max-w-md text-slate-800 text-white">   Let’s build sustainable partnerships that create real community impact together.</p>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="
    flex items-center gap-3 font-bold italic 
    rounded-lg py-3 px-8 
    bg-white text-blue-600
    border border-blue-200
    shadow-md hover:shadow-xl
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-blue-50
  "
                    >
                      <span>Collaborate with Us – Drive Change Together</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g>
                          <animate
                            attributeName="transform"
                            dur="0.6s"
                            values="translate(0,0); translate(4,0); translate(0,0)"
                            repeatCount="indefinite"
                          />
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </g>
                      </svg>
                    </button>



                  </div>
                </div>
              </motion.div>
            </motion.div>



          </div>
        </div>
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex justify-center items-start overflow-auto z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl p-6 md:p-8 relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
              >
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  NGO Partnership Request
                </h3>

                <form
                  className="space-y-6 text-gray-700 dark:text-gray-300"
                  onSubmit={handleSubmit}
                >
                  {/* Section 1: Organization Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Organization Details</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" name="ngoName" placeholder="NGO Name" value={formData.ngoName} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="text" name="contactPerson" placeholder="Contact Person Name" value={formData.contactPerson} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="text" name="registration" placeholder="Registration No. & Year" value={formData.registration} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} className="border p-3 rounded w-full" />
                      <input type="text" name="website" placeholder="Website/Social Media Links" value={formData.website} onChange={handleChange} className="border p-3 rounded w-full" />
                    </div>
                  </div>

                  {/* Section 2: Program & Community Work */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Program & Community Work</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <h5 className="md:col-span-2 font-medium mb-1">Primary Thematic Focus Areas:</h5>
                      {["Education", "Health & Nutrition", "Livelihood & Skill Development", "Women Empowerment", "Environment & Climate Action"].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="checkbox" name="focusAreas" value={item} checked={formData.focusAreas.includes(item)} onChange={handleChange} className="accent-blue-600" />
                          {item}
                        </label>
                      ))}
                      <input type="text" name="focusAreasOther" placeholder="Other" value={formData.focusAreasOther || ""} onChange={handleChange} className="border p-2 rounded w-full" />

                      <h5 className="md:col-span-2 font-medium mb-1">Target Beneficiaries:</h5>
                      {["Children & Youth", "Women & SHGs", "Farmers & Rural Communities", "Urban Poor/Slum Communities", "Tribals/Indigenous Communities"].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="checkbox" name="beneficiaries" value={item} checked={formData.beneficiaries.includes(item)} onChange={handleChange} className="accent-blue-600" />
                          {item}
                        </label>
                      ))}
                      <input type="text" name="operationAreas" placeholder="Areas of Operation (District/State)" value={formData.operationAreas} onChange={handleChange} className="border p-2 rounded w-full md:col-span-2" />

                      <h5 className="md:col-span-2 font-medium mb-1">Scale of Work:</h5>
                      {["Local (single district)", "Regional (multi-district/state-level)", "National"].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="checkbox" name="scale" value={item} checked={formData.scale.includes(item)} onChange={handleChange} className="accent-blue-600" />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Partnership with CSRI */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Partnership with CSRI</h4>

                    <div>
                      <h5 className="font-medium mb-1 text-gray-800 dark:text-gray-200">How would you like to collaborate with CSRI?</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {["Co-Design Programs", "Access to Trainers/Academic Resources", "Joint Implementation in Adopted Villages", "Advocacy & Policy Campaigns"].map((item, idx) => (
                          <label key={idx} className="flex items-center gap-2">
                            <input type="checkbox" name="collaboration" value={item} checked={formData.collaboration.includes(item)} onChange={handleChange} className="accent-blue-600" />
                            {item}
                          </label>
                        ))}
                        <input type="text" name="collaborationOther" placeholder="Other" value={formData.collaborationOther || ""} onChange={handleChange} className="border p-2 rounded w-full" />
                      </div>

                      <h5 className="font-medium mt-4 mb-1 text-gray-800 dark:text-gray-200">Resources You Can Contribute:</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {["Community Networks", "Field Staff", "Volunteers", "Local Knowledge/Best Practices"].map((item, idx) => (
                          <label key={idx} className="flex items-center gap-2">
                            <input type="checkbox" name="resources" value={item} checked={formData.resources.includes(item)} onChange={handleChange} className="accent-blue-600" />
                            {item}
                          </label>
                        ))}
                        <input type="text" name="resourcesOther" placeholder="Other" value={formData.resourcesOther || ""} onChange={handleChange} className="border p-2 rounded w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Additional Information */}
                  <div className="space-y-4">
                    <textarea name="successStories" placeholder="Success Stories/Case Studies (Optional)" value={formData.successStories} onChange={handleChange} className="border p-3 rounded w-full" rows={3} />
                    <textarea name="reason" placeholder="Why do you want to partner with CSRI?" value={formData.reason} onChange={handleChange} className="border p-3 rounded w-full" rows={3} />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-semibold italic rounded-lg shadow hover:bg-blue-700 transition">
                      Submit NGO Partnership Request
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
