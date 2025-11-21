


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
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


const profilesx = [

  {
    id: 5,
    name: "Prithvi Krishna",
    role: "Chief Advisor – CSRI",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-suitable-social-media-profiles-icons-screensavers-as-template-business-concept_719432-2753.jpg",
    facebook: "https://facebook.com/prithvikrishna",
    twitter: "https://twitter.com/prithvikrishna",
    instagram: "https://instagram.com/prithvikrishna",
    linkedin: "https://linkedin.com/in/prithvikrishna",
    bio: `Prithvi Krishna brings over 17 years of experience in strategic leadership, corporate governance, and community development. As the Secretary of the Bangalore Chamber of Industry and Commerce (BCIC) and former Deputy Secretary General, he has successfully steered initiatives that bridge industry growth with societal impact.

At CSRI, he serves as the <strong>Chief Advisor,</strong> guiding the organization in designing and implementing <strong> sustainable, high-impact CSR programs </strong> across Karnataka. His expertise lies in aligning corporate objectives with social welfare, fostering inclusive growth, and promoting initiatives that uplift marginalized communities.

Key Contributions and Focus Areas:

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>Strategic CSR Leadership</strong> – advises on planning and executing CSR projects addressing education, healthcare, sustainability, and women’s empowerment.</li>
  <li><strong>Recognition & Impact</strong> – spearheaded programs like the <strong>CSR Impact Awards</strong>, acknowledging organizations driving meaningful social change.</li>
  <li><strong>Community Engagement</strong> – advocates for projects that create tangible benefits for underprivileged communities.</li>
  <li><strong>Collaborative Networks</strong> – leverages networks across government, industry, and NGOs to maximize reach and impact.</li>
  <li><strong>Mentorship & Advisory</strong> – provides guidance to CSR teams and corporate sponsors for effective CSR outcomes.</li>
</ul>
Under his guidance, CSRI continues to transform corporate social responsibility into<strong> tangible social progress</strong>, empowering communities and fostering sustainable development.`,
  },
  {
    id: 1,
    name: "Nantha Kumar N",
    role: "Manager – CSRI ",
    image: "https://img.freepik.com/premium-vector/vector-flat-suitable-social-media-profiles-icons-screensavers-as-template-business-concept_719432-2753.jpg",
    facebook: "https://facebook.com/manager",
    twitter: "https://twitter.com/manager",
    instagram: "https://instagram.com/manager",
    linkedin: "https://linkedin.com/in/manager",
    bio: `<strong>Nantha Kumar N,</strong> Manager with over 15 years of experience in <strong>Corporate Social Responsibility</strong> and community engagement, is a dedicated professional committed to creating impactful programs for marginalized communities. His work spans child and youth empowerment, livelihood promotion, healthcare accessibility, volunteer engagement, and capacity building.

Nantha has successfully managed large-scale CSR initiatives with organizations such as <strong>HDFC Life, Smile Foundation, and CFCA</strong> (an international NGO), designing sustainable programs in health, education, disaster relief, and livelihoods. He has also contributed as a freelance trainer and consultant, mentoring NGO leaders and delivering training in leadership, financial literacy, and soft skills.

As a Manager, he excels in <strong>program management, stakeholder relations, statutory compliance, and MIS reporting</strong>, leading to the formation of community groups, enhanced youth employment outcomes, and stronger partnerships with corporates, government bodies, and NGOs.

Nantha is deeply committed to healthcare outreach, cultural programs, and the conservation of <strong>Tamil folklore art and traditions</strong>, blending social responsibility with cultural preservation. He believes in empowering people through knowledge, skills, and opportunities, ensuring that every initiative delivers measurable outcomes and creates lasting change.

His areas of expertise include:
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>CSR & Community Engagement</strong></li>
  <li><strong>Healthcare Accessibility</strong></li>
  <li><strong>Rural Development & Sustainable Livelihoods</strong></li>
  <li><strong>Tamil Folklore Art and Traditions</strong></li>
</ul>
`
  },
  {
    id: 2,
    name: "Prem M",
    role: "Executive – CSRI",
    image: "/images/team/prem.webp",
    facebook: "https://facebook.com/executive",
    twitter: "https://twitter.com/executive",
    instagram: "https://instagram.com/executive",
    linkedin: "https://linkedin.com/in/executive",
    bio: `<strong>Prem M,</strong> Executive at <strong>CSRI</strong>, is an accomplished professional with extensive experience in social initiatives, corporate social responsibility, and entrepreneurial ventures. He drives impactful projects aimed at sustainable development, community empowerment, and skill-building for marginalized groups.

Prem has a diverse professional background, including coordinating CSR projects, business development consultancy, and founding entrepreneurial initiatives. He has also actively contributed to research on social development, rural livelihoods, and environmental sustainability, presenting papers at national and international conferences. Prem's areas of expertise include:

Prem's areas of expertise include:
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>CSR & Community Engagement</strong></li>
  <li><strong>Project Coordination & Business Development</strong></li>
  <li><strong>Climate Change and Sustainability Advocacy</strong></li>
  <li><strong>Rural Development, Agro-Tourism & Sustainable Livelihoods</strong></li>
  <li><strong>Research & Social Science Publications</strong></li>
</ul>
`
  },

  {
    id: 3,
    name: "S. Jai Soorya",
    role: "Coordinator – CSRI",
    image: "/images/team/jaisurya.webp",
    facebook: "https://facebook.com/coordinator",
    twitter: "https://twitter.com/coordinator",
    instagram: "https://instagram.com/coordinator",
    linkedin: "https://linkedin.com/in/coordinator",
    bio: `<strong>S. Jai Soorya,</strong> Coordinator at <strong>CSRI</strong>, is a committed professional with a strong background in academics, research support, and social responsibility initiatives. Holding a <strong>Masters’ degree in English Literature</strong>, he has coordinated academicians and supported research, while engaging the community through his passion for freestyle dance.

With over six years of experience at <strong>Jawaharlal Nehru University, New Delhi</strong>, Jai Soorya contributed to technical and research support, assisting faculty and students in data analysis, lab management, and academic coordination. Currently, he serves at the <strong>Centre for Social Responsibility Initiatives (CSRI)</strong> at Sona College of Technology, Salem, supporting CSR projects, innovation programs, and community engagement activities.

His expertise lies in <strong>community outreach, cultural conservation, and promotion of freestyle dance</strong>, through which he actively connects with communities. Jai Soorya has presented papers at international conferences, serves as an <strong>MoE IIC Innovation Ambassador</strong>, and actively participates in cultural programs, balancing his passion for academics, innovation, and the arts.

Areas of expertise:
<ul style="list-style-type: disc; padding-left: 20px;">
  <li><strong>CSR & Community Engagement</strong></li>
  <li><strong>Project Coordination</strong></li>
  <li><strong>Innovation and Entrepreneur Development</strong></li>
</ul>
`
  },

  {
    id: 4,
    name: "Mala",
    role: "Mobilizer – CSRI",
    image: "https://img.freepik.com/premium-vector/vector-flat-suitable-social-media-profiles-icons-screensavers-as-template-business-concept_719432-2753.jpg",
    facebook: "https://facebook.com/mobilizer",
    twitter: "https://twitter.com/mobilizer",
    instagram: "https://instagram.com/mobilizer",
    linkedin: "https://linkedin.com/in/mobilizer",
    bio: `<strong>Mala,</strong> Mobilizer at <strong>CSRI, Sona College of Technology</strong>, brings over 15 years of experience in office assistance and community engagement. Starting her career as an Office Assistant, she has grown into a key role connecting communities with skill development and training programs.

Mala excels at <strong>building trust, motivating participation, and coordinating</strong> smoothly between beneficiaries and program teams. She actively supports outreach efforts that empower individuals, particularly women and underprivileged groups, to access new learning and livelihood opportunities, making a lasting impact in the communities she serves.`
  },



];

