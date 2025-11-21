"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CSRPartnerLogos from "../logoz";

const CSRITeam = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-white">
      <div
        className="
          mx-auto max-w-7xl py-14 px-4  
          flex flex-col lg:flex-row 
          items-stretch
          gap-12
        "
      >
        {/* LEFT: FULL-HEIGHT Floating Image */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            y: { repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" },
          }}
          className="flex-1 flex"
        >
          {/* Maintain Equal Height using relative wrapper */}
          <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
            <Image
              src="/images/home/Our-Team-Believes-in-Empowering-Communities.webp"
              alt="CSRI Team at Work"
              fill
              className="
                object-cover 
                rounded-xl 
                shadow-lg
              "
            />
          </div>
        </motion.div>

        {/* RIGHT: Text + Partner Logos */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex-1 
            flex flex-col 
            justify-center 
            text-center lg:text-left 
           min-h-[300px] lg:min-h-[400px]
          "
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug text-[#4f4e50ff]">
            Our Team Believes in Empowering Communities
            for Sustainable Impact
          </h2>
          <h3 className="text-2xl font-medium pt-8 text-gray-600">
            Driving social change through meaningful initiatives and committed leadership.
          </h3>
          <h3 className="text-2xl font-medium pt-8 text-gray-600">
            We combine academic strength and community engagement to ensure your CSR funds create long-term, visible impact.
          </h3>

          <div className="pt-8">
            <CSRPartnerLogos />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CSRITeam;
