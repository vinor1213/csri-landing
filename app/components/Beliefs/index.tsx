"use client";
import { motion } from "framer-motion";

const Beliefs = () => {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
      <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

        {/* COLUMN-1 - BELIEFS */}
        <motion.div 
          className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            OUR BELIEFS
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            Integrity <span className="text-grey">and community impact guide us.</span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            We believe in empowering communities and driving social change through consistent and meaningful efforts.
          </h5>
          <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Join Us
            </button>
          </div>
        </motion.div>

        {/* COLUMN-2 - INITIATIVES */}
        <motion.div 
          className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            OUR INITIATIVES
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">Implementing programs</span> that make a real difference.
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
            From education to health and sustainability, we create impactful initiatives that uplift communities and promote long-term growth.
          </h5>
          <div className="text-center sm:text-start">
            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Beliefs;
