"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";

interface ProjectDataType {
  title: string;
  imgSrc: string;
}

interface ProgramDataType {
  program: string;
  projects: ProjectDataType[];
}

// Sample data
const programData: ProgramDataType[] = [
  {
    program: "Agriculture",
    projects: [
      { title: "Agriculture 1", imgSrc: "/images/gallery/agriculture/agriculture-1.webp" },
      { title: "Agriculture 2", imgSrc: "/images/gallery/agriculture/agriculture-2.webp" },
      { title: "Agriculture 3", imgSrc: "/images/gallery/agriculture/agriculture-3.webp" },
      { title: "Agriculture 4", imgSrc: "/images/gallery/agriculture/agriculture-4.webp" },
      { title: "Agriculture 5", imgSrc: "/images/gallery/agriculture/agriculture-5.webp" },
      { title: "Agriculture 6", imgSrc: "/images/gallery/agriculture/agriculture-6.webp" },
      { title: "Agriculture 7", imgSrc: "/images/gallery/agriculture/agriculture-7.webp" },
      { title: "Agriculture 8", imgSrc: "/images/gallery/agriculture/agriculture-8.webp" },
      { title: "Agriculture 9", imgSrc: "/images/gallery/agriculture/agriculture-9.webp" },
      { title: "Agriculture 10", imgSrc: "/images/gallery/agriculture/agriculture-10.webp" },
      { title: "Agriculture 11", imgSrc: "/images/gallery/agriculture/agriculture-11.webp" },
      { title: "Agriculture 12", imgSrc: "/images/gallery/agriculture/agriculture-12.webp" },
      { title: "Agriculture 13", imgSrc: "/images/gallery/agriculture/agriculture-13.webp" },
      { title: "Agriculture 14", imgSrc: "/images/gallery/agriculture/agriculture-14.webp" },
      { title: "Agriculture 15", imgSrc: "/images/gallery/agriculture/agriculture-15.webp" },
      { title: "Agriculture 16", imgSrc: "/images/gallery/agriculture/agriculture-16.webp" },
      { title: "Agriculture 17", imgSrc: "/images/gallery/agriculture/agriculture-17.webp" },
      { title: "Agriculture 18", imgSrc: "/images/gallery/agriculture/agriculture-18.webp" },
      { title: "Agriculture 19", imgSrc: "/images/gallery/agriculture/agriculture-19.webp" },
      { title: "Agriculture 20", imgSrc: "/images/gallery/agriculture/agriculture-20.webp" },
      { title: "Agriculture 21", imgSrc: "/images/gallery/agriculture/agriculture-21.webp" },
      { title: "Agriculture 22", imgSrc: "/images/gallery/agriculture/agriculture-22.webp" },
      { title: "Agriculture 23", imgSrc: "/images/gallery/agriculture/agriculture-23.webp" },
      { title: "Agriculture 24", imgSrc: "/images/gallery/agriculture/agriculture-24.webp" },
      { title: "Agriculture 25", imgSrc: "/images/gallery/agriculture/agriculture-25.webp" },
      { title: "Agriculture 26", imgSrc: "/images/gallery/agriculture/agriculture-26.webp" },
    ]


  },

  {
    program: "Charity",
    projects: [
      { title: "Charity 1", imgSrc: "/images/gallery/charity/Charity-1.webp" },
      { title: "Charity 2", imgSrc: "/images/gallery/charity/Charity-2.webp" },
      { title: "Charity 3", imgSrc: "/images/gallery/charity/Charity-3.webp" },
      { title: "Charity 4", imgSrc: "/images/gallery/charity/Charity-4.webp" },
      { title: "Charity 5", imgSrc: "/images/gallery/charity/Charity-5.webp" },

    ]

  },

  {
    program: "Computer Training",
    projects: [
      { title: "Computer Training 1", imgSrc: "/images/gallery/computer-training/computer-training-1.webp" },
      { title: "Computer Training 2", imgSrc: "/images/gallery/computer-training/computer-training-2.webp" },
      { title: "Computer Training 3", imgSrc: "/images/gallery/computer-training/computer-training-3.webp" },
      { title: "Computer Training 4", imgSrc: "/images/gallery/computer-training/computer-training-4.webp" },
      { title: "Computer Training 5", imgSrc: "/images/gallery/computer-training/computer-training-5.webp" },
      { title: "Computer Training 6", imgSrc: "/images/gallery/computer-training/computer-training-6.webp" },
      { title: "Computer Training 7", imgSrc: "/images/gallery/computer-training/computer-training-7.webp" },
      { title: "Computer Training 8", imgSrc: "/images/gallery/computer-training/computer-training-8.webp" },

    ]


  },

  {
    program: "Covid-19",
    projects: [
      { title: "Covid-19 1", imgSrc: "/images/gallery/covid-19/covid-19-1.webp" },
      { title: "Covid-19 2", imgSrc: "/images/gallery/covid-19/covid-19-2.webp" },
      { title: "Covid-19 3", imgSrc: "/images/gallery/covid-19/covid-19-3.webp" },
      { title: "Covid-19 4", imgSrc: "/images/gallery/covid-19/covid-19-4.webp" },
      { title: "Covid-19 5", imgSrc: "/images/gallery/covid-19/covid-19-5.webp" },
      { title: "Covid-19 6", imgSrc: "/images/gallery/covid-19/covid-19-6.webp" },
      { title: "Covid-19 7", imgSrc: "/images/gallery/covid-19/covid-19-7.webp" },
      { title: "Covid-19 8", imgSrc: "/images/gallery/covid-19/covid-19-8.webp" },
      { title: "Covid-19 9", imgSrc: "/images/gallery/covid-19/covid-19-9.webp" },
      { title: "Covid-19 10", imgSrc: "/images/gallery/covid-19/covid-19-10.webp" },
      { title: "Covid-19 11", imgSrc: "/images/gallery/covid-19/covid-19-11.webp" },
      { title: "Covid-19 12", imgSrc: "/images/gallery/covid-19/covid-19-12.webp" },
      { title: "Covid-19 13", imgSrc: "/images/gallery/covid-19/covid-19-13.webp" },
      { title: "Covid-19 14", imgSrc: "/images/gallery/covid-19/covid-19-14.webp" },
    ]



  },

  {
    program: "Education",
    projects: [
      { title: "Education 1", imgSrc: "/images/gallery/Education/Education-1.webp" },
      { title: "Education 2", imgSrc: "/images/gallery/Education/Education-2.webp" },
      { title: "Education 3", imgSrc: "/images/gallery/Education/Education-3.webp" },
      { title: "Education 4", imgSrc: "/images/gallery/Education/Education-4.webp" },
      { title: "Education 5", imgSrc: "/images/gallery/Education/Education-5.webp" },
      { title: "Education 6", imgSrc: "/images/gallery/Education/Education-6.webp" },
      { title: "Education 7", imgSrc: "/images/gallery/Education/Education-7.webp" },
      { title: "Education 8", imgSrc: "/images/gallery/Education/Education-8.webp" },
      { title: "Education 9", imgSrc: "/images/gallery/Education/Education-9.webp" },
      { title: "Education 10", imgSrc: "/images/gallery/Education/Education-10.webp" },
      { title: "Education 11", imgSrc: "/images/gallery/Education/Education-11.webp" },
      { title: "Education 12", imgSrc: "/images/gallery/Education/Education-12.webp" },
      { title: "Education 13", imgSrc: "/images/gallery/Education/Education-13.webp" },
      { title: "Education 14", imgSrc: "/images/gallery/Education/Education-14.webp" }
    ]



  },

  {
    program: "Electrical & Mechanical",
    projects: [
      { title: "EM 1", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-1.webp" },
      { title: "EM 2", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-2.webp" },
      { title: "EM 3", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-3.webp" },
      { title: "EM 4", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-4.webp" },
      { title: "EM 5", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-5.webp" },
      { title: "EM 6", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-6.webp" },
      { title: "EM 7", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-7.webp" },
      { title: "EM 8", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-8.webp" },
      { title: "EM 9", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-9.webp" },
      { title: "EM 10", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-10.webp" },
      { title: "EM 11", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-11.webp" },
      { title: "EM 12", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-12.webp" },
      { title: "EM 13", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-13.webp" },
      { title: "EM 14", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-14.webp" },
      { title: "EM 15", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-15.webp" },
      { title: "EM 16", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-16.webp" },
      { title: "EM 17", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-17.webp" },
      { title: "EM 18", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-18.webp" },
      { title: "EM 19", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-19.webp" },
      { title: "EM 20", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-20.webp" },
      { title: "EM 21", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-21.webp" },
      { title: "EM 22", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-22.webp" },
      { title: "EM 23", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-23.webp" },
      { title: "EM 24", imgSrc: "/images/gallery/electrical-mechanical/electrical-mechanical-24.webp" },
    ]


  },

  {
    program: "Environment",
    projects: [
      { title: "Environment 1", imgSrc: "/images/gallery/environment/environment-1.webp" },
      { title: "Environment 2", imgSrc: "/images/gallery/environment/environment-2.webp" },
      { title: "Environment 3", imgSrc: "/images/gallery/environment/environment-3.webp" },
      { title: "Environment 4", imgSrc: "/images/gallery/environment/environment-4.webp" },
      { title: "Environment 5", imgSrc: "/images/gallery/environment/environment-5.webp" },
      { title: "Environment 6", imgSrc: "/images/gallery/environment/environment-6.webp" },
      { title: "Environment 7", imgSrc: "/images/gallery/environment/environment-7.webp" },
      { title: "Environment 8", imgSrc: "/images/gallery/environment/environment-8.webp" },
      { title: "Environment 9", imgSrc: "/images/gallery/environment/environment-9.webp" },
      { title: "Environment 10", imgSrc: "/images/gallery/environment/environment-10.webp" },
      { title: "Environment 11", imgSrc: "/images/gallery/environment/environment-11.webp" },
      { title: "Environment 12", imgSrc: "/images/gallery/environment/environment-12.webp" },
      { title: "Environment 13", imgSrc: "/images/gallery/environment/environment-13.webp" },
      { title: "Environment 14", imgSrc: "/images/gallery/environment/environment-14.webp" },
      { title: "Environment 15", imgSrc: "/images/gallery/environment/environment-15.webp" },
      { title: "Environment 16", imgSrc: "/images/gallery/environment/environment-16.webp" },
      { title: "Environment 17", imgSrc: "/images/gallery/environment/environment-17.webp" },
      { title: "Environment 18", imgSrc: "/images/gallery/environment/environment-18.webp" },
      { title: "Environment 19", imgSrc: "/images/gallery/environment/environment-19.webp" },
      { title: "Environment 20", imgSrc: "/images/gallery/environment/environment-20.webp" },
      { title: "Environment 21", imgSrc: "/images/gallery/environment/environment-21.webp" },
      { title: "Environment 22", imgSrc: "/images/gallery/environment/environment-22.webp" },
      { title: "Environment 23", imgSrc: "/images/gallery/environment/environment-23.webp" }
    ]


  },

  {
    program: "Fashion & Apparels",
    projects: [
      { title: "Fashion & Apparels 1", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-1.webp" },
      { title: "Fashion & Apparels 2", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-2.webp" },
      { title: "Fashion & Apparels 3", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-3.webp" },
      { title: "Fashion & Apparels 4", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-4.webp" },
      { title: "Fashion & Apparels 5", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-5.webp" },
      { title: "Fashion & Apparels 6", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-6.webp" },
      { title: "Fashion & Apparels 7", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-7.webp" },
      { title: "Fashion & Apparels 8", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-8.webp" },
      { title: "Fashion & Apparels 9", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-9.webp" },
      { title: "Fashion & Apparels 10", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-10.webp" },
      { title: "Fashion & Apparels 11", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-11.webp" },
      { title: "Fashion & Apparels 12", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-12.webp" },
      { title: "Fashion & Apparels 13", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-13.webp" },
      { title: "Fashion & Apparels 14", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-14.webp" },
      { title: "Fashion & Apparels 15", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-15.webp" },
      { title: "Fashion & Apparels 16", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-16.webp" },
      { title: "Fashion & Apparels 17", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-17.webp" },
      { title: "Fashion & Apparels 18", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-18.webp" },
      { title: "Fashion & Apparels 19", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-19.webp" },
      { title: "Fashion & Apparels 20", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-20.webp" },
      { title: "Fashion & Apparels 21", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-21.webp" },
      { title: "Fashion & Apparels 22", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-22.webp" },
      { title: "Fashion & Apparels 23", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-23.webp" },
      { title: "Fashion & Apparels 24", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-24.webp" },
      { title: "Fashion & Apparels 25", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-25.webp" },
      { title: "Fashion & Apparels 26", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-26.webp" },
      { title: "Fashion & Apparels 27", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-27.webp" },
      { title: "Fashion & Apparels 28", imgSrc: "/images/gallery/fashion-apparels/fashion-apparels-28.webp" },
    ]


  },

  {
    program: "Food & Housekeeping",
    projects: [
      { title: "Food & Housekeeping 1", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-1.webp" },
      { title: "Food & Housekeeping 2", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-2.webp" },
      { title: "Food & Housekeeping 3", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-3.webp" },
      { title: "Food & Housekeeping 4", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-4.webp" },
      { title: "Food & Housekeeping 5", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-5.webp" },
      { title: "Food & Housekeeping 6", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-6.webp" },
      { title: "Food & Housekeeping 7", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-7.webp" },
      { title: "Food & Housekeeping 8", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-8.webp" },
      { title: "Food & Housekeeping 9", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-9.webp" },
      { title: "Food & Housekeeping 10", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-10.webp" },
      { title: "Food & Housekeeping 11", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-11.webp" },
      { title: "Food & Housekeeping 12", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-12.webp" },
      { title: "Food & Housekeeping 13", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-13.webp" },
      { title: "Food & Housekeeping 14", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-14.webp" },
      { title: "Food & Housekeeping 15", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-15.webp" },
      { title: "Food & Housekeeping 16", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-16.webp" },
      { title: "Food & Housekeeping 17", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-17.webp" },
      { title: "Food & Housekeeping 18", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-18.webp" },
      { title: "Food & Housekeeping 19", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-19.webp" },
      { title: "Food & Housekeeping 20", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-20.webp" },
      { title: "Food & Housekeeping 21", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-21.webp" },
      { title: "Food & Housekeeping 22", imgSrc: "/images/gallery/food-housekeeping/food-housekeeping-22.webp" }
    ]


  },

  {
    program: "Gramasabha",
    projects: [
      { title: "Gramasabha 1", imgSrc: "/images/gallery/gramasabha/gramasabha-1.webp" },
      { title: "Gramasabha 2", imgSrc: "/images/gallery/gramasabha/gramasabha-2.webp" },
      { title: "Gramasabha 3", imgSrc: "/images/gallery/gramasabha/gramasabha-3.webp" },
      { title: "Gramasabha 4", imgSrc: "/images/gallery/gramasabha/gramasabha-4.webp" },
      { title: "Gramasabha 5", imgSrc: "/images/gallery/gramasabha/gramasabha-5.webp" },
      { title: "Gramasabha 6", imgSrc: "/images/gallery/gramasabha/gramasabha-6.webp" },
      { title: "Gramasabha 7", imgSrc: "/images/gallery/gramasabha/gramasabha-7.webp" },
      { title: "Gramasabha 8", imgSrc: "/images/gallery/gramasabha/gramasabha-8.webp" },
      { title: "Gramasabha 9", imgSrc: "/images/gallery/gramasabha/gramasabha-9.webp" },
      { title: "Gramasabha 10", imgSrc: "/images/gallery/gramasabha/gramasabha-10.webp" },
      { title: "Gramasabha 11", imgSrc: "/images/gallery/gramasabha/gramasabha-11.webp" },
      { title: "Gramasabha 12", imgSrc: "/images/gallery/gramasabha/gramasabha-12.webp" },
      { title: "Gramasabha 13", imgSrc: "/images/gallery/gramasabha/gramasabha-13.webp" },
      { title: "Gramasabha 14", imgSrc: "/images/gallery/gramasabha/gramasabha-14.webp" },
      { title: "Gramasabha 15", imgSrc: "/images/gallery/gramasabha/gramasabha-15.webp" },
      { title: "Gramasabha 16", imgSrc: "/images/gallery/gramasabha/gramasabha-16.webp" },
      { title: "Gramasabha 17", imgSrc: "/images/gallery/gramasabha/gramasabha-17.webp" },
      { title: "Gramasabha 18", imgSrc: "/images/gallery/gramasabha/gramasabha-18.webp" },
      { title: "Gramasabha 19", imgSrc: "/images/gallery/gramasabha/gramasabha-19.webp" },
      { title: "Gramasabha 20", imgSrc: "/images/gallery/gramasabha/gramasabha-20.webp" },
      { title: "Gramasabha 21", imgSrc: "/images/gallery/gramasabha/gramasabha-21.webp" },
      { title: "Gramasabha 22", imgSrc: "/images/gallery/gramasabha/gramasabha-22.webp" }
    ]


  },

  {
    program: "Health",
    projects: [
      { title: "Health 1", imgSrc: "/images/gallery/health/health1-1.webp" },
      { title: "Health 2", imgSrc: "/images/gallery/health/health1-2.webp" },
      { title: "Health 3", imgSrc: "/images/gallery/health/health1-3.webp" },
      { title: "Health 4", imgSrc: "/images/gallery/health/health1-4.webp" },
      { title: "Health 5", imgSrc: "/images/gallery/health/health1-5.webp" },
      { title: "Health 6", imgSrc: "/images/gallery/health/health1-6.webp" },
      { title: "Health 7", imgSrc: "/images/gallery/health/health1-7.webp" },
      { title: "Health 8", imgSrc: "/images/gallery/health/health1-8.webp" },
      { title: "Health 9", imgSrc: "/images/gallery/health/health1-9.webp" },
      { title: "Health 10", imgSrc: "/images/gallery/health/health1-10.webp" },
      { title: "Health 11", imgSrc: "/images/gallery/health/health1-11.webp" },
      { title: "Health 12", imgSrc: "/images/gallery/health/health1-12.webp" },
      { title: "Health 13", imgSrc: "/images/gallery/health/health1-13.webp" },
      { title: "Health 14", imgSrc: "/images/gallery/health/health1-14.webp" },
      { title: "Health 15", imgSrc: "/images/gallery/health/health1-15.webp" },
      { title: "Health 16", imgSrc: "/images/gallery/health/health1-16.webp" },
      { title: "Health 17", imgSrc: "/images/gallery/health/health1-17.webp" },
      { title: "Health 18", imgSrc: "/images/gallery/health/health1-18.webp" }
    ]


  },

  {
    program: "Persons with Disability",
    projects: [
      { title: "Persons with Disability 1", imgSrc: "/images/gallery/pwd/pwd-1.webp" },
      { title: "Persons with Disability 2", imgSrc: "/images/gallery/pwd/pwd-2.webp" },
      { title: "Persons with Disability 3", imgSrc: "/images/gallery/pwd/pwd-3.webp" },
      { title: "Persons with Disability 4", imgSrc: "/images/gallery/pwd/pwd-4.webp" },
      { title: "Persons with Disability 5", imgSrc: "/images/gallery/pwd/pwd-5.webp" },
      { title: "Persons with Disability 6", imgSrc: "/images/gallery/pwd/pwd-6.webp" },
      { title: "Persons with Disability 7", imgSrc: "/images/gallery/pwd/pwd-7.webp" },
      { title: "Persons with Disability 8", imgSrc: "/images/gallery/pwd/pwd-8.webp" },
      { title: "Persons with Disability 9", imgSrc: "/images/gallery/pwd/pwd-9.webp" },
      { title: "Persons with Disability 10", imgSrc: "/images/gallery/pwd/pwd-10.webp" }
    ]


  },
];



const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const ProjectsSection = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ProjectDataType | null>(null);

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/free-vector/white-frames-collage-sunlight-brick-wall_107791-17870.jpg"
        title=" Gallery"
        subtitle="A Visual Journey Through Our Work"
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
          { label: "" },
        ]}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {programData.map((program, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-lg font-semibold transition ${activeProgram === idx
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
                  }`}
                onClick={() => setActiveProgram(idx)}
              >
                {program.program}
              </button>
            ))}
          </div>


          {/* Animated Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram} // Important: re-mounts container for animation
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={gridContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {programData[activeProgram].projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                  variants={gridItem}
                  whileHover={{ scale: 1.06 }}
                  onClick={() => setSelectedImage(project)}
                >
                  <motion.div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-30 transition-opacity rounded-2xl" />
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-60 rounded-2xl transition-transform"
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 text-white font-semibold bg-black/50 px-3 py-1 rounded"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }}
                  >
                    {project.title}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative p-4 max-w-3xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 150, damping: 15 } }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Improved Close Button */}
                <button
                  className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                >
                  ✕
                </button>

                <Image
                  src={selectedImage.imgSrc}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="object-contain w-full h-auto "
                />

                <motion.p
                  className="mt-4 text-center text-white font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                  {selectedImage.title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </>
  );
};

export default ProjectsSection;
