import type { Metadata } from "next";
import GalleryPage from "./GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Sona CSRI – Showcasing Social Impact Initiatives",
  description:
    "Explore Sona CSRI’s gallery featuring moments from our CSR projects, community outreach programs, and sustainability initiatives.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/gallery",
  },
  openGraph: {
    title: "Gallery | Sona CSRI – Showcasing Social Impact Initiatives",
    description:
      "Discover photos and highlights from Sona CSRI’s impactful CSR activities and community development programs.",
    url: "https://csri.sonatech.ac.in/gallery",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/gallery-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI CSR Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Sona CSRI – Showcasing Social Impact Initiatives",
    description:
      "A visual journey through Sona CSRI’s CSR programs, events, and sustainability projects.",
    images: ["https://csri.sonatech.ac.in/images/meta/gallery-banner.jpg"],
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
