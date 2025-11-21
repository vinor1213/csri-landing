"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import { MdStar, } from "react-icons/md";
import {
  FaInfoCircle,
  FaUsers,
  FaStar,
  FaEye,
  FaBullseye,
  FaClipboardList,
  FaUserShield,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn
} from "react-icons/fa";


type Profile = {
  id: number;
  name: string;
  role: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
};
// About tab sections
const aboutSections = [
  {
    content: `Sona College of Technology’s strength lies in its holistic approach to education—seamlessly blending knowledge creation, skill development, and value-based learning. The institution’s <strong>23 Research & Development</strong>  Centres are not just hubs of scientific inquiry, but also platforms where students, faculty, and industry collaborate to generate impactful solutions. These centres cover diverse domains such as Artificial Intelligence, <strong>Data Science, Robotics, Nano Materials, Biomedical Engineering, and Green Technologies,</strong> ensuring that students are exposed to the frontiers of global innovation`,
    image: "https://lh3.googleusercontent.com/p/AF1QipPo3gZK0GE_SqbTeCBolT7ehMGbMm0nabwsbVlt=s680-w680-h510-rw",
  },
  {
    content: `In line with India’s national vision for self-reliance and sustainability, Sona has been at the forefront of fostering research that addresses real-world challenges. Its pioneering initiatives in renewable energy harness solar, wind, and bio-based solutions, while its smart manufacturing projects integrate Industry 4.0 practices with traditional industries to enhance productivity and sustainability. Healthcare innovations emerging from Sona’s ecosystem have addressed affordability and accessibility, particularly for rural populations.`,
    image: "https://lh3.googleusercontent.com/p/AF1QipP02Bb5JMw4inHnLDH7mUNOxqhk8lbc7ycfVcqN=s680-w680-h510-rw",
  },
  {
    content: `The College’s collaborations with industry leaders, government agencies, and international universities ensure that its academic and research outcomes have global relevance while being locally impactful. With active student participation in funded research projects, innovation competitions, and entrepreneurial ventures, Sona cultivates a generation of problem-solvers who can adapt to the rapidly evolving demands of the<strong> 21st-century</strong> economy.`,
    image: "https://lh3.googleusercontent.com/p/AF1QipPlQPI-kinrudJN1x1nVo-MedUaFfxOqGrvwQ5s=s680-w680-h510-rw",
  },
  {
    content: `What sets Sona apart is its unwavering commitment to social responsibility. Through initiatives led by the Centre for Social Responsibility Initiatives (CSRI) and other outreach programs, the institution translates knowledge into community impact—empowering youth with vocational training, supporting rural schools with digital literacy, and designing sustainable livelihood programs for marginalized groups. This dual focus on technological advancement and societal transformation reinforces Sona’s belief that true education is measured not just in academic excellence but in the lives it touches and transforms.`,
    image: "https://lh3.googleusercontent.com/p/AF1QipPHex0KhNFtx0PlmNdpPO6GAGR_PSVVZ_SbpC5h=s680-w680-h510-rw",
  },
  {
    content: `Sona College of Technology thus stands as more than an academic institution—it is a living ecosystem of innovation, collaboration, and compassion, preparing future-ready leaders who combine professional expertise with ethical responsibility.`,
    image: "https://lh3.googleusercontent.com/p/AF1QipN4lxzHtxoHOpvU_QlVz5u3kj-bMyFwvSwJAHdt=s680-w680-h510-rw",
  },

];
const profiles = [
  {
    id: 1,
    name: "C. Valliappa",
    role: "Chairman – The Sona Institutions",
    image:
      "/images/team/valliappa-chairman-sona-gro.webp",

    bio: `<strong>C. Valliappa,</strong> Chairman of <strong>The Sona Group</strong>, is a pioneering industrialist and philanthropist whose vision has shaped industries and communities alike. Starting his journey in textiles, he quickly became a forerunner in technology and real estate, creating <strong>Sona Towers</strong> in Bengaluru - a landmark that hosted Texas Instruments and helped put India on the global IT map.
      
Under his leadership, The Sona Group has diversified into textiles, information technology, construction, healthcare, and education, while maintaining a strong reputation for innovation, integrity, and long-term impact.

C. Valliappa is equally distinguished for his commitment to social welfare and inclusive development. He has spearheaded initiatives that:
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>Empower youth through <strong>education, scholarships, and skill development</strong> programs.</li>
  <li>Advance <strong>women empowerment</strong> with vocational training, self-help group enterprises, and technology-driven opportunities.</li>
  <li>Support <strong>healthcare and community well-being</strong> with medical donations, vaccination drives, and food redistribution programs like <strong>Anadhanam.</strong></li>
  <li>Promote <strong>rural development</strong> through village adoption programs focusing on sanitation, schooling, and livelihoods.</li>
  <li>Harness <strong>technology for social good</strong>, ensuring innovation is directed toward solving real-world challenges.</li>
</ul>
Guided by his belief that <strong>industry and society thrive together,</strong> C. Valliappa continues to inspire transformative growth — building businesses of global relevance while nurturing sustainable communities.`,
  },
  {
    id: 2,
    name: "Chocko Valliappa",
    role: "Vice Chairman – The Sona Institutions",
    image:
      "/images/team/chocko-valliappa.webp",
    facebook: "https://www.facebook.com/Chockolite",
    twitter: "https://x.com/ChockoValliappa",
    instagram: "https://www.instagram.com/chockolite/?igsh=MTFlYTdkajhlam45aQ%3D%3D#",
    linkedin: "https://linkedin.com/in/vicechairman",
    bio: `<strong>Chocko Valliappa,</strong> Vice Chairman of <strong>The Sona Group,</strong> is an innovator, entrepreneur, and social advocate who has expanded the Group’s presence across <strong>technology, IT services, and education.</strong>  Under his leadership, the Group has nurtured startups, created global partnerships, and advanced industry-ready talent through its institutions.

Equally, he has been a strong force in advancing <strong>social responsibility and welfare.</strong> Guided by the vision that business growth must uplift communities, Chocko Valliappa has championed:
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Digital Literacy & Skilling for Youth</strong> – spearheading initiatives that equip underprivileged students and rural youth with IT and employability skills, bridging the gap between education and industry.</li>
  <li><strong>Scholarships & Education Equity</strong> – enabling hundreds of students from weaker sections to pursue higher education at Sona institutions through need-based scholarships and financial aid.</li>
  <li><strong>Valliappa Foundation’s Social Innovation Programs</strong> – driving projects in digital empowerment, rural entrepreneurship, and technology for inclusion.</li>
  <li><strong>Community Development</strong> – facilitating healthcare camps, rural outreach programs, and livelihood support for marginalized groups.</li>
</ul>
Through these measures, Chocko Valliappa has positioned himself not only as a technology and business leader but also as a champion of inclusive growth, ensuring that innovation benefits the commons and the deprived.`,
  },
  {
    id: 3,
    name: "Thyagu Valliappa",
    role: "Vice Chairman – The Sona Institutions",
    image:
      "/images/team/thyagu-valliappa.webp",
    facebook: "https://facebook.com/thyagu",
    twitter: "https://x.com/ThyaguValliappa",
    instagram: "https://www.instagram.com/accounts/login/?next=%2Fthyaags%2F&source=omni_redirect",
    linkedin: "https://linkedin.com/in/thyagu",
    bio: `<strong>Thyagu Valliappa,</strong> Vice Chairman of <strong>The Sona Group,</strong> upholds and expands the Group’s rich legacy in <strong> textiles, garments, infrastructure, and education,</strong> while spearheading new directions in innovation and technology. A forward-thinking industrialist, he has pioneered stretchable silk and mosquito-repellent fabrics, positioning India as a global leader in technical textiles.

Beyond his entrepreneurial achievements, Thyagu’s vision is deeply rooted in social responsibility and inclusive growth. His leadership reflects a rare blend of business excellence and social consciousness.
During his tenure as President of the Bangalore Chamber of Industry and Commerce (BCIC) (2016–17), he championed the integration of CSR with industry development. Under his guidance, BCIC launched women’s empowerment and skill-linked education initiatives, while also establishing an extended BCIC Centre at Sona College—a unique platform to foster industry-academia collaboration.
Thyagu continues to connect corporate ecosystems with community-driven development, focusing on education, skill development, and inclusion.

<strong>Key Social Milestones</strong>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Skill and Livelihood Promotion:</strong> –Fostered industry-chamber collaborations to enhance employability and entrepreneurship.</li>
  <li><strong>Institutionalized CSR</strong> – Embedded social responsibility within educational and corporate strategies, creating sustainable impact models.</li>
  <li><strong>Public Health Interventions</strong> – Led The Sona Group’s COVID-19 relief efforts—donating oxygen concentrators, thermal scanners, and PPE to hospitals and frontline workers.</li>
  <li><strong>Support to Vulnerable Communities</strong> –: Organized relief initiatives providing groceries and essentials to temple priests, daily-wage earners, and rural families during economic crises.</li>
  <li><strong>Empowerment through Education</strong> – : Guided Sona’s institutions to deliver industry-relevant, socially responsible, and accessible higher education.</li>
</ul>
`,
  },

  {
    id: 4,
    name: "Dr. S. R. R. Senthilkumar",
    role: "Principal",
    image:
      "/images/team/senthil-kumar.webp",

    instagram: "https://www.instagram.com/srr_senthilkumar?igsh=eHE3Ymw5MmlhZXVw",
    linkedin: "https://in.linkedin.com/in/dr-senthilkumar-s-r-r",
    bio: `<strong>Dr. S. R. R. Senthilkumar,</strong>exemplifies how academic leadership can drive both institutional excellence and social transformation. A distinguished academician and visionary educator, he has consistently championed the integration of skill-based learning, research, and community engagement within higher education. Under his stewardship, Sona has emerged as a catalyst for inclusive growth—bridging academia, industry, and society through impactful CSR and community outreach initiatives.

Dr. Senthilkumar’s commitment extends beyond campus boundaries. He actively supports programs that empower women, youth, and rural communities through education, entrepreneurship, and technology-driven skilling. His work reflects a belief that higher education institutions must serve as engines of social progress and catalysts for equitable development.

<strong>Key Social Milestones</strong>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Academic Social Responsibility</strong> –Strengthened Sona College’s role as an implementing agency for CSR initiatives, promoting education, skilling, and sustainable livelihoods.</li>
  <li><strong>Global Collaboration through EPICS</strong> – Advanced community problem-solving and student innovation under Purdue University’s global EPICS framework</li>
  <li><strong>Community-Centric Education</strong> – Led rural outreach projects integrating technical education with local development goals, ensuring inclusive access to knowledge and opportunity.</li>
  <li><strong>Sustainability and Innovation</strong> –: Encouraged eco-conscious campus practices, climate education, and renewable energy adoption within academic and community programs.</li>
  <li><strong>Women Empowerment and Skill Development</strong> – :: Launched initiatives that train and uplift women artisans, students, and entrepreneurs, fostering self-reliance and confidence.</li>
   <li><strong>Collaborative Governance</strong> – :Fostered partnerships with government bodies, industries, and NGOs to design impactful community programs aligned with Sustainable Development Goals (SDGs).</li>
</ul>
`,
  },

];
// Community Development sections
const communitySections = [
  {
    content: `Sona College of Technology has always believed that the true purpose of higher education lies in creating value for society. Its journey of community engagement began as early as the 1990s, when the institution initiated programs to extend the benefits of vocational training to underserved communities. Building on this vision, the Centre for Social Responsibility Initiatives (CSRI) was established in 2007 as a dedicated platform to design, implement, and scale structured interventions in community development and skill advancement.`,
    image: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-431563.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    content: `Since its inception, CSRI has empowered communities through a wide range of initiatives. More than <strong>4,500 candidates</strong> have been certified under its skill development programs, equipping them with employable skills aligned with industry needs. In addition, nearly 1,000 beneficiaries have gained access to preventive and curative healthcare services through Sona’s targeted health initiatives spanning medical camps, maternal and child health programs, and lifestyle disease awareness campaigns.`,
    image: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-464358.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80",
  },
  {
    content: `What distinguishes CSRI is its dual expertise working with grassroots communities while also serving as a trusted partner for corporate companies implementing their CSR projects. With a strong foundation in research, project management, and monitoring & evaluation, CSRI has successfully collaborated with corporates across diverse sectors, ensuring that their CSR funds are translated into measurable social impact. From designing sustainable livelihood models and rural skilling programs to conducting social audits, impact assessments, and health awareness campaigns, CSRI aligns corporate objectives with community priorities to create win–win outcomes.`,
    image: "https://img.freepik.com/premium-photo/teachers-exchanging-tips-effective-classroom-ma_960396-522063.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80",
  },
  {
    content: `CSRI’s approach is collaborative and participatory. By partnering with local bodies, self-help groups, educational institutions, civil society organizations, and corporate CSR wings, the Centre co-creates sustainable solutions that address grassroots challenges. Its initiatives extend beyond conventional training to encompass livelihood empowerment, women-centric programs, health awareness campaigns, digital literacy, and community-driven innovations.`,
    image: "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-434472.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80",
  },
  {
    content: `Through this integrated approach, CSRI bridges the gap between cutting-edge research, corporate responsibility, and community well-being. Its ability to transform academic expertise into scalable, socially relevant projects ensures that Sona College of Technology stands not just as an academic leader, but as a catalyst for inclusive growth and sustainable development.`,
    image: "https://img.freepik.com/premium-photo/school-field-trip-dedicated-tree-plantation-where-student-planting-tree-their-school-ground-teacher_1326686-7677.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80",
  },
];

