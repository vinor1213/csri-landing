"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
interface EventType {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    imgSrc: string;
    category: string;
}

const eventsData: Record<string, EventType[]> = {
    upcoming: [
        {
            title: "Health Awareness Camp",
            startDate: "2025-10-15",
            endDate: "2025-10-16",
            description: "A community camp focused on preventive health and wellness.",
            imgSrc: "https://img.freepik.com/free-photo/using-hand-sanitizer-while-traveling-new-normal_53876-101238.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
            category: "Technology",
        },
        {
            title: "Tree Plantation Drive",
            startDate: "2025-11-05",
            endDate: "2025-11-05",
            description: "Join us to plant trees and promote environmental awareness.",
            imgSrc: "https://img.freepik.com/free-photo/close-up-picture-pot-plant-money-put-hand_1150-26646.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
            category: "Gadgets",
        },
        {
            title: "Tree Plantation Drive",
            startDate: "2025-11-05",
            endDate: "2025-11-05",
            description: "Join us to plant trees and promote environmental awareness.",
            imgSrc: "https://img.freepik.com/free-photo/close-up-picture-pot-plant-money-put-hand_1150-26646.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
            category: "Gadgets",
        },
        {
            title: "Tree Plantation Drive",
            startDate: "2025-11-05",
            endDate: "2025-11-05",
            description: "Join us to plant trees and promote environmental awareness.",
            imgSrc: "https://img.freepik.com/free-photo/close-up-picture-pot-plant-money-put-hand_1150-26646.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
            category: "Gadgets",
        },


    ],
    present: [
        {
            title: "CSR Program Workshop",
            startDate: "2025-09-12",
            endDate: "2025-09-14",
            description: "Ongoing workshop on skill development for youth.",
            imgSrc: "/images/events/present1.jpg",
            category: "Insights",
        },
    ],
    past: [
        {
            title: "Education Support Camp",
            startDate: "2025-07-20",
            endDate: "2025-07-21",
            description: "Completed camp for underprivileged students in rural areas.",
            imgSrc: "/images/events/past1.jpg",
            category: "Bitcoin",
        },
        {
            title: "River Cleanup Drive",
            startDate: "2025-06-15",
            endDate: "2025-06-15",
            description: "A successful drive cleaning local rivers and raising awareness.",
            imgSrc: "/images/events/past2.jpg",
            category: "Cryptocurrency",
        },
    ],
};

const eventTabs = ["upcoming", "present", "past"];

const EventsPage = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    return (

        <>
            <ReuseBanner
                image="https://img.freepik.com/premium-photo/world-population-day-poster_944525-9568.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_incoming&w=740&q=80"
                title="Events"
                subtitle=" Connecting Communities Through Meaningful Experiences"
            />

            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" },
                    { label: "" },
                ]}
            />

            <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 

                    {/* Tabs */}
                    <div className="flex justify-center mb-12 space-x-4">
                        {eventTabs.map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === tab
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Events Layout */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Main Left Card */}
                            {eventsData[activeTab][0] && (
                                <motion.div
                                    className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl  overflow-hidden flex flex-col"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative">
                                        <Image
                                            src={eventsData[activeTab][0].imgSrc}
                                            alt={eventsData[activeTab][0].title}
                                            width={800}
                                            height={400}
                                            className="object-cover w-full h-72"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <p className="text-blue-500 text-sm font-semibold mb-2">
                                            {eventsData[activeTab][0].category}
                                        </p>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {eventsData[activeTab][0].title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 flex-1">
                                            {eventsData[activeTab][0].description}
                                        </p>
                                        <button className="mt-6 self-start bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                            Read more
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Right Smaller Cards */}
                            <div className="flex flex-col gap-6">
                                {eventsData[activeTab].slice(1).map((event, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Image
                                            src={event.imgSrc}
                                            alt={event.title}
                                            width={120}
                                            height={120}
                                            className="object-cover w-32 h-28 sm:h-32"
                                        />
                                        <div className="p-4 flex flex-col justify-center">
                                            <p className="text-blue-600 text-xs font-semibold mb-1">{event.category}</p>
                                            <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                                                {event.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
};

export default EventsPage;
