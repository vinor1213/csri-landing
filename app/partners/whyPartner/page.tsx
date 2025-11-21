import type { Metadata } from "next";
import WhyPartnerPages from "./WhyPartner";

export const metadata: Metadata = {
  title: "Partners | Why Partner | Sona CSRI",
  description:
    "Discover why partnering with Sona CSRI creates lasting social impact. Join hands with us to empower communities through education, sustainability, innovation, and inclusive development.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/partners/whyPartner",
  },
  openGraph: {
    title: "Partners | Why Partner | Sona CSRI",
    description:
      "Explore the benefits of partnering with Sona CSRI to drive positive change through collaborative CSR initiatives and community development programs.",
    url: "https://csri.sonatech.ac.in/partners/whyPartner",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/why-partner-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Why Partner with Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Why Partner | Sona CSRI",
    description:
      "Join forces with Sona CSRI to make a difference through meaningful CSR collaborations and sustainable community development initiatives.",
    images: [
      "https://csri.sonatech.ac.in/images/meta/why-partner-banner.jpg",
    ],
  },
};

export default function WhyPartnerPage() {
  return <WhyPartnerPages />;
}
