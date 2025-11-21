"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// CAROUSEL DATA
interface DataType {
  title: string;
  description: string;
  imgSrc: string;
}

const partnerData: DataType[] = [
  {
    title: 'Corporate Partner',
    description: 'Supporting community programs with meaningful CSR contributions.',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    title: 'Government Agency',
    description: 'Collaborating on sustainable development and social initiatives.',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    title: 'Foundation Partner',
    description: 'Driving health, education, and environment programs.',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    title: 'Local Community Network',
    description: 'Connecting CSR projects directly to the people who benefit.',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    title: 'Skill Development Partner',
    description: 'Empowering youth and communities with training programs.',
    imgSrc: '/images/wework/avatar3.svg',
  },
];

// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2500,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 450, settings: { slidesToShow: 1 } },
  ],
};

export default class Partners extends Component {
  render() {
    return (
      <div id="partners-section" className=" py-8">

        {/* HEADER */}
        <motion.div
          className='mx-auto max-w-2xl lg:max-w-7xl text-center sm:py-4 lg:px-8'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl sm:text-5xl font-bold text-black my-2">Partner with CSRI</h3>
          <p className="text-xl text-gray-700 mt-4">
            Join hands with SONA CSRI for impactful CSR collaborations. Whether you’re a corporate, foundation, or government agency, we bring projects closer to the community.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <Slider {...settings} className="mt-10">
          {partnerData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className='bg-white m-3 py-14 text-center shadow-xl rounded-3xl relative'>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={182}
                  height={182}
                  className="inline-block m-auto rounded-full"
                />
                <h4 className='text-2xl font-bold pt-8'>{item.title}</h4>
                <p className='text-lg pt-2 px-5 opacity-70'>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>

      </div>
    );
  }
}
