"use client";
import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Rocket } from "lucide-react";
import { MdStar } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const EntrepreneurshipPage = () => {
  const content = {
    label: "Entrepreneurship Support",
    image: "/images/focus-area/Focus-Area-Entrepreneurship.webp",
    icon: <Rocket className="w-5 h-5" />,
    content: `CSRI supports graduates in becoming entrepreneurs through incubation from Sona’s ecosystem—Sona Incubation Foundation, Business Incubation Centre, and Entrepreneurship Development Cell.\n\n• Startup incubation support.\n• Innovation & mentorship ecosystem.`,
  };

  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/premium-photo/young-india-bank-officer-completing-paper-work-with-farmer_75648-7219.jpg"
        title="Focus Area - Entrepreneurship Support"
        subtitle="Where Responsibility Meets Community"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focusarea" },
          { label: content.label, href: "" },
        ]}
      />

      {/* 🌱 Main Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          {/* Left: Image */}
          <div className="w-full h-64 relative overflow-hidden shadow-md rounded-lg">
            <Image
              src={content.image}
              alt={content.label}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="text-justify space-y-4 text-gray-700 dark:text-gray-200">
            {content.content.split("\n").map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                {line.trim().startsWith("•") && (
                  <MdStar className="mt-1 text-blue-500/70 flex-shrink-0" />
                )}
                <p className="leading-relaxed">
                  {line.replace("•", "").trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Ready to Start Your Entrepreneurial Journey?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Get in touch with our support team and explore how we can help you
            bring your ideas to life.
          </p>



          <Link
            href="/contact"
            type="button"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-500 text-white text-sm font-medium transition hover:bg-blue-600"
            aria-label="Contact Us"
          >
            {/* Contact Icon (Phone + Envelope Combo) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75l9.75 6 9.75-6M2.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25z"
              />
            </svg>

            <span className="relative">Contact Us</span>

            {/* Subtle Shine Effect */}
            <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px] pointer-events-none">
              <div className="relative h-full w-8 bg-white/30" />
            </div>
          </Link>

        </div>
      </section>


    </>
  );
};

export default EntrepreneurshipPage;
