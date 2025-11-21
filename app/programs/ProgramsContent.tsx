"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch, FaFilter, FaCalendarAlt, FaHistory } from "react-icons/fa";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import { programs } from "@/data/programs";
import { programCategories } from "@/data/programCategories";

const formatDate = (date: string) => {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "TBA";
  }
};

export default function Programscontent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const today = new Date();

  // Read ?category= from query if present
  useEffect(() => {
    const categoryFromQuery = searchParams.get("category");
    if (categoryFromQuery) setSelectedCategory(categoryFromQuery);
  }, [searchParams]);

  // Split by date
  const pastPrograms = programs.filter((p) => new Date(p.date) < today);
  const upcomingPrograms = programs.filter((p) => new Date(p.date) >= today);

  const displayedPrograms =
    activeTab === "past" ? pastPrograms : upcomingPrograms;

  // Apply search, category, date filters
  const filteredPrograms = useMemo(() => {
    return displayedPrograms.filter((program) => {
      const matchesSearch = program.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || program.categorySlug === selectedCategory;

      const programDate = program.date ? new Date(program.date) : null;
      const matchesDate =
        (!startDate || (programDate && programDate >= new Date(startDate))) &&
        (!endDate || (programDate && programDate <= new Date(endDate)));

      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [displayedPrograms, searchTerm, selectedCategory, startDate, endDate]);

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-437722.jpg"
        title=" Programs"
        subtitle="Empowering Communities through Skill and Innovation"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
        ]}
      />

      <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Tabs */}
          <div className="flex justify-center gap-14 border-b border-gray-300 dark:border-gray-700 pb-4">
            {[
              { id: "past", label: "Past", icon: <FaHistory /> },
              { id: "upcoming", label: "Upcoming", icon: <FaCalendarAlt /> },

            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "upcoming" | "past")}
                className={`relative flex items-center gap-2 pb-2 font-semibold transition-colors ${activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  }`}
              >
                {tab.icon} {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2  border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Categories</option>
                {programCategories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Filters */}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-2  border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-4 py-2  border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Program Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchTerm + startDate + endDate + selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPrograms.length === 0 ? (
                <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
                  No programs found.
                </p>
              ) : (
                filteredPrograms.map((program, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => router.push(`/programs/${program.slug}`)}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                        {program.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        📅 {formatDate(program.date)}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
