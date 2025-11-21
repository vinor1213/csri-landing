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

    return (
        <div className="w-full flex flex-col items-center py-4">

            {/* HORIZONTAL LOGO SCROLLER */}
            <div
                className="
                    flex flex-nowrap 
                    overflow-x-auto 
                    overflow-y-hidden 
                    gap-4 
                    py-2 
                    px-1 
                    scrollbar-hide
                    touch-pan-x 
                    h-fit
                "
            >
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center group flex-none"
                    >

                        {/* CIRCLE */}
                        <div
                            className="
                                rounded-full 
                                w-10 h-10 
                                sm:w-14 sm:h-14
                                bg-gradient-to-r from-blue-400 to-purple-400 
                                p-[2px]
                                flex items-center justify-center
                                shadow-md
                                transition-all duration-300 ease-out
                                group-hover:scale-110 
                                group-hover:shadow-xl 
                                group-hover:from-blue-500 
                                group-hover:to-purple-500
                            "
                        >
                            <div className="bg-white w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={step.logoSrc}
                                    alt={step.name}
                                    className="
                                        w-6 h-6 
                                        sm:w-9 sm:h-9
                                        object-contain 
                                        grayscale 
                                        group-hover:grayscale-0 
                                        transition-all duration-300
                                    "
                                />
                            </div>
                        </div>

                        {/* LINE */}
                        <div className="mt-1 w-px h-3 bg-gray-300"></div>

                        {/* ID LABEL */}
                        <div className="rounded-full border-2 border-gray-300 px-2 py-[2px] text-[8px] sm:text-xs font-bold text-gray-600">
                            {step.id}
                        </div>
                    </div>
                ))}
            </div>

            {/* BUTTON */}
            <Link href="/partners/corporate">
                <button
                    type="button"
                    className="group mt-3 relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-white 
               transition hover:bg-blue-600 flex items-center gap-3"
                >
                    <svg
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <circle cx="9" cy="7" r="4" />
                        <path d="M17 11a4 4 0 110-8 4 4 0 010 8z" />
                        <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
                        <path d="M15 19v-1a4 4 0 014-4h1a4 4 0 014 4v1" />
                    </svg>

                    <span className="italic">Partner with Us</span>
                </button>
            </Link>

        </div>
    );
}
