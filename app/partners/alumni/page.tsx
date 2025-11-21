import type { Metadata } from "next";
import Alumni from "./Alumni";

export const metadata: Metadata = {
  title: "Partners | Alumni Partnerships | Sona CSRI",
  description:
    "Reconnect and collaborate with Sona CSRI as an alumnus to drive impactful social responsibility initiatives and community development programs.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/partners/alumni",
  },
  openGraph: {
    title: "Partners | Alumni Partnerships | Sona CSRI",
    description:
      "Join Sona CSRI’s Alumni network to contribute towards meaningful CSR initiatives and empower communities through your expertise and support.",
    url: "https://csri.sonatech.ac.in/partners/alumni",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/alumni-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Alumni Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Alumni Partnerships | Sona CSRI",
    description:
      "Reconnect with Sona CSRI to support transformative CSR initiatives and sustainable community development.",
    images: ["https://csri.sonatech.ac.in/images/meta/alumni-banner.jpg"],
  },
};

export default function AlumniPage() {
  return <Alumni />;
}
