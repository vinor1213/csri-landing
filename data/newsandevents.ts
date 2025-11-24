
export interface EventType {
    title: string;
    slug: string;
    startDate?: string;  // optional
    endDate?: string;
    description: string;
    imgSrc: string; // main image
    images?: string[];  // extra images
    category: string;
    showfront?: boolean; // optional
}


export const newsandeventsData: Record<string, EventType[]> = {

    upcoming: [
        {
            title: "Inauguration Ceremony of Artificial Jewellery Designer (Terracotta)",
            slug: "inauguration-ceremony-artificial-jewellery-designer-terracotta",
            startDate: "2025-12-05",
            endDate: "2025-12-05",
            description:
                "This programme marks an exciting beginning for aspiring artisans stepping into the world of creative craftsmanship. This initiative empowers participants with hands-on skills to design unique, eco-friendly terracotta jewellery that blends tradition with modern fashion trends. With inspiring messages from dignitaries, the ceremony celebrates creativity, skill development, and the promise of transforming artistic passion into meaningful livelihoods.",
            imgSrc: "/images/events-news/Jewellery-Designer.webp",
            images: ["/images/events-news/Jewellery-Designer.webp"],
            category: "Upcoming Events",
            showfront: true,
        },
        {
            title: "Commencement of Multi Skilled Garment Technician",
            slug: "commencement-multi-skilled-garment-technician",
            startDate: "2025-12-01",
            endDate: "2025-12-01",
            description:
                "SAIL Salem Steel Plant sponsored Multi Skilled Garment Technician programme proudly launches a transformative skill development initiative designed to uplift aspiring entrepreneurs. This event showcases SRCL’s commitment to empowering women and youth with professional tailoring expertise that opens doors to income generation and self-employment.",
            imgSrc: "/images/events-news/Multi-Skilled-Garment-Technician.webp",
            images: ["/images/events-news/Multi-Skilled-Garment-Technician.webp"],
            category: "Upcoming Events",
            showfront: true,
        },
    ],

    News: [
        {
            title: "Inauguration Ceremony of SRCL Self Employed Tailor",
            slug: "inauguration-ceremony-self-employed-tailor",
            startDate: "2025-11-19",
            endDate: "2025-11-19",
            description:
                "The Inauguration Ceremony of the SRCL Self Employed Tailor programme proudly launches a transformative skill development initiative designed to uplift aspiring entrepreneurs. This event showcases SRCL’s commitment to empowering women and youth with professional tailoring expertise that opens doors to income generation and self-employment. With insightful addresses from dignitaries and a strong focus on community impact, the ceremony inspires participants to embark confidently on their journey toward financial independence and creative enterprise.",
            imgSrc: "/images/newsandevents/news-1.webp",
            images: ["/images/newsandevents/news-1.webp"],
            category: "News",
            showfront: true,
        },
        {
            title: "Launch of Sona Health on Wheels – Naturopathy Focused",
            slug: "launch-sona-health-on-wheels",
            startDate: "2025-11-17",
            endDate: "2025-11-17",
            description:
                "The prestigious launch of “Sona Health on Wheels,” graced by the Hon’ble Tourism Minister, marks a visionary step in delivering holistic healthcare directly to communities. This state-of-the-art mobile wellness unit brings naturopathy, yoga therapy, lifestyle counselling, and health awareness to underserved regions. This pioneering effort integrates traditional healing with modern outreach, transforming rural wellness.",
            imgSrc: "/images/newsandevents/news-2.webp",
            images: ["/images/newsandevents/news-2.webp"],
            category: "News",
        },
    ],

    past: [
        {
            title: "Valedictory Ceremony of Self Supportive Course (Aari & Beauty Therapist)",
            slug: "valedictory-ceremony-aari-beauty-therapist",
            startDate: "",
            endDate: "",
            description:
                "The Valedictory Ceremony celebrates the outstanding achievements of participants who have successfully completed the Self-Supportive Courses in Aari Work and Beauty Therapy. This vibrant event highlights their creativity, talent, and dedication to mastering high-demand skills.",
              imgSrc: "/images/newsandevents/Valedictory-1.JPG",
            images: ["/images/gallery/Fashion-Apparels/fashion-apparels-11.webp"],
            category: "Past Events",
            showfront: true,
        },
        {
            title: "Certificate Distribution Ceremony of Self Employed Tailor and Domestic Data Entry Operator",
            slug: "certificate-distribution-tailor-data-entry",
            startDate: "",
            endDate: "",
            description:
                "This celebratory ceremony honors the newly skilled graduates of the Self Employed Tailor and Domestic Data Entry Operator programmes, showcasing their readiness to step into workspaces or begin self-driven careers.",
            imgSrc: "/images/newsandevents/self-1.webp",
            images: ["/images/gallery/Fashion-Apparels/fashion-apparels-21.webp"],
            category: "Past Events",
        },
        {
            title: "Certificate Distribution Ceremony of 7 different Skill Development Programmes",
            slug: "certificate-distribution-seven-skill-programmes",
            startDate: "",
            endDate: "",
            description:
                "The Certificate Distribution Ceremony brings together achievers from seven diverse Skill Development Programmes, celebrating their commitment to building future-ready careers and empowering individuals with industry-relevant expertise.",
             imgSrc: "/images/newsandevents/skill-1.webp",
            images: ["/images/gallery/Fashion-Apparels/fashion-apparels-20.webp"],
            category: " Past Events",
            showfront: true,
        },
        {
            title: "FDP – AI in Naturopathy and AYUSH",
            slug: "fdp-ai-naturopathy-ayush",
            startDate: "2025-11-21",
            endDate: "2025-11-21",
            description:
                "The Faculty Development Program on “AI in Naturopathy and AYUSH” presents an exciting platform for educators to explore the future of traditional healthcare enhanced by cutting-edge technologies.",
            imgSrc: "/images/newsandevents/past-1.webp",
            images: ["/images/gallery/health/health1-12.webp"],
            category: "Past Events",
            showfront: true,
        },
        {
            title: "Naturopathy Medical Camp for School Students",
            slug: "naturopathy-medical-camp-school-students",
            startDate: "2025-02-22",
            endDate: "2025-02-22",
            description:
                "The Naturopathy Medical Camp encourages students to adopt healthy, natural, preventive wellness practices through yoga sessions, nutrition guidance, health screenings and fun learning.",
            imgSrc: "/images/gallery/health/health1-15.webp",
            images: ["/images/gallery/health/health1-15.webp"],
            category: " Past Events",
            showfront: true,
        },
        {
            title: "Career Guidance Program",
            slug: "career-guidance-program",
            startDate: "2025-02-25",
            endDate: "2025-02-25",
            description:
                "The Career Guidance Program empowers students by introducing emerging career trends, in-demand skills, scholarship routes, and industry expectations.",
            imgSrc: "/images/newsandevents/past-2.webp",
            images: ["/images/gallery/Fashion-Apparels/fashion-apparels-26.webp"],
            category: " Past Events",
        },
    ],
};

