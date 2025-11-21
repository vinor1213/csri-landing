"use client";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { Home } from "lucide-react";
import { MdStar } from "react-icons/md";
import Image from "next/image";

const VillageAdoptionPage = () => {
  const content = {
    label: "Village Adoption",
    bannerImage: "https://img.freepik.com/free-photo/diverse-people-refugee-camps_23-2151561486.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
    description: `Through integrated development models, we adopt and support villages with interventions in skilling, healthcare, environment, and technology—drawing from our practical work in improving education, sanitation, and income opportunities in selected rural communities. Under the Unnat Bharat Abhiyan scheme, we have adopted villages such as Kanderkula Manickam in the Mac'Donald Choultry (Magudanchavadi) Block and Thalavaipatty in the Salem Block, where our focused efforts in livelihood empowerment have fostered self-reliance through vocational training, micro-enterprise promotion, and community-based resource planning. Comprehensive interventions covering waste management and skill training, and women’s empowerment.`,
    points: [
      {
        title: "Holistic Development Models",
        desc: "Integrated interventions in skilling, health, education, and sanitation."
      },
      {
        title: "Unnat Bharat Abhiyan Villages",
        desc: "Magudanchavadi & Thalavaipatty adopted for structured development."
      },
      {
        title: "Livelihood Empowerment",
        desc: "Vocational training and micro-enterprise promotion tailored to local needs."
      },
      {
        title: "Infrastructure Support",
        desc: "Digital literacy labs, improved sanitation, and renewable energy demonstrations."
      },
      {
        title: "Community Participation",
        desc: "Strong engagement of Panchayats, SHGs, and local youth ensures ownership and sustainability of projects."
      }
    ],
    images: [
      "/images/focus-area/Awareness-on-Solid-Waste-Management.webp",
      "/images/focus-area/Awareness-SafetyMeasures.webp"
    ]
  };

  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/gallery/gramasabha/gramasabha-7.webp"
        title="Focus Area - Village Adoption"
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

      {/* Main Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-start">

          {/* Left: Description + Points */}
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed text-justify">{content.description}</p>

            <div className="space-y-4">
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
          </div>

          {/* Right: Two images stacked */}
          <div className="flex flex-col gap-6 w-full">

            {/* TOP IMAGE */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden shadow-md">
              <Image
                src={content.images[0]}
                alt="Village Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* BOTTOM IMAGE */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden shadow-md">
              <Image
                src={content.images[1]}
                alt="Village Image 2"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default VillageAdoptionPage;
