import type { Metadata } from "next";
import EventsPage from "./EventsContent";

export const metadata: Metadata = {
    title: "Events | Sona CSRI – Social Impact & Community Engagement",
    description:
        "Stay updated with Sona CSRI’s latest events, CSR activities, and community engagement programs that foster sustainable and inclusive growth.",
    alternates: {
        canonical: "https://csri.sonatech.ac.in/events",
    },
    openGraph: {
        title: "Events | Sona CSRI – Social Impact & Community Engagement",
        description:
            "Explore recent CSR events, awareness drives, and sustainability initiatives by Sona CSRI.",
        url: "https://csri.sonatech.ac.in/events",
        siteName: "Sona CSRI",
        type: "website",
        images: [
            {
                url: "https://csri.sonatech.ac.in/images/meta/events-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Sona CSRI Events and CSR Activities",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Events | Sona CSRI – Social Impact & Community Engagement",
        description:
            "Get insights into Sona CSRI’s latest events and programs that empower communities and drive social progress.",
        images: ["https://csri.sonatech.ac.in/images/meta/events-banner.jpg"],
    },
};

export default function Events() {
    return <EventsPage />;
}
