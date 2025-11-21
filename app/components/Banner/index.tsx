"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    tag: "CORPORATE SOCIAL RESPONSIBILITY",
    title: "Committed to making a positive impact.",
    button: "Join Us",
    href: "#join",
    img: "/images/banner/BANNER1.webp",
  },
  {
    tag: "COMMUNITY DEVELOPMENT",
    title: "Working together to empower local communities.",
    button: "Learn More",
    href: "/community",
    img: "/images/focus-area/Focus-Area-Women-Empowerment.webp",
  },
  {
    tag: "ENVIRONMENTAL CARE",
    title: "Protecting nature for a greener tomorrow.",
    button: "Get Involved",
    img: "/images/banner/BANNER2.webp",
  },
  {
    tag: "EDUCATION INITIATIVES",
    title: "Shaping bright futures through education.",
    button: "Join Us",
    href: "#join",
    img: "/images/banner/BANNER3.webp",
  },
];

const textVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -60, transition: { duration: 0.5 } },
};

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {({ isActive }) => (
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative w-full h-full flex items-center"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10 ">

                      <Image
                        src={slide.img}
                        alt={slide.title}
                        fill
                        className="object-cover object-center w-full h-full brightness-75"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/30 z-0"></div>
                    </div>

                    {/* Content */}
                    <div className="w-full px-6 sm:px-12">
                      <div className="max-w-7xl mx-auto flex flex-col space-y-4">
                        <motion.div variants={textVariant} className="space-y-4">
                          <button className="text-blue bg-lightblue text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-3xl tracking-wider transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white shadow-md">
                            {slide.tag}
                          </button>

                          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug drop-shadow-lg">
                            {slide.title}
                          </h1>
                          <button
                            onClick={() => {
                              if (slide.href) {
                                if (slide.href.startsWith("#")) {
                                  const section = document.querySelector(slide.href);
                                  if (section) section.scrollIntoView({ behavior: "smooth" });
                                } else {
                                  window.location.href = slide.href;
                                }
                              }
                            }}
                            className="mt-4 text-xs sm:text-sm md:text-base font-medium bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition self-start sm:self-start md:self-start"
                          >
                            {slide.button}
                          </button>


                        </motion.div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
