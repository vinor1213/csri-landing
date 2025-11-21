"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import { BookOpen, HeartPulse, Leaf, Home, Users, Rocket } from "lucide-react";
import { MdStar, } from "react-icons/md";

const tabs = [
  {
    id: "skill",
    label: "Skill Development",
    icon: <BookOpen className="w-5 h-5" />,
    image: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-463151.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `CSRI designs demand-driven training programs aligned with industry requirements and local livelihood opportunities, covering tailoring, data entry, retail management, CCTV supervision, rural enterprise development, and emerging skills like smart energy meter technology.\n\n• Collaboration with Industrial Training Institutes and SHGs.\n• Placement support and entrepreneurship handholding.\n• Alumni successfully running rural micro-enterprises.`,
  },
  {
    id: "health",
    label: "Health & Well-being",
    icon: <HeartPulse className="w-5 h-5" />,
    image: "https://img.freepik.com/premium-photo/photo-shoot-depicting-medical-outreach-program-remote-village-world-leprosy-day_950002-464638.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `We promote preventive healthcare and holistic wellness through health camps, awareness drives, and yoga-based interventions. Partnering with Sona Medical College of Naturopathy and Yoga enables initiatives like medical camps, menstrual hygiene workshops, and natural therapies.\n\n• Over a decade of community health camps.\n• Tie-ups for holistic interventions.`,
  },
  {
    id: "environment",
    label: "Environment & Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    image: "https://img.freepik.com/premium-photo/teacher-students-learning-about-sustainable-agriculture_198067-121071.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `Sona emphasizes green practices, climate-smart livelihoods, and natural resource conservation. Initiatives include plantation drives, waste management, eco-skilling, and renewable energy innovations supported by Sona R&D Centres.\n\n• Renewable energy systems.\n• Climate-smart agriculture & green technology.`,
  },
  {
    id: "village",
    label: "Village Adoption",
    icon: <Home className="w-5 h-5" />,
    image: "https://img.freepik.com/premium-photo/poor-farmer-little-child-holding-handmade-home-hand_75648-3090.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `Through integrated development models, we adopt villages for interventions in skilling, healthcare, environment, and technology. Under Unnat Bharat Abhiyan, we have adopted Kanderkula Manickam and Thalavaipatty villages.\n\n• Focused on education, sanitation & income opportunities.\n• Empowerment via vocational training & resource planning.`,
  },
  {
    id: "women",
    label: "Women Empowerment",
    icon: <Users className="w-5 h-5" />,
    image: "https://img.freepik.com/free-photo/group-workers-organizing-protest_23-2151546451.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `We empower women with training, entrepreneurship support, and financial literacy. Successful programs include tailoring, Aari work, digital literacy, and micro-enterprise creation.\n\n• Structured programs with SHG partnerships.\n• Many women launched their ventures or gained employment.`,
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship Support",
    icon: <Rocket className="w-5 h-5" />,
    image: "https://img.freepik.com/premium-photo/young-indian-agronomist-officer-visiting-farmer-his-farm_54391-5389.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `CSRI supports graduates in becoming entrepreneurs through incubation from Sona’s ecosystem—Sona Incubation Foundation, Business Incubation Centre, and Entrepreneurship Development Cell.\n\n• Startup incubation support.\n• Innovation & mentorship ecosystem.`,
  },
];

const FocusareaSection = () => {
  const [activeTab, setActiveTab] = useState("skill");
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeContent = tabs.find((tab) => tab.id === activeTab);
  useEffect(() => {
    const tabFromQuery = searchParams.get("tab");
    if (tabFromQuery && tabs.find((t) => t.id === tabFromQuery)) {
      setActiveTab(tabFromQuery);
    }
  }, [searchParams]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", id);
    router.replace(`?${params.toString()}`); // updates URL without reload
  };


  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/free-photo/cutout-paper-different-family-members-being-together_23-2148699752.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80"
        title="Focus Area of Working"
        subtitle="Where Responsibility Meets Community"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focus-area" },
          { label: "" },
        ]}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto ">
          {/* Modern Tabs */}
          <div className="mb-6 border-b border-gray-300 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-6 px-4 md:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative flex items-center gap-2 pb-2 font-semibold transition-colors ${activeTab === tab.id
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

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center  shadow-lg p-6 
              ${activeTab === "skill" && "bg-gray-100"}
              ${activeTab === "health" && "bg-gray-100"}
              ${activeTab === "environment" && "bg-gray-100"}
              ${activeTab === "village" && "bg-gray-100"}
              ${activeTab === "women" && "bg-gray-100"}
              ${activeTab === "entrepreneurship" && "bg-gray-100"}`}
            >
              {/* Image */}
              <div className="w-full h-64 relative  overflow-hidden shadow-md">
                <Image
                  src={activeContent?.image || ""}
                  alt={activeContent?.label || ""}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-justify space-y-4 text-gray-700 dark:text-gray-200">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {activeContent?.icon}
                  {activeContent?.label}
                </h3>
                {activeContent?.content.split("\n").map((line, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {/* Show icon only for lines that start with "•" */}
                    {line.trim().startsWith("•") ? (
                      <MdStar className="mt-1 text-blue-500/70 flex-shrink-0" />
                    ) : null}
                    <p className="leading-relaxed">
                      {line.replace("•", "").trim()}
                    </p>
                  </div>
                ))}

              </div>
            </motion.div>
          </AnimatePresence>
          <p className="mt-20 text-center text-gray-500 dark:text-gray-400 italic text-sm">
            Committed to Social Impact, Community Empowerment, and Sustainable Development
          </p>

        </div>
      </section>
    </>
  );
};

export default FocusareaSection;