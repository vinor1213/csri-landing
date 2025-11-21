import type { Metadata } from "next";
import ReportsPage from "./ReportsPage";

export const metadata: Metadata = {
  title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
  description:
    "Explore Sona CSRI’s annual reports and publications showcasing our impact, CSR initiatives, sustainability progress, and community development results.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/reports",
  },
  openGraph: {
    title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
    description:
      "Download and read Sona CSRI’s yearly reports highlighting our achievements in education, sustainability, and community welfare.",
    url: "https://csri.sonatech.ac.in/reports",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/reports-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Annual Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
    description:
      "Access detailed reports from Sona CSRI outlining our CSR programs, sustainability goals, and social impact stories.",
    images: ["https://csri.sonatech.ac.in/images/meta/reports-banner.jpg"],
  },
};

export default function Reports() {
  return <ReportsPage />;
}
