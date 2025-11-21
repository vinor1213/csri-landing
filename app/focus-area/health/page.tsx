import type { Metadata } from "next";
import Health from "./Health";

export const metadata: Metadata = {
  title: "Focus Area | Health & Well-being | Sona CSRI",
  description:
    "Discover how Sona CSRI promotes Health & Well-being through healthcare initiatives, awareness programs, and community support to ensure a healthier society.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/focus-area/health",
  },
  openGraph: {
    title: "Focus Area | Health & Well-being | Sona CSRI",
    description:
      "Sona CSRI’s Health & Well-being programs focus on community healthcare, preventive care, mental health awareness, and wellness education for sustainable living.",
    url: "https://csri.sonatech.ac.in/focus-area/health",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/health-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Health & Well-being Initiatives by Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Health & Well-being | Sona CSRI",
    description:
      "Explore Sona CSRI’s initiatives for community health, wellness, and preventive healthcare supporting sustainable and healthy living.",
    images: ["https://csri.sonatech.ac.in/images/meta/health-banner.jpg"],
  },
};

export default function HealthPage() {
  return <Health />;
}
