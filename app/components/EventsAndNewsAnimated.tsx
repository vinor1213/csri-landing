// components/NewsAndEventsPage.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { EventType as EventDataType } from "@/data/newsandevents";
import { FiShare2 } from "react-icons/fi";
import { Home } from "lucide-react";
import { newsandeventsData } from "@/data/newsandevents";
export interface EventType extends Omit<EventDataType, "startDate" | "endDate"> {
    startDate?: string;
    endDate?: string;
    images?: string[];
}

interface NewsAndEventsPageProps {
    event: EventType;
    allEvents: EventType[];
}

export default function NewsAndEventsPage({ event, allEvents }: NewsAndEventsPageProps) {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const filteredEvents = allEvents
        .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            const dateA = new Date(a.startDate || a.endDate || 0).getTime();
            const dateB = new Date(b.startDate || b.endDate || 0).getTime();
            return dateB - dateA; // latest first
        });


    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const currentIndex = allEvents.findIndex((e) => e.slug === event.slug);
    const prevEvent = allEvents[currentIndex - 1];
    const nextEvent = allEvents[currentIndex + 1];

    function formatDate(dateStr: string | undefined): string {
        if (!dateStr) return "";
        const date = new Date(dateStr);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    function formatDMY(dateStr?: string) {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    // Merge all categories
    const mergedEvents = [
        ...newsandeventsData.upcoming,
        ...newsandeventsData.News,
        ...newsandeventsData.past,
    ];

    // Convert date safely
    const parseDate = (date?: string) => {
        if (!date) return 0;
        const d = new Date(date);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    };

    // Filter: showfront === true and sort by latest date
    const recentItems = mergedEvents
        .filter((e) => e.showfront === true)
        .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <motion.div
                className="lg:col-span-2 flex flex-col gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Back Button */}
                <div className="flex justify-start">
                    <button
                        onClick={() => router.back()}
                        className="text-blue-600 hover:underline mb-2"
                    >
                        &larr; Back
                    </button>
                </div>
                <nav className="text-gray-400 text-sm mb-2" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex items-center space-x-1">

                        {/* Home */}
                        <li className="flex items-center">
                            <a href="/" className="hover:underline text-blue-600 flex items-center gap-1">
                                <Home className="w-3 h-3" />
                                Home
                            </a>
                            <span className="mx-1">/</span>
                        </li>

                        {/* Events */}
                        <li>
                            <a href="/events" className="hover:underline text-blue-600">Events</a>
                            <span className="mx-1">/</span>
                        </li>

                        {/* Current Page */}
                        <li className="text-gray-500">{event.title}</li>

                    </ol>
                </nav>

                {/* Event Title + Date + Share */}
                <h1 className="text-3xl font-bold mt-2">{event.title}</h1>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* Left: Event Date */}
                    <div className="text-gray-500 font-medium">
                        {event.startDate || event.endDate ? (
                            event.startDate === event.endDate ? (
                                formatDate(event.startDate)
                            ) : (
                                `${formatDate(event.startDate)} - ${formatDate(event.endDate)}`
                            )
                        ) : null}
                    </div>


                    {/* Right: Share Icons */}
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <FiShare2 className="text-gray-500 w-5 h-5" />
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600 text-white rounded-full hover:scale-110 transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(event.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-400 text-white rounded-full hover:scale-110 transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(event.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-700 text-white rounded-full hover:scale-110 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(event.title + " " + currentUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-500 text-white rounded-full hover:scale-110 transition"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-pink-500 text-white rounded-full hover:scale-110 transition"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Main Event Image */}
                <Image
                    src={event.imgSrc}
                    alt={event.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                />

                {/* Event Description */}
                <p className="text-gray-700 text-justify">{event.description}</p>

                {/* Event Additional Images */}
                {/* {event.images && event.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                        {event.images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}

                                alt={`${event.title} - ${idx + 1}`}
                                width={400}
                                height={200}
                                className="w-full h-40 object-cover rounded"
                            />
                        ))}
                    </div>
                )} */}

                {/* Previous / Next Navigation */}
                <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                    {/* Previous */}
                    <div className="flex-1">
                        {prevEvent && (
                            <div
                                className="p-4   transition cursor-pointer text-left"
                                onClick={() => router.push(`/events/${prevEvent.slug}`)}
                            >
                                <p className="text-sm text-gray-500">&laquo; Previous</p>
                                <h3 className="font-semibold">{prevEvent.title}</h3>
                            </div>
                        )}
                    </div>
                    {/* Next */}
                    <div className="flex-1">
                        {nextEvent && (
                            <div
                                className="p-4    transition cursor-pointer text-right"
                                onClick={() => router.push(`/events/${nextEvent.slug}`)}
                            >
                                <p className="text-sm text-gray-500">Next &raquo;</p>
                                <h3 className="font-semibold italic">{nextEvent.title}</h3>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
                className="lg:col-span-1 flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <h2 className="text-xl font-semibold">All {event.category}</h2>

                <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px]">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((e) => (
                            <div
                                key={e.slug}
                                className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 cursor-pointer"
                                onClick={() => router.push(`/events/${e.slug}`)}
                            >
                                <Image
                                    src={e.imgSrc}
                                    alt={e.title}
                                    width={60}
                                    height={40}
                                    className="object-cover rounded"
                                />
                                <div className="flex-1">
                                    <p className="font-medium">{e.title}</p>

                                    {(e.startDate || e.endDate) && (
                                        <p className="text-sm text-gray-500">
                                            {formatDMY(e.startDate)}
                                            {e.endDate && e.startDate !== e.endDate && ` - ${formatDMY(e.endDate)}`}
                                        </p>
                                    )}
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No events found.</p>
                    )}
                </div>
                <h2 className="text-xl font-semibold mt-6">Recent Updates</h2>

                <div className="flex flex-col gap-3">
                    {recentItems.map((item) => (
                        <div
                            key={item.slug}
                            className="flex items-center gap-3 p-2 border rounded hover:bg-gray-50 cursor-pointer"
                            onClick={() => router.push(`/events/${item.slug}`)}
                        >
                            <Image
                                src={item.imgSrc}
                                alt={item.title}
                                width={60}
                                height={40}
                                className="object-cover rounded"
                            />

                            <div className="flex-1">
                                <p className="font-semibold">{item.title}</p>

                                {(item.startDate || item.endDate) && (
                                    <p className="text-sm text-gray-500">
                                        {formatDMY(item.startDate)}
                                        {item.endDate &&
                                            item.startDate !== item.endDate &&
                                            ` - ${formatDMY(item.endDate)}`}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
}
