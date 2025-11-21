"use client";

import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link"
import {
  AcademicCapIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Our Legacy & Gandhi's Visit",
    imgSrc:
      "https://www.thesonagroup.com/assets/img/1921/Mahatma-Gandhi-Interacting-with-other-Indian-Leaders-Philanthropists.jpg",
    paragraph:
      "In 1921, Mahatma Gandhi visited our founder Kalaithanthai Karumuttu Thiagaraja Chettiar’s home. Here the famous 'loin-cloth incident' occurred—Gandhi vowed never to wear a shirt again, symbolizing his solidarity with the laborers’ plight. Since then, Sona has carried forward his values of empathy and empowerment.",
    link: "Learn more",
  },
  {
    heading: "Visionary Education",
    imgSrc:
      "https://img.freepik.com/premium-photo/glowing-light-bulbs-books-stock-graphs-reading-inspired-concept-concept-innovation-educational-knowledge-business-education-concepts_615349-656.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    paragraph:
      "Known as ‘Kalaithanthai’ or ‘Father of Education’, our founder established premier institutions—Thiagarajar Polytechnic in 1958 and later Sona College of Technology in 1997—nurturing generations of technocrats with excellence.",
    link: "Learn more",
  },
  {
    heading: "Legacy of Growth",
    imgSrc: "https://img.freepik.com/premium-photo/diverse-family-roots-growing-together-family-tree-with-growth-text-educational-family-support_980716-557713.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    // shortened for clarity
    paragraph:
      "From pioneering textiles (Valliappa Textiles) and innovating in education, real estate, and IT, to impactful CSR through Valliappa Foundation—Sona Group’s transformation continues to serve society with distinction.",
    link: "Learn more",
  },
];

const stats = [
  { icon: AcademicCapIcon, label: "Students", value: 100000 },
  { icon: UserGroupIcon, label: "Staff Members", value: 1000 },
  { icon: BriefcaseIcon, label: "Placement Offers", value: 50000 },
];

// ✅ Child component for stat cards (fixes hook issue)
interface StatProps {
  icon: React.ElementType;
  label: string;
  value: number;
  delay: number;
}

const StatCard = ({ icon: Icon, label, value, delay }: StatProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="group relative flex flex-col items-center bg-white shadow-md  p-2 
                 overflow-hidden cursor-pointer"
    >
      {/* Animated Background Overlay */}
      <span className="absolute inset-0 bg-gray-400 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 "></span>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-2">
        <Icon className="h-12 w-12 text-blue mb-2  transition-colors duration-300" />
        <h4 className="text-3xl font-bold text-darkpurple  transition-colors duration-300">
          {inView && <CountUp end={value} duration={2.5} separator="," />}+
        </h4>
        <p className="text-lg font-medium text-black  transition-colors duration-300">
          {label}
        </p>
      </div>
    </motion.div>
  );
};


