"use client";

import { useRouter } from "next/navigation"; // App Router
import { motion } from "framer-motion";
import { programCategories } from "@/data/programCategories";
import Link from "next/link";
import {
  FaLeaf,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaFemale,
  FaCity,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";

const focusAreas = [
  {
    icon: <FaChalkboardTeacher className="mx-auto text-green-600 text-5xl" />,
    title: "Skill Development & Livelihood Promotion",
    desc: "Demand-driven skill training programs enhance youth employability, foster entrepreneurship, and support sustainable livelihood opportunities.",
    href: "/focus-area/skill"
  },
  {
    icon: <FaHeartbeat className="mx-auto text-red-500 text-5xl" />,
    title: "Health & Well-being",
    desc: "Promoting preventive healthcare, health literacy, and access to quality services through health camps, awareness drives, and rejuvenation programs.",
    href: "/focus-area/health"
  },
  {
    icon: <FaLeaf className="mx-auto text-emerald-500 text-5xl" />,
    title: "Environment & Sustainability",
    desc: "Championing eco-friendly practices and community sustainability initiatives for long-term impact.",
    href: "/focus-area/environment"
  },
  {
    icon: <FaCity className="mx-auto text-blue-500 text-5xl" />,
    title: "Village Adoption",

    desc: "Holistic development of villages through targeted initiatives, skill training, and infrastructure support.",
    href: "/focus-area/village"
  },
  {
    icon: <FaFemale className="mx-auto text-pink-500 text-5xl" />,
    title: "Women Empowerment Initiatives",
    desc: "Creating equal opportunities, leadership roles, and entrepreneurial support for women across communities.",
    href: "/focus-area/women"
  },
  {
    icon: <FaBook className="mx-auto text-indigo-500 text-5xl" />,
    title: "Entrepreneurship Support",
    desc: "Empowering communities through quality education, digital learning platforms, and awareness programs to bridge the knowledge divide.",
    href: "/focus-area/entrepreneurship"
  },
];

// Framer Motion variant
const scrollVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CSRIFocusPage() {
  const router = useRouter();

  return (
    <section className="py-10 bg-white sm:py-8 lg:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Programs Section */}

        <div id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, once: true }}
            className="text-3xl font-bold tracking-tight text-[#4f4e50ff]  sm:text-4xl lg:text-5xl text-center"
          >
            Programs
          </motion.h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg text-center">
            Our programs are designed to create meaningful impact in the
            community. We focus on skill development, healthcare, research, and
            empowerment initiatives that foster sustainable growth and positive
            change.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCategories.map((program, idx) => (
              <motion.div
                key={idx}
                variants={scrollVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2, once: true }}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-500 flex flex-col overflow-hidden"
              >
     
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
       
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                      {program.title}
                    </h3>

                    <button
                      onClick={() =>
                        router.push(`/programs?category=${program.slug}`)
                      }
                      className="hover:bg-blue-500 group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 font-medium text-neutral-200"
                    >
                      <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

       
          <div className="flex justify-center mt-8">
            <button
              onClick={() => router.push("/programs")}
              className=" hover:bg-blue-500 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-600 px-6 font-medium text-neutral-200"
            >
              <span>View All Programs</span>
              <div className="ml-1 transition duration-300 group-hover:rotate-[360deg]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

  
        <div id="focus" className="mt-12 text-center">
          <motion.h2
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, once: true }}
            className="text-3xl font-bold tracking-tight text-[#4f4e50ff] sm:text-4xl lg:text-5xl"
          >
            Focus Areas of Working
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
            We create impact through skill development, health initiatives,
            environment, and empowerment programs.
          </p>

          <div className="grid grid-cols-1 text-center sm:mt-10 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-0 xl:mt-12">
            {focusAreas.map((area, idx) => (
              <Link key={idx} href={area.href} className="group">
                <div
                  className={`
          flex flex-col items-center h-full md:p-10 lg:p-14 border-gray-200
          ${idx % 3 !== 0 ? "md:border-l" : ""}
          ${idx >= 3 ? "md:border-t" : ""}
          transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-sm
        `}
                >
                  <div className="mx-auto">{area.icon}</div>

                  <h3 className="mt-10 text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    {area.title}
                  </h3>

                  <p className="mt-5 text-base text-gray-600 text-justify leading-relaxed px-4 md:px-0">
                    {area.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
