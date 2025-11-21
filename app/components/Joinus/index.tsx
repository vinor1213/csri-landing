"use client";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 ">
        <div className=" overflow-hidden ">
          <div className="grid md:grid-cols-2">
            {/* Left Section */}
            <motion.aside
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-center p-6 sm:p-10 space-y-6 text-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Join CSRI
              </h2>

              <p className="text-gray-800 md:text-base leading-relaxed">
                Be a part of our community and drive real change. <br />
                Join CSRI initiatives to mentor youth, promote skill development,
                and contribute to sustainable community programs.
              </p>

              {/* Form */}
              <form className="space-y-4 w-full">
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                  <input
                    type="text"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Your name"
                    autoComplete="off"
                  />
                  <input
                    type="email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Your email"
                    autoComplete="off"
                  />
                </div>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your contact number"
                  autoComplete="off"
                  required
                />

                
                <button   type="submit" className="group relative h-12  overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600"><span className="relative font-bold"> Join CSRI!</span><div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]"><div className="relative h-full w-8 bg-white/30"></div></div></button>
              </form>
            </motion.aside>

            {/* Right Section with Image */}
            <motion.aside
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden md:block relative"
            >
              <img
                className="w-full h-full object-cover object-center"
                src="/images/focus-area/Join-CSRI.webp"
                alt="CSRI community"
              />
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