const Aboutus = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("News");
  const EventsData = [
    // 🌍 NEWS
    {
      title: "CSRI Partners with Local Schools for Sustainability Drive",
      date: "Oct 20, 2025",
      description:
        "CSRI has launched a new partnership with 15 schools to promote environmental awareness and introduce recycling programs among students.",
      img:"https://img.freepik.com/premium-psd/poster-world-environment-day-with-green-hands-holding-globe_719635-283.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "News",
    },
    {
      title: "Tree Plantation Milestone Achieved: 10,000 Saplings!",
      date: "Sep 12, 2025",
      description:
        "Our volunteers have successfully planted over 10,000 trees across three cities, contributing to cleaner air and greener communities.",
      img: "https://img.freepik.com/premium-photo/volunteering-charity-cleaning-people-ecology-concept-group-happy-volunteers-with-garbage-bags-cleaning-area-park_380164-135900.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "News",
    },
    {
      title: "Women Empowerment Workshop Featured in Local Press",
      date: "Aug 8, 2025",
      description:
        "The recent skill development workshop organized by CSRI gained recognition for its impact on empowering women in rural communities.",
      img: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-444089.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "News",
    },

    // 🤝 EVENTS
    {
      title: "Community Health Awareness Camp",
      date: "Nov 15, 2025",
      description:
        "Join our health camp offering free medical check-ups, nutrition counseling, and awareness sessions on preventive healthcare.",
      img: "https://img.freepik.com/free-photo/man-working-as-paediatrician_23-2151696259.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Events",
    },
    {
      title: "Youth Volunteering Day",
      date: "Dec 2, 2025",
      description:
        "A nationwide volunteering day inviting youth to participate in social clean-ups, mentoring, and awareness programs.",
      img: "https://img.freepik.com/premium-photo/portrait-friends-sitting-land_1048944-4264349.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Events",
    },
    {
      title: "Inclusive Education Forum 2025",
      date: "Dec 18, 2025",
      description:
        "Educators, NGOs, and policymakers come together to discuss inclusive learning strategies for underprivileged children.",
      img: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-453738.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Events",
    },

    // 🌱 UPCOMING EVENTS
    {
      title: "Green Future Summit 2026",
      date: "Jan 22, 2026",
      description:
        "An annual summit focused on climate action, renewable energy, and sustainable urban living — featuring global thought leaders.",
      img: "https://img.freepik.com/premium-photo/young-indian-agronomist-banker-showing-some-information-farmer-smartphone-agriculture-field_75648-7034.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Upcoming",
    },
    {
      title: "Rural Skill Development Program Launch",
      date: "Feb 10, 2026",
      description:
        "CSRI will begin a six-month initiative providing hands-on vocational training to rural youth in digital literacy and entrepreneurship.",
      img: "https://img.freepik.com/premium-photo/young-indian-banker-discuss-with-farmer-home_75648-3099.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Upcoming",
    },
    {
      title: "International Day of Clean Energy Drive",
      date: "Mar 15, 2026",
      description:
        "A CSR-driven campaign encouraging clean energy adoption, solar power awareness, and energy-saving workshops.",
      img: "https://img.freepik.com/premium-photo/indian-child-running-playing-with-pinwheel_75648-1752.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
      type: "Upcoming",
    },
  ];



  return (
    <div id="aboutus-section" className="relative px-4 sm:px-6 lg:px-8 bg-lightgrey">
      <div className="mx-auto max-w-7xl relative overflow-hidden px-6 lg:px-12 py-14">

        {/* Decorative Dots */}
        <Image
          src="/images/aboutus/dots.svg"
          width={120}
          height={120}
          alt="decorative dots"
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "-3rem",
            opacity: 0.3,
            color: "blue",
          }}
        />

        {/* Logo */}
        <motion.img
          src="https://res.cloudinary.com/dscqejyxy/image/upload/v1758956481/SONA-LALBAGH-PLANTATION-Final-pdf-01_qmgbg6.png"
          alt="Sona Group Logo"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-16 w-auto mb-4 mx-auto"
        />

        {/* Section Headings */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-blue text-sm font-medium tracking-widest uppercase"
        >
          Sona Group of Institutions
        </motion.h3>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4f4e50ff]  mt-3"
        >
          Inspiring Generations
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg sm:text-xl text-darkpurple mt-4 max-w-3xl mx-auto text-justify"
        >
          <a
            href="https://www.sonatech.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600  hover:text-blue-800  cursor-pointer"
          >
            Sona College of Technology
          </a>, part of the prestigious Sona Group of Institutions, is a premier technical institute dedicated to delivering high-quality education in engineering and technology. With the support of 23 cutting-edge Research & Development Centers spanning a wide range of scientific domains, Sona has emerged as a nucleus of academic excellence, innovation, and transformative research.
        </motion.p>


        <div>
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 mt-12">
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                delay={i * 0.2}
              />
            ))}
          </div>




        </div>

        {/* Main Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 mt-14">
          {/* LEFT: About Cards (3/4 width) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6 h-full">
            {Aboutdata.map((item, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row bg-white overflow-hidden cursor-pointer rounded-xl shadow-md h-full"
                >
                  {/* Left: Image */}
                  <Image
                    src={item.imgSrc}
                    alt={item.heading}
                    width={250}
                    height={160}
                    className="w-full md:w-1/3 h-36 md:h-40 object-cover"
                  />

                  {/* Right: Content */}
                  <div className="relative group flex flex-col flex-grow p-4 md:p-5 md:w-2/3">
                    <span className="absolute inset-0 bg-gray-400 scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100"></span>

                    <div className="relative z-10 flex flex-col flex-grow">
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg font-semibold text-black mb-1"
                      >
                        {item.heading}
                      </motion.h4>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-[17px] text-black mb-3 transition-all ${isExpanded ? "" : "line-clamp-2"
                          }`}
                      >
                        {item.paragraph}
                      </motion.p>

                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : i)}
                        className="mt-auto text-sm font-semibold text-blue flex items-center gap-1"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                        <ChevronRightIcon width={14} height={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


          {/* RIGHT: News / Events / Upcoming */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4 h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Latest Updates</h3>

            {/* Tabs */}
            <div className="flex border-b border-gray-300">
              {["News", "Events", "Upcoming"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${activeTab === tab
                    ? "text-blue border-b-2 border-blue"
                    : "text-gray-600 hover:text-blue"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Scrollable List */}
            <div className="overflow-y-auto h-[400px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {EventsData.filter((item) => item.type === activeTab)
                .slice(0, 10)
                .map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white  shadow-md px-3 py-2 hover:shadow-lg transition-shadow flex gap-3 mb-3"
                  >
                    {/* Thumbnail */}
                    <Image
                      src={event.img}
                      alt={event.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />

                    {/* Details */}
                    <div className="flex flex-col justify-between">
                      <h4 className="text-sm font-semibold text-black">{event.title}</h4>
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <p className="text-xs text-gray-700 line-clamp-2">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

        </div>










        {/* Know More Button */}
        <div className="flex justify-center items-center pt-12">
          <Link href="/about">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium px-6">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                Know More
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10">Know More</span>
              </div>
            </button>
          </Link>
        </div>

      </div>
    </div>

  );
};

export default Aboutus;
