import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { programCategories } from "@/data/programCategories";


interface NavigationItem {
    name: string;
    href: string;
    subItems?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
    { href: "/", name: "Home" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    {
        name: "Focus Areas",
        href: "/focus-area/skill",
        subItems: [
            { name: "Skill Development & Livelihood Promotion", href: "/focus-area/skill" },
            { name: "Health & Well-being", href: "/focus-area/health" },
            { name: "Environment & Sustainability", href: "/focus-area/environment" },
            { name: "Village Adoption", href: "/focus-area/village" },
            { name: "Women Empowerment Initiatives", href: "/focus-area/women" },
            { name: "Entrepreneurship Support", href: "/focus-area/entrepreneurship" },
        ],
    },
    // {
    //     name: "Programs",
    //     href: "/programs",
    //     subItems: programCategories
    //         .filter((cat) => cat.showNavbar)
    //         .map((cat) => ({
    //             name: cat.title,
    //             href: `/programs/${cat.slug}`,
    //         })),
    // },
    {
        name: "Partner with Us",
        href: "/partners",
        subItems: [
            { name: "Why Partner", href: "/partners/whyPartner" },
            { name: "Corporates", href: "/partners/corporate" },
            { name: "NGOs", href: "/partners/ngo" },
            { name: "Alumni", href: "/partners/alumni" },
        ],
    },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    {
        name: "Reports",
        href: "/reports",
        subItems: [
            { name: "Newsletter", href: "/reports" },
            { name: "Annual Report", href: "/reports" },
            { name: "Program Report", href: "/reports" },
        ],
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Drawerdata = ({ setIsOpen }: { setIsOpen: (val: boolean) => void }) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (name: string) => {
        setOpenMenu(openMenu === name ? null : name);
    };

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.subItems ? (
                                    <>
                                        {/* Parent item with arrow toggle */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();   // 🔥 Prevent sidebar from closing
                                                toggleMenu(item.name);
                                            }}
                                            className="flex justify-between w-full py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-purple"
                                        >
                                            <span>{item.name}</span>
                                            {openMenu === item.name ? (
                                                <ChevronDownIcon className="w-5 h-5" />
                                            ) : (
                                                <ChevronRightIcon className="w-5 h-5" />
                                            )}
                                        </button>


                                        {/* Submenu items */}
                                        {openMenu === item.name && (
                                            <div className="ml-4 mt-1 space-y-1">
                                                {item.subItems.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="block py-1 pl-2 text-sm text-gray-700 hover:text-purple"
                                                        onClick={() => setIsOpen(false)} // ✅ closes sidebar
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    // Normal menu link
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            "block py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-purple"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="mt-4"></div>
                        <Link href="/contact">
                            <button className=" w-full group relative inline-flex  items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition hover:scale-110"><span>Contact</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawerdata;
