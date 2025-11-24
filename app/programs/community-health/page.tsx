import type { Metadata } from "next";
import CommunityHealthPage from "./communityhealthcontent";

export const metadata: Metadata = {
  title: "Community Health Initiative | Sona CSRI",
  description:
    "Explore Sona CSRI’s Community Health Initiative focusing on medical camps, AYUSH practices, yoga therapy, naturopathy treatments, and the Sona Health on Wheels program supporting holistic well-being.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/partners/communityHealth",
  },
  openGraph: {
    title: "Community Health Initiative | Sona CSRI",
    description:
      "Learn how Sona CSRI improves community well-being through medical camps, AYUSH practices, yoga therapy, naturopathy care, and Sona Health on Wheels outreach.",
    url: "https://csri.sonatech.ac.in/partners/communityHealth",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/community-health-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Community Health Initiative - Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Health Initiative | Sona CSRI",
    description:
      "Discover Sona CSRI’s health outreach through medical camps, AYUSH practices, yoga therapy, naturopathy solutions, and the Sona Health on Wheels initiative.",
    images: [
      "https://csri.sonatech.ac.in/images/meta/community-health-banner.jpg",
    ],
  },
};

export default function CommunityPage() {
  return <CommunityHealthPage />;
}
