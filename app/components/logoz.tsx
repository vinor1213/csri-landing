"use client";
import Link from "next/link";

export default function CSRPartnerLogos() {
    const steps = [
        { id: "01", name: "Company A", logoSrc: "/images/corporates/aicte-0.webp" },
        { id: "02", name: "Company B", logoSrc: "/images/corporates/NSDC.webp" },
        { id: "03", name: "Company C", logoSrc: "/images/corporates/PMKVY.webp" },
        { id: "04", name: "Company D", logoSrc: "/images/corporates/SAIL.webp" },
        { id: "05", name: "Company E", logoSrc: "/images/corporates/SRCL.webp" },
        { id: "06", name: "Company F", logoSrc: "/images/corporates/TNSDC.webp" },
        { id: "07", name: "Company G", logoSrc: "/images/corporates/uba.webp" }
    ];

    // Repeat logos for smooth marquee
    const marqueeItems = [...steps, ...steps, ...steps];

    return (
        <div className="w-full flex flex-col items-center py-6">

            {/* MARQUEE */}
            <div className="overflow-hidden w-full max-w-[calc(5*6rem+4*1.5rem)]">
                <div className="flex animate-marquee gap-6 items-center">
                    {marqueeItems.map((step, index) => (
                        <div
                            key={index}
                            className="flex-none w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center bg-white  p-4"
                        >
                            <img
                                src={step.logoSrc}
                                alt={step.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* BUTTON */}
            <Link href="/partners/corporate">
                <button
                    type="button"
                    className="group mt-6 relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-white 
                       transition hover:bg-blue-600 flex items-center gap-3"
                >
                    <span className="italic">Partner with Us</span>
                </button>
            </Link>

            {/* MARQUEE ANIMATION */}
            <style jsx>{`
                .animate-marquee {
                    display: flex;
                    gap: 1.5rem;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </div>
    );
}
