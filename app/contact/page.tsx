import ContactSection from "./ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sona CSRI – Center for Social Responsibility Initiatives",
  description:
    "Get in touch with Sona CSRI – the Center for Social Responsibility Initiatives of Sona College of Technology. Reach out for collaborations, support, and partnership opportunities in community development and sustainability.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/contact",
  },
  openGraph: {
    title: "Contact | Sona CSRI – Center for Social Responsibility Initiatives",
    description:
      "We’re here to connect! Reach Sona CSRI for collaborations, community engagement, and social responsibility projects that drive positive change.",
    url: "https://csri.sonatech.ac.in/contact",
    siteName: "Sona CSRI",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sona CSRI – Sona College of Technology",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sona CSRI – Center for Social Responsibility Initiatives",
    description:
      "Connect with Sona CSRI for collaborations and community development programs under the Center for Social Responsibility Initiatives, Sona College of Technology.",
    images: ["https://csri.sonatech.ac.in/images/og-contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
