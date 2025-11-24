import type { Metadata } from "next";
import ResearchProjects from "./researchprojectcontent";

export const metadata: Metadata = {
  title: "Research Projects for Communities | Sona CSRI",
  description:
    "Explore community-focused research initiatives at Sona CSRI supported by DST, AICTE, SIDBI, ICSSR, UGC, and BIRAC. Discover participatory research projects on climate-smart agriculture, women's empowerment, tribal livelihoods, renewable energy, and technology-enabled rural development.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/programs/research-projects",
  },
  openGraph: {
    title: "Research Projects for Communities | Sona CSRI",
    description:
      "Discover impactful community-oriented research initiatives from Sona CSRI, including projects on livelihood enhancement, women entrepreneurship, renewable energy, ICT innovations, and social development.",
    url: "https://csri.sonatech.ac.in/programs/research-projects",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/research-projects-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Community-based Research Projects at Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Projects for Communities | Sona CSRI",
    description:
      "Learn how Sona CSRI advances community-driven research across sustainability, rural development, assistive technologies, and women empowerment.",
    images: [
      "https://csri.sonatech.ac.in/images/meta/research-projects-banner.jpg",
    ],
  },
};

export default function ResearchProjectsPage() {
  return <ResearchProjects />;
}
