"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import { newsandeventsData } from "@/data/newsandevents";



const eventTabs = [
    { key: "upcoming", label: "Upcoming" },
    { key: "News", label: "News" },
    { key: "past", label: "Past" },
];

const EventsPage = () => {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [search, setSearch] = useState("");
    const [startDateFilter, setStartDateFilter] = useState("");
    const [endDateFilter, setEndDateFilter] = useState("");
    const filteredEvents = useMemo(() => {
        // Clone data
        const list = [...newsandeventsData[activeTab]];

        // ✅ Sort by date (newest first)
        list.sort((a, b) => {
            const dateA = a.startDate ? new Date(a.startDate) : new Date(0);
            const dateB = b.startDate ? new Date(b.startDate) : new Date(0);
            return dateB.getTime() - dateA.getTime(); // newest first
        });

        // ✅ Apply filters
        return list.filter((event) => {
            const matchText =
                event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.category.toLowerCase().includes(search.toLowerCase()) ||
                event.description.toLowerCase().includes(search.toLowerCase());

            const matchStartDate =
                !startDateFilter ||
                (event.startDate && new Date(event.startDate) >= new Date(startDateFilter));

            const matchEndDate =
                !endDateFilter ||
                (event.endDate && new Date(event.endDate) <= new Date(endDateFilter));

            return matchText && matchStartDate && matchEndDate;
        });
    }, [activeTab, search, startDateFilter, endDateFilter]);


    const [page, setPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

    const paginatedEvents = filteredEvents.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <ReuseBanner
                image="/images/banner/events-banner.jpg"
                title=" News & Events"
                subtitle="Connecting Communities Through Meaningful Experiences"
            />

            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Events" }]} />
            <section className="py-14 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">

                    {/* TABS */}
                    <div className="flex justify-center mb-8 flex-wrap gap-3">
                        {eventTabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === tab.key
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* FILTERS */}
                    <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={search}
                            onChange={(e) => {
                                setPage(1);
                                setSearch(e.target.value);
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white 
                focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        {/* Start Date */}
                        <input
                            type="text"
                            placeholder="Start Date"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
                            value={startDateFilter}
                            onChange={(e) => {
                                setPage(1);
                                setStartDateFilter(e.target.value);
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white 
                focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        {/* End Date */}
                        <input
                            type="text"
                            placeholder="End Date"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
                            value={endDateFilter}
                            onChange={(e) => {
                                setPage(1);
                                setEndDateFilter(e.target.value);
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white 
                focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT SIDE – LIST VIEW */}
                        <div className="lg:col-span-9">
                            <div className="bg-white  shadow-md p-4 flex flex-col h-auto">

                                {/* EVENTS LIST */}
                                <div className="flex-1 overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            key={activeTab + page}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col gap-6 h-full overflow-hidden"
                                        >
                                            {paginatedEvents.map((event, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.01 }}
                                                    className="flex items-start gap-5 border-b pb-5"
                                                >
                                                    {/* IMAGE → Slightly Bigger */}
                                                    <a href={`/events/${event.slug}`} className="block">

                                                        <Image
                                                            src={event.imgSrc}
                                                            alt={event.title}
                                                            width={250}
                                                            height={150}
                                                            className="w-44 h-28 object-cover rounded-lg"
                                                        />
                                                    </a>


                                                    {/* TEXT DETAILS */}
                                                    <div className="flex flex-col flex-1">
                                                       

                                                        <a href={`/events/${event.slug}`} className="block">
                                                            <h3 className="text-lg font-bold">{event.title}</h3>
                                                        </a>

                                                        <p className="text-gray-600 text-sm line-clamp-3">
                                                            {event.description}
                                                        </p>

                                                        <p className="text-xs text-gray-500 mt-2">
                                                            {event.startDate} → {event.endDate}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* PAGINATION */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center gap-3 mt-4">
                                        <button
                                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                            disabled={page === 1}
                                            className={`px-4 py-2 rounded-lg border ${page === 1
                                                ? "opacity-40 cursor-not-allowed"
                                                : "hover:bg-blue-100"
                                                }`}
                                        >
                                            Prev
                                        </button>

                                        <div className="flex gap-2">
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setPage(i + 1)}
                                                    className={`px-3 py-2 rounded-lg ${page === i + 1
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                                                        }`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                            disabled={page === totalPages}
                                            className={`px-4 py-2 rounded-lg border ${page === totalPages
                                                ? "opacity-40 cursor-not-allowed"
                                                : "hover:bg-blue-100"
                                                }`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE – SCROLL ONLY */}
                        <div className="lg:col-span-3">
                            <div className="bg-white shadow-md p-5 h-[58vh] flex flex-col overflow-hidden">

                                {/* HEADER WITH BOTTOM BORDER */}
                                <div className="pb-3 border-b">
                                    <h2 className="text-xl font-bold text-center">
                                        {activeTab === "News" ? "Latest News" : activeTab + " List"}
                                    </h2>
                                </div>

                                {/* SCROLL LIST */}
                                <div className="mt-3 flex-1 overflow-y-auto">
                                    <div className="space-y-4">
                                        {filteredEvents.map((event, idx) => (
                                            <a key={event.slug} href={`/events/${event.slug}`} className="block">

                                                <div
                                                    key={idx}
                                                    className="p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition flex items-center gap-3"
                                                >
                                                    {/* Thumbnail */}

                                                    <Image
                                                        src={event.imgSrc}
                                                        alt={event.title}
                                                        width={50}
                                                        height={40}
                                                        className="w-14 h-10 object-cover rounded-md"
                                                    />

                                                    {/* Text */}
                                                    <div className="flex flex-col">
                                                     
                                                        <h4 className="text-sm font-semibold line-clamp-1">{event.title}</h4>
                                                        <p className="text-xs text-gray-500">
                                                            {event.startDate} → {event.endDate}
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>

                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section>





            {/* SCROLLBAR STYLE */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #a0aec0;
                    border-radius: 10px;
                }
            `}</style>
        </>
    );
};

export default EventsPage;