const Teammanage = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <ReuseBanner
        image="/images/focus-area/Join-CSRI.webp"
        title="Team"
        subtitle="Guiding the Vision for Impactful Change"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
          { label: "" },
        ]}
      />

      {/* ✅ Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Team Section */}
        <section >
          <p className="text-sm font-medium tracking-wider text-gray-600 dark:text-gray-300 uppercase">
            Team Members
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mt-2 mb-8">
            The People Behind Execution
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">


            {profilesx.map((profile: any) => (
              <div
                key={profile.id}
                className="max-w-sm bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="border-b px-2 py-6">
                  <div className="text-center">
                    <img
                      className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto"
                      src={profile.image}
                      alt={profile.name}
                    />
                    <div className="py-2">
                      <h1 className="text-xl font-semibold text-gray-700 dark:text-white mt-4">
                        {profile.name}
                      </h1>
                      <p className="text-gray-400 dark:text-gray-300 text-sm mt-1">
                        {profile.role}
                      </p>
                    </div>
                  </div>



                  <div className="flex gap-2 px-2">
                    <button
                      onClick={() => setSelectedProfile(profile)}
                      className="group relative inline-flex w-full items-center justify-start overflow-hidden rounded-xl bg-blue-500 px-8 py-2 font-medium transition-all"
                    >
                      {/* Top-right animated shape */}
                      <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-blue-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
                      </span>

                      {/* Sliding background effect */}
                      <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-blue-600 transition-all delay-200 duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"></span>

                      {/* Button text */}
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        View
                      </span>
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </section>
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

      </div>
    </div>
  );
};

export default Teammanage;
