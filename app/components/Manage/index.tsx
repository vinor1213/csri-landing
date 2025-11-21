"use client";
import { motion } from "framer-motion";

const leadershipData = [
  { title: "Chairman", desc: "Provides strategic vision and overall guidance to the organization." },
  { title: "Vice-Chairman", desc: "Supports leadership in operational and academic initiatives." },
  { title: "Principal", desc: "Oversees institutional excellence and program development." },
  { title: "Advisory Board", desc: "Provides expert guidance for research, projects, and community outreach." },
];

const teamData = [
  { title: "Manager", desc: "Coordinates daily operations and ensures smooth team management." },
  { title: "Executives", desc: "Handles projects, programs, and stakeholder communication." },
  { title: "Coordinators", desc: "Supports on-ground project execution and reporting." },
];

const objectives = [
  "Enable community enterprises in sustainable sectors such as agriculture, renewable energy, and rural services.",
  "Integrate appropriate technologies to enhance productivity, healthcare, and access to essential services in rural and peri-urban areas.",
  "Provide sustainability-focused training to build leadership skills and foster social innovation among youth, women, and underserved communities.",
  "Raise healthcare awareness through grassroots outreach and capacity-building programs.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Manage = () => {
  return (
    <div id="team-section" className="bg-gray-100 text-gray-800">
      {/* Leadership Section */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Leadership
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipData.map((leader, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-bold text-lg sm:text-xl mb-2">{leader.title}</h3>
              <p className="text-gray-600">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Team Members
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h4 className="font-bold text-lg mb-2">{member.title}</h4>
              <p className="text-gray-600">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="py-10 px-6 bg-gray-200">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Objectives
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {objectives.map((obj, idx) => (
            <motion.p
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-4 text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              {idx + 1}. {obj}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-10 px-6 bg-gray-100">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Engage as an Alumnus
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4 text-center">
          {[
            "As a valued alumnus, you remain a vital part of our legacy of excellence and social impact. We invite you to reconnect, contribute, and collaborate through the Centre for Social Responsibility Initiatives (CSRI) to create meaningful change in underprivileged communities.",
            "Your expertise, experience, and network can make a real difference. Whether mentoring youth, supporting skill-development programs, funding social innovation, or contributing to outreach initiatives, you can help shape a sustainable and inclusive future.",
          ].map((text, idx) => (
            <motion.p
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Manage;