const tabs = [
  { id: "about", label: "About Us", icon: <FaInfoCircle /> },
  { id: "leadership", label: "Leadership  Profile", icon: <FaUsers /> },
  { id: "community", label: "Community Development", icon: <FaUsers /> },
  { id: "vision", label: "Vision", icon: <FaEye /> },
  { id: "mission", label: "Mission", icon: <FaBullseye /> },
  { id: "objectives", label: "Objectives", icon: <FaClipboardList /> },
 
];

const tabContents: any = {
  vision: {
    image: "https://img.freepik.com/premium-photo/inspiring-collage-university-students-headshots-arranged-spiral-formation-against-back_997534-27461.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    content: `	Empower youth and women through education, skills, and sustainable livelihoods in collaboration with corporates, government, and communities.
Build a Skill & Livelihood Hub with expert-led, multi-sectoral training
 	Lead community-driven, tech-enabled development via CSR & donor initiatives.`,
  },
  mission: {
    image: "/images/about/Our-Mission-Background.webp",
    content: `	Deliver quality education and industry-driven skill development to enable employability and entrepreneurship.
 	Deliver industry-aligned, demand-driven skilling & entrepreneurship support.
	Implement tech-enabled livelihood solutions to improve rural quality of life.
	Address eco-friendly, sustainable practices and healthcare in all programs
	Strengthen CSR & donor partnerships for high-impact, scalable initiatives`,
  },
  objectives: {
    image: "https://img.freepik.com/free-photo/people-financial-results-analyzing-statistics_1150-1642.jpg?ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80",
    content: `	Offer market-relevant, localized skills for underserved youth.
Use technology to enhance productivity, healthcare, environmental and essential services.
	Build leadership & social innovation through sustainability-focused training
Promote healthcare awareness via grassroots outreach & capacity-building.`,
  },
};

const AboutUssection = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/abstract-image-business-people-silhouette-glass-window_53876-138392.jpg"
        title={`About Us${activeTabData && activeTabData.label !== "About Us"
          ? ` - ${activeTabData.label}`
          : ""
          }`}


        subtitle="The Vision and Values of the Sona Group"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: activeTabData ? activeTabData.label : "About Us", href: "/about" },

        ]}
      />

      <section className="bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Content */}
            <div className="flex-1 lg:w-3/4">
              <AnimatePresence mode="wait">
                {activeTab === "about" ? (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {aboutSections.map((section, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-stretch gap-10  ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                          }`}
                      >
                        <div className="flex-1 flex items-center text-justify  leading-relaxed">
                          <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
                        </div>
                        <div className="flex-1 h-full">
                          <img
                            src={section.image}
                            alt={`about-${idx}`}
                            className="shadow-xl w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : activeTab === "community" ? (
                  <motion.div
                    key="community"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    {communitySections.map((section, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-stretch gap-8  transition-shadow duration-300 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                          }`}
                      >

                        {/* IMAGE BLOCK */}
                        <div className="flex-1 w-full md:w-1/2 h-full min-h-[260px] md:min-h-[320px] overflow-hidden">
                          <img
                            src={section.image}
                            alt={`community-${idx}`}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* TEXT BLOCK */}
                        <div className="flex-1 w-full md:w-1/2 h-full flex items-center text-gray-700">
                          <p
                            className="leading-relaxed text-justify"
                            dangerouslySetInnerHTML={{ __html: section.content }}
                          ></p>
                        </div>

                      </div>
                    ))}

                  </motion.div>
                ) : activeTab === "leadership" ? (
                  <motion.div
                    key="leadership"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    <section className="mb-16">
                      <p className="text-sm font-medium tracking-wider text-gray-600 dark:text-gray-300 uppercase">
                        Our Leadership
                      </p>
                      <h1 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white mt-2 ">
                        Guiding the Vision
                      </h1>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {profiles.map((profile: any) => (
                          <motion.header
                            key={profile.id}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedProfile(profile)}
                            className="cursor-pointer px-2 py-6 mt-12 flex flex-col justify-center items-center text-center border border-gray-300 dark:border-gray-700  shadow-md bg-white dark:bg-gray-800 transition hover:shadow-xl"
                          >
                            <img
                              className="inline-flex object-cover border-4 border-blue-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-blue-600/100 bg-blue-50 text-blue-600 !h-48 !w-48"
                              src={profile.image}
                              alt={profile.name}
                            />
                            <h1 className="text-xl font-semibold text-gray-700 dark:text-white mt-4">
                              {profile.name}
                            </h1>
                            <p className="text-gray-500">{profile.role}</p>

                            <div className="flex space-x-4 mt-3 text-gray-500 justify-center">
                              {profile.facebook ? (
                                <a
                                  href={profile.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Facebook"
                                >
                                  <FaFacebookF className="hover:text-blue-600 transition-colors" />
                                </a>
                              ) : null}

                              {profile.twitter ? (
                                <a
                                  href={profile.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Twitter"
                                >
                                  <FaTwitter className="hover:text-blue-400 transition-colors" />
                                </a>
                              ) : null}


                              {profile.instagram ? (
                                <a
                                  href={profile.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Instagram"
                                >
                                  <FaInstagram className="hover:text-pink-500 transition-colors" />
                                </a>
                              ) : null}

                              {profile.linkedin ? (
                                <a
                                  href={profile.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="LinkedIn"
                                >
                                  <FaLinkedinIn className="hover:text-blue-700 transition-colors" />
                                </a>
                              ) : null}
                            </div>

                          </motion.header>
                        ))}
                      </div>
                    </section>

                  </motion.div>
                ) : (
                  Object.keys(tabContents)
                    .filter((key) => key === activeTab)
                    .map((key) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col md:flex-row items-stretch gap-10 my-4 min-h-[380px]"
                      >
                        {/* LEFT: CONTENT */}
                        <div className="flex-1 leading-relaxed text-justify h-full">
                          <ul className="space-y-3">
                            {tabContents[key].content
                              .split("\n")
                              .filter((item: any) => item.trim() !== "")
                              .map((item: any, idx: any) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <MdStar className="mt-1 text-blue-500/70 flex-shrink-0" />
                                  <span>{item.replace(/^\d+\.\s*/, "")}</span>
                                </li>
                              ))}
                          </ul>
                        </div>

                        {/* RIGHT: IMAGE */}
                        <div className="flex-1 h-full">
                          <img
                            src={tabContents[key].image}
                            alt={key}
                            className=" w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                    ))
                )}

              </AnimatePresence>
            </div>


            {/* Right: Tabs */}
            <div className="lg:w-1/4 flex flex-col gap-4 self-start sticky top-20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 p-3 font-semibold rounded-lg transition-colors ${activeTab === tab.id
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        <AnimatePresence>
          {selectedProfile && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white transition text-2xl font-bold"
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Profile Header */}
                <div className="text-center mb-6">
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedProfile.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {selectedProfile.role}
                  </p>
                </div>

                {/* Biography */}
                <div
                  className="text-gray-700 dark:text-gray-300 text-justify text-base leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: selectedProfile.bio }}
                />

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-6">
                  {/* Your Icons */}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </>
  );
};

export default AboutUssection;
