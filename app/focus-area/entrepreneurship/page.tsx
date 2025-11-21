import type { Metadata } from "next";
import Entrepreneurship from "./Entrepreneurship";

export const metadata: Metadata = {
  title: "Focus Area | Entrepreneurship Support | Sona CSRI",
  description:
    "Discover how Sona CSRI fosters entrepreneurship through innovation, skill development, and mentoring — empowering individuals to build sustainable enterprises and social impact ventures.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/focus-area/entrepreneurship",
  },
  openGraph: {
    title: "Focus Area | Entrepreneurship Support | Sona CSRI",
    description:
      "Learn how Sona CSRI supports entrepreneurship and innovation through incubation, training, and capacity-building initiatives for sustainable community development.",
    url: "https://csri.sonatech.ac.in/focus-area/entrepreneurship",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/entrepreneurship-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Entrepreneurship Support Initiatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Entrepreneurship Support | Sona CSRI",
    description:
      "Explore Sona CSRI’s entrepreneurship programs that nurture innovation, startups, and small business growth through mentoring and training.",
    images: [
      "https://csri.sonatech.ac.in/images/meta/entrepreneurship-banner.jpg",
    ],
  },
};

export default function EntrepreneurshipPage() {
  return <Entrepreneurship />;
}
