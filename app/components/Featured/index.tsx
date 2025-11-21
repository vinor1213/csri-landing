"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  { heading: "Jr. Technician Training (Smart Energy Meter)", imgSrc: "/images/on-going-training-projects/energy.webp" },
  { heading: "Tailoring Training (Basic & Advanced)", imgSrc: "/images/on-going-training-projects/tailoring.webp" },
  { heading: "Aari Work Skill Development", imgSrc: "/images/on-going-training-projects/aari.webp" },
  { heading: "Beauty Therapist Training Program", imgSrc: "/images/on-going-training-projects/beauty.webp" },
  { heading: "Saree Pre-Pleating & Draping Course", imgSrc: "/images/on-going-training-projects/saree.webp" },
];

// Import slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const Arrow = ({ direction, onClick }: { direction: "left" | "right"; onClick?: () => void }) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  return (
    <div
      className={`absolute top-1/2 ${direction === "left" ? "left-2" : "right-2"} -translate-y-1/2 z-20 bg-blue-600 text-white p-3 sm:p-4 rounded-full cursor-pointer shadow-lg`}
      onClick={onClick}
    >
      <Icon size={10} />
    </div>
  );
};

// Framer Motion Animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,          // ✅ Enable autoplay
      autoplaySpeed: 4000,
      speed: 500,
      nextArrow: <Arrow direction="right" />,
      prevArrow: <Arrow direction="left" />,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    };

    return (
      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center pb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4f4e50ff]">
              On-going Training Projects
            </h3>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {postData.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="px-2 sm:px-3"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="w-full h-64 sm:h-72 md:h-80 relative">
                    <Image
                      src={item.imgSrc}
                      alt={item.heading}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 flex-1 flex items-center justify-center">
                    <h4 className="text-lg sm:text-xl font-medium text-blue-500 text-center">
                      {item.heading}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
