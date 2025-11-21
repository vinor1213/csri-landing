"use client";

import { motion } from "framer-motion";


const Digital = () => {
  return (
    <>
      <div id="join" className="overflow-hidden ">
        <div className="px-4 py-16 mx-auto max-w-7xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">

            {/* LEFT COLUMN - OUR MISSION */}
            <motion.div
              className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-left">
                OUR MISSION
              </h3>
              <h2 className="max-w-lg mb-8 text-4xl sm:text-6xl font-bold leading-snug text-white text-center lg:text-left">
                Driving community growth <br />
                through impactful <br />
                social initiatives.
              </h2>
              <p className="max-w-xl mb-6 text-base text-white md:text-lg text-center lg:text-left">
                Join us in making a difference — empower communities, support education,
                and drive sustainability with every effort you contribute.
              </p>
            </motion.div>

            {/* RIGHT COLUMN - FORM */}
            <motion.div
              className="w-full max-w-xl xl:px-8 xl:w-5/12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-white lg:w-32 lg:-mr-16 sm:block"
                >
                  <defs>
                    <pattern
                      id="pattern-form"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#pattern-form)" width="52" height="24" />
                </svg>

                {/* Form */}
                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Join Our Efforts
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="name" className="inline-block mb-1 font-medium">
                        Name
                      </label>
                      <input
                        placeholder="Enter your name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-btnblue focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="email" className="inline-block mb-1 font-medium">
                        E-mail
                      </label>
                      <input
                        placeholder="Enter your email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-btnblue focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="contact" className="inline-block mb-1 font-medium">
                        Contact No
                      </label>
                      <input
                        placeholder="Enter your contact number"
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-btnblue focus:outline-none focus:shadow-outline"
                        id="contact"
                        name="contact"
                      />
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">


                      <button type="submit" className="group  w-full relative h-12  overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600"><span className="relative "> Subscribe</span><div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]"><div className="relative h-full w-8 bg-white/30"></div></div></button>



                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Digital;
