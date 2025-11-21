import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupNotice from "./components/Popup";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Sona CSRI – Center for Social Responsibility Initiatives",
    template: "%s | Sona CSRI",
  },
  description:
    "Sona CSRI (Center for Social Responsibility Initiatives) of Sona College of Technology drives impactful programs in education, sustainability, innovation, and entrepreneurship for community development across Tamil Nadu.",
  keywords: [
    "Sona CSRI",
    "Sona College CSR",
    "Center for Social Responsibility Initiatives",
    "Community Development",
    "Sustainability Programs",
    "Education Empowerment",
    "CSR Salem",
    "Tamil Nadu Development",
    "Sona College of Technology",
  ],
  metadataBase: new URL("https://csri.sonatech.ac.in"),
  alternates: {
    canonical: "https://csri.sonatech.ac.in",
  },
  openGraph: {
    title: "Sona CSRI – Center for Social Responsibility Initiatives",
    description:
      "Discover Sona CSRI – the Center for Social Responsibility Initiatives of Sona College of Technology, empowering communities through education, innovation, and sustainability projects.",
    url: "https://csri.sonatech.ac.in",
    siteName: "Sona CSRI",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI – Center for Social Responsibility Initiatives",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sona CSRI – Center for Social Responsibility Initiatives",
    description:
      "Empowering communities through education, sustainability, and innovation – the Center for Social Responsibility Initiatives of Sona College of Technology, Salem.",
    images: ["https://csri.sonatech.ac.in/images/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema for SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Sona CSRI – Center for Social Responsibility Initiatives",
              url: "https://csri.sonatech.ac.in",
              description:
                "Sona CSRI (Center for Social Responsibility Initiatives) drives education, entrepreneurship, and sustainability programs under Sona College of Technology, Salem.",
              parentOrganization: {
                "@type": "CollegeOrUniversity",
                name: "Sona College of Technology",
                url: "https://www.sonatech.ac.in",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Public Relations",
                email: "csri@sonatech.ac.in",
                telephone: "+91-427-4099999",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Junction Main Road",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                postalCode: "636005",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>

      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <PopupNotice />
        {children}
        <Footer />
      </body>
    </html>
  );
}
