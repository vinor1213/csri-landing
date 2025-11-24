// app/events/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsandeventsData } from "@/data/newsandevents";
import EventsAndNewsAnimated from "@/app/components/EventsAndNewsAnimated";

interface EventPageProps {
    params: { slug: string };
}

interface EventType {
    title: string;
    slug: string;
    startDate?: string;
    endDate?: string;
    description: string;
    imgSrc: string;
    images?: string[];
    category: string;
}

// Helper to get event by slug
function getEventBySlug(slug: string): EventType | undefined {
    for (const category in newsandeventsData) {
        const event = newsandeventsData[category].find((e) => e.slug === slug);
        if (event) return event;
    }
    return undefined;
}

// Static paths for export
export function generateStaticParams() {
    const slugs: string[] = [];

    for (const category in newsandeventsData) {
        newsandeventsData[category].forEach((event) => slugs.push(event.slug));
    }

    return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata
export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
    const event = getEventBySlug(params.slug);
    if (!event) return { title: "Event Not Found" };

    const url = `https://csri.sonatech.ac.in/events/${event.slug}`;
    const image = event.imgSrc.startsWith("http")
        ? event.imgSrc
        : `https://csri.sonatech.ac.in${event.imgSrc}`;

    return {
        title: `${event.title} | Sona CSRI – Social Impact & Community Engagement`,
        description: event.description,
        alternates: { canonical: url },
        openGraph: {
            title: `${event.title} | Sona CSRI – Social Impact & Community Engagement`,
            description: event.description,
            url,
            siteName: "Sona CSRI",
            type: "website",
            images: [{ url: image, width: 1200, height: 630, alt: event.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${event.title} | Sona CSRI – Social Impact & Community Engagement`,
            description: event.description,
            images: [image],
        },
    };
}

// Page component
export default function EventPage({ params }: EventPageProps) {
    const event = getEventBySlug(params.slug);

    if (!event) return notFound();

    const categoryKey = Object.keys(newsandeventsData).find((key) =>
        newsandeventsData[key].some((e) => e.slug === params.slug)
    );

    // Get all events of the same top-level category
    const allEvents = categoryKey ? newsandeventsData[categoryKey] : [];

    return <EventsAndNewsAnimated event={event} allEvents={allEvents} />;
}
