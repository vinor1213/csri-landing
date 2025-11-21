"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// CSRI EVENTS DATA
interface EventType {
    time: string;
    title: string;
    subtitle: string;
    date: string;
    imgSrc: string;
    location: string;
}

const eventsData: EventType[] = [
    {
        time: "3 hours",
        title: 'Community Workshop',
        subtitle: 'Sustainable Agriculture',
        location: "CSRI Campus",
        date: 'August 25, 2025',
        imgSrc: "https://img.freepik.com/premium-photo/multicultural-office-staff-sitting-having-meeting-together_1218270-5194.jpg",
    },
    {
        time: "2 hours",
        title: 'Tech for Social Good',
        subtitle: 'Hackathon',
        location: "CSRI Innovation Lab",
        date: 'September 2, 2025',
        imgSrc: "https://img.freepik.com/premium-photo/group-laptops-connected-p2p-network-hackathon-collaborative-project_1314467-141001.jpg"
    },
    {
        time: "4 hours",
        title: 'Environmental Awareness Campaign',
        subtitle: 'Tree Plantation Drive',
        location: "Green Park, Downtown",
        date: 'September 15, 2025',
        imgSrc: "https://img.freepik.com/free-vector/environment-banner-template_23-2148776678.jpg"
    },
    {
        time: "3 hours",
        title: 'Youth Empowerment Seminar',
        subtitle: 'Leadership & Skills',
        location: "CSRI Auditorium",
        date: 'October 5, 2025',
        imgSrc: "https://img.freepik.com/free-photo/group-different-people-volunteering-foodbank_23-2149012213.jpg"
    },
];

export default class CSRIEventsCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 700,
            cssEase: "ease-in-out",
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        };

        return (
            <div className="bg-lightgrey py-12" id="events-section">
                <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-blue text-lg font-normal tracking-widest">EVENTS</h3>
                        <h2 className="text-4xl sm:text-5xl font-bold">Events & Initiatives</h2>
                    </div>

                    <Slider {...settings} className="px-4">
                        {eventsData.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="px-2" // <-- This adds horizontal gap for each card
                            >
                                <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-full">
                                    <div className="relative w-full h-60">
                                        <Image
                                            src={event.imgSrc}
                                            alt={event.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <Link href="/">
                                            <span className="absolute top-4 left-4 bg-blue text-white text-sm py-2 px-3 rounded-full shadow-md hover:bg-neon">
                                                {event.time}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <div>
                                            <h4 className="text-xl font-bold text-black">{event.title}</h4>
                                            <h5 className="text-md font-medium text-gray-700 mt-1">{event.subtitle}</h5>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600">{event.location}</p>
                                            <p className="text-sm text-gray-600">{event.date}</p>
                                        </div>
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
