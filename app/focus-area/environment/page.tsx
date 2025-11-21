import type { Metadata } from "next";
import Environment from "./Environment";

export const metadata: Metadata = {
  title: "Focus Area | Environment & Sustainability | Sona CSRI",
  description:
    "Explore Sona CSRI’s Environment & Sustainability initiatives that focus on conserving nature, promoting renewable energy, and building a greener future for communities.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/focus-area/environment",
  },
  openGraph: {
    title: "Focus Area | Environment & Sustainability | Sona CSRI",
    description:
      "Sona CSRI works towards environmental conservation, tree plantation, renewable energy adoption, and waste management to create a sustainable planet.",
    url: "https://csri.sonatech.ac.in/focus-area/environment",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/environment-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Environment & Sustainability Initiatives by Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Environment & Sustainability | Sona CSRI",
    description:
      "Learn how Sona CSRI promotes environmental responsibility through sustainability programs, renewable energy use, and waste reduction initiatives.",
    images: ["https://csri.sonatech.ac.in/images/meta/environment-banner.jpg"],
  },
};

export default function EnvironmentPage() {
  return <Environment />;
}
