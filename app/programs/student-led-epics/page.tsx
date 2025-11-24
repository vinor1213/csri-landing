import type { Metadata } from "next";
import Studentled from "./studentledcontent";

export const metadata: Metadata = {
  title: "Student-led EPICS Initiative | Sona CSRI",
  description:
    "Explore how the EPICS (Engineering Projects in Community Service) initiative empowers students at Sona CSRI to design sustainable, technology-driven solutions in collaboration with Purdue University. Discover impactful student innovations such as protective garments for sewage workers and assistive devices for the visually impaired.",
  alternates: {
    canonical: "https://csri.sonatech.ac.in/programs/epics-initiative",
  },
  openGraph: {
    title: "Student-led EPICS Initiative | Sona CSRI",
    description:
      "Learn about Sona CSRI’s EPICS initiative where students create real-world, community-focused engineering solutions. Featuring innovations in renewable energy, assistive technology, and safety equipment.",
    url: "https://csri.sonatech.ac.in/programs/epics-initiative",
    type: "website",
    images: [
      {
        url: "https://csri.sonatech.ac.in/images/meta/epics-initiative-banner.jpg",
        width: 1200,
        height: 630,
        alt: "EPICS – Engineering Projects in Community Service at Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student-led EPICS Initiative | Sona CSRI",
    description:
      "Discover how Sona CSRI’s EPICS program enables students to solve real-world social challenges through engineering innovation and community service.",
    images: [
      "https://csri.sonatech.ac.in/images/meta/epics-initiative-banner.jpg",
    ],
  },
};

export default function StudentEPICS() {
  return <Studentled />;
}
