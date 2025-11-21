import type { Metadata } from "next";
import Village from "./Village";

export const metadata: Metadata = {
  title: "Focus Area | Village Adoption | Sona CSRI",
  description:
    "Discover Sona CSRI’s Village Adoption initiatives that foster rural development through education, healthcare, skill training, and sustainable livelihood programs.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/focus-area/village",
  },
  openGraph: {
    title: "Focus Area | Village Adoption | Sona CSRI",
    description:
      "Sona CSRI’s Village Adoption Program empowers rural communities through education, healthcare access, digital literacy, and sustainable livelihoods.",
    url: "https://csri.sonatech.ac.in/focus-area/village",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/village-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Village Adoption Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Village Adoption | Sona CSRI",
    description:
      "Learn how Sona CSRI’s Village Adoption initiative strengthens rural communities through education, healthcare, and sustainable development programs.",
    images: ["https://csri.sonatech.ac.in/images/meta/village-banner.jpg"],
  },
};

export default function VillagePage() {
  return <Village />;
}
