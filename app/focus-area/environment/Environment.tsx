"use client";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Leaf } from "lucide-react";
import { MdStar } from "react-icons/md";
import Image from "next/image";

const EnvironmentPage = () => {
  const content = {
    label: "Environment & Sustainability",
    bannerImage: "https://img.freepik.com/free-photo/cutout-paper-different-family-members-being-together_23-2148699752.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    topImage: "/images/focus-area/Focus-Area-Environment.webp",
    bottomImage: "/images/gallery/others/cut-4.JPG",
    description: `Sona places environmental stewardship at the core of its work by encouraging green practices, climate-smart livelihoods, and community participation in conserving natural resources supported by our on-ground experience in organizing plantation drives, waste management efforts, research initiations, eco-skilling campaigns, and capacity-building programs. These efforts are further reinforced by Sona R&D Centres, which have taken deep consideration of environment-focused research and engaged in renewable energy systems, climate-smart agriculture, and green technology innovations. We integrate eco-friendly practices and climate-smart solutions into community development, ensuring both awareness and hands-on green action.`,
    points: [
      {
        title: "Tree Plantation & Green Drives",
        desc: "Large-scale campus and village-level plantation programs."
      },
      {
        title: "Climate-Smart Agriculture",
        desc: "Promotion of eco-friendly farming methods, water-saving technologies, and crop diversification for resilient livelihoods."
      },
      {
        title: "Waste Management Initiatives",
        desc: "Awareness campaigns and pilot projects on segregation, composting, and plastic reduction at community level."
      },
      {
        title: "Green Technology Adoption",
        desc: "Demonstration projects on solar, wind, and bio-based energy solutions developed through Sona R&D centres."
      },
      {
        title: "Eco-Skilling",
        desc: "Training for youth and SHGs on energy efficiency, waste recycling, and sustainable community innovations."
      }
    ]
  };

  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/gallery/environment/environment-19.webp"
        title="Focus Area - Environment & Sustainability"
        subtitle="Where Responsibility Meets Community"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Focus Area", href: "/focusarea" },
          { label: content.label, href: "" },
        ]}
      />

      {/* Single Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-stretch">

          {/* Top Left: Image */}
          <div className="w-full h-full min-h-[220px] md:min-h-[260px] relative overflow-hidden shadow-md">
            <Image src={content.topImage} alt={content.label} fill className="object-cover" />
          </div>

          {/* Top Right: Description */}
          <div className="space-y-6 text-gray-700 h-full flex flex-col">
            <p className="leading-relaxed text-justify">{content.description}</p>
          </div>

          {/* Bottom Left: Points */}
          <div className="space-y-4 text-gray-700 h-full flex flex-col mt-8 md:mt-0">
            {content.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <MdStar className="mt-1 text-blue-500/70 flex-shrink-0 w-6 h-6" />
                <div>
                  <p className="font-bold">{point.title}</p>
                  <p className="leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Right: Image */}
          <div className="w-full h-full min-h-[260px] md:min-h-[300px] relative overflow-hidden shadow-md mt-8 md:mt-0">
            <Image src={content.bottomImage} alt={content.label} fill className="object-cover" />
          </div>

        </div>
      </section>

    </>
  );
};

export default EnvironmentPage;
