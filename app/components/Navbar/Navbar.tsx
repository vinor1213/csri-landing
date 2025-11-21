"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

import { programCategories } from "@/data/programCategories";

interface NavigationItem {
  name: string;
  href?: string;
  subItems?: { name: string; href: string }[];
}

const navData: NavigationItem[] = [
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
  //   name: "Programs",
  //   href: "/programs",
  //   subItems: programCategories
  //     .filter((cat) => cat.showNavbar)
  //     .map((cat) => ({
  //       name: cat.title,
  //       href: `/programs/?category=${cat.slug}`,
  //     })),
  // },
  {
    name: "Partner with Us",
    href: "/partners/whyPartner",
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

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navigation = navData.map((item) => ({
    ...item,
    current:
      item.href === pathname ||
      (item.subItems && item.subItems.some((sub) => sub.href === pathname)),
  }));

  return (
    <Disclosure as="nav"   className="w-full fixed top-0 left-0 z-50 bg-white shadow-md !pointer-events-auto">
      <div className="max-w-[100%] mx-auto px-3 sm:px-4 md:px-6 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-black whitespace-nowrap">
              SONA CSRI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {navigation.map((item) =>
              item.subItems ? (
                <div key={item.name} className="relative group">
                  <div className="flex items-center space-x-0.5 lg:space-x-1 cursor-pointer">
                    <Link
                      href={item.href!}
                      className={classNames(
                        item.current
                          ? "text-black underline decoration-2 underline-offset-4 font-semibold"
                          : "text-gray-700 hover:text-black",
                        // fine-tuned font scaling
                        "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] px-1.5 py-1 transition whitespace-nowrap"
                      )}
                    >
                      {item.name}
                    </Link>
                    <ChevronDownIcon className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-gray-500 group-hover:text-black transition" />
                  </div>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-1.5 min-w-[150px] bg-white shadow-md rounded-md py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-1 text-[13px] lg:text-[14px] text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={classNames(
                    item.current
                      ? "text-black underline decoration-2 underline-offset-4 font-semibold"
                      : "text-gray-700 hover:text-black",
                    "text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] px-1.5 py-1 transition whitespace-nowrap"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* <Contactusform /> */}
            <Link href="/contact">
              <button className="group relative inline-flex  items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition hover:scale-110"><span>Contact</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>
            </Link>
          </div>
          {/* Mobile */}
          <div className="flex lg:hidden items-center">

            <button
              onClick={() => setIsOpen(true)}
              className="ml-1 sm:ml-2 p-1 sm:p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata setIsOpen={setIsOpen} />
        </Drawer>
      </div>
    </Disclosure>
  );
};

export default Navbar;
