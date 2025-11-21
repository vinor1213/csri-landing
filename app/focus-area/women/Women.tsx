"use client";

import ReuseBanner from "@/app/components/ReuseBanner";
import Breadcrumb from "@/app/components/Breadcrumb";
import { MdStar } from "react-icons/md";
import Image from "next/image";

const content = {
  label: "Women Empowerment Initiatives",
  images: [
    "/images/focus-area/Focus-Area-Women-Empowerment.webp",
    "/images/gallery/others/other-8.jpeg"
  ],
  description: `We empower women through targeted training, entrepreneurship support, financial literacy, and leadership development—an approach that has evolved through our successful implementation of women-focused programs in tailoring, digital literacy, and micro-enterprise promotion. Many of our trained women, including those from CSRI programs, have gone on to establish their own ventures or secure meaningful employment across various sectors. Their post-training achievements stand as milestones, reflecting the long-term impact of our commitment to inclusive and transformative livelihood development. Structured programs in tailoring, Aari work, digital literacy, and micro-enterprise creation. Partnerships with women’s SHGs to ensure sustainability for the women empowerment program.`,
  features: [
    "Skill-Oriented Training: Tailoring, Aari work, beauty therapy, and digital literacy courses exclusively for women.",
    "Entrepreneurship Support: Post-training handholding for women-led businesses in crafts, services, and food-based enterprises.",
    "Financial Literacy & Access: Guidance on savings, credit, micro-loans, and sustainable household budgeting.",
    "Women SHG Strengthening: Collaboration with SHGs to build group enterprises and provide leadership training.",
    "Leadership & Role Models: Women achievers from CSRI programs showcased as ambassadors, inspiring more participation.",
    "Sustainability Partnerships: Linking women artisans to SHGs and corporate buyers for long-term income."
  ]
};



const WomenEmpowermentPage = () => {
  return (
    <>
      {/* Banner */}
      <ReuseBanner
        image="/images/gallery/fashion-apparels/fashion-apparels-10.webp"
        title="Focus Area - women Empowerment Initiatives"
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
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left: Two Images */}
          <div className="space-y-6">
            {content.images.map((img, idx) => (
              <div key={idx} className="w-full h-80 relative  overflow-hidden shadow-md">
                <Image src={img} alt={`Women Empowerment ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Right: Text & Features */}
          <div className="space-y-6 text-gray-700">

            <p className="leading-relaxed text-justify">{content.description}</p>

            {/* Features */}
            <div className="space-y-4">
              {content.features.map((feature, i) => {
                const [title, ...desc] = feature.split(":");
                return (
                  <div key={i} className="flex items-start gap-3">
                    <MdStar className="mt-1 text-blue-500/70  flex-shrink-0 w-6 h-6" />
                    <p className="leading-relaxed">
                      <span className="font-bold">{title}:</span> {desc.join(":")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default WomenEmpowermentPage;
