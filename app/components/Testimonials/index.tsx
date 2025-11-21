"use client";
import Slider from "react-slick";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface VideoType {
  name: string;
  profession: string;
  videoId: string;
}

const videoData: VideoType[] = [
  { name: "Priyanka S.", profession: "House Keeping", videoId: "UPhc-xEvlE8" },
  { name: "Navaneethan ", profession: "Data Entry Operator", videoId: "HwDG2Ky20pg" },
  { name: "Keerthana ", profession: "Retail Sales Associate", videoId: "2TVg5ovdCCQ" },
  { name: "Veenaikarasi  ", profession: "Tailoring", videoId: "LSAlN_UcQ7A" },
  { name: "Harini ", profession: "Beauty Therapist", videoId: "rIptbAYcDHw" },
  { name: "Sneha M.", profession: "Orientation on Women Technology", videoId: "5RgjCFhmI5g" },
];

export default function VideoTestimonials() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="testimonials" className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto mb-8 space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-[#4f4e50ff] sm:text-4xl font-bold">
            &ldquo;What our community is saying&rdquo;
          </h2>
          <p className="dark:text-gray-600 text-lg sm:text-xl text-justify">
            Watch what our alumni, volunteers, and partners are saying about CSRI. These video testimonials showcase real experiences and the impact our programs have on communities.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {videoData.map((item, i) => (
            <motion.div
              key={i}
              className="p-2 sm:p-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setOpenVideo(item.videoId)}
              >
                {/* Dynamic YouTube thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-white text-red-600 rounded-full p-3 flex items-center justify-center">
                    <FaPlay className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Info */}
                <div className="mt-2 text-center px-1 sm:px-0">
                  <p className="font-semibold text-xs sm:text-sm">{item.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{item.profession}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-white text-3xl sm:text-4xl z-50"
              onClick={() => setOpenVideo(null)}
            >
              ✕
            </button>
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
