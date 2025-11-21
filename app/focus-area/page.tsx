"use client";
import ReuseBanner from "../components/ReuseBanner";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, HeartPulse, Leaf, Home, Users, Rocket } from "lucide-react";

const focusAreas = [
  {
    id: "skill",
    label: "Skill Development",
    icon: <BookOpen className="w-6 h-6" />,
    image:
      "https://img.freepik.com/premium-photo/organize-portrayal-rehabilitation-workshop-individuals-affected-by-leprosy_950002-463151.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "health",
    label: "Health & Well-being",
    icon: <HeartPulse className="w-6 h-6" />,
    image:
      "https://img.freepik.com/premium-photo/photo-shoot-depicting-medical-outreach-program-remote-village-world-leprosy-day_950002-464638.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "environment",
    label: "Environment & Sustainability",
    icon: <Leaf className="w-6 h-6" />,
    image:
      "https://img.freepik.com/premium-photo/teacher-students-learning-about-sustainable-agriculture_198067-121071.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "village",
    label: "Village Adoption",
    icon: <Home className="w-6 h-6" />,
    image:
      "https://img.freepik.com/premium-photo/poor-farmer-little-child-holding-handmade-home-hand_75648-3090.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "women",
    label: "Women Empowerment",
    icon: <Users className="w-6 h-6" />,
    image:
      "https://img.freepik.com/free-photo/group-workers-organizing-protest_23-2151546451.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship Support",
    icon: <Rocket className="w-6 h-6" />,
    image:
      "https://img.freepik.com/premium-photo/young-indian-agronomist-officer-visiting-farmer-his-farm_54391-5389.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
  },
];

const FocusAreaIndex = () => {
  return (
    <>
      <ReuseBanner
        image="https://img.freepik.com/free-photo/cutout-paper-different-family-members-being-together_23-2148699752.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80"
        title="Focus Area"
        subtitle="Where Responsibility Meets Community"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focus-area" },
          { label: "" },
        ]}
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Focus Areas of Working
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
              <Link
                key={area.id}
                href={`/focus-area/${area.id}`}
                className="group block  overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={area.image}
                    alt={area.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex items-center gap-3">
                  {area.icon}
                  <h3 className="text-lg font-semibold">{area.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusAreaIndex;
