"use client";

import { useEffect, useState } from 'react';

export default function OrganizationSchema() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const organizationSchema = mounted ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "De Angelika Beauty Lounge",
        "alternateName": "De Angelika",
        "url": window.location.origin,
        "logo": `${window.location.origin}/preview.jpg`,
        "description": "Premium beauty and grooming services in Nigeria. Expert haircuts, luxury braids, professional nails, makeup artistry, and beard grooming.",
        "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
        },
        "sameAs": [
            "https://www.instagram.com/de_angelikabeautylounge",
            "https://www.tiktok.com/@de_angelikabeautylounge",
            "https://wa.me/2349138616079"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-913-861-6079",
            "email": "deangelikabl@gmail.com",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
        },
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "After Ifite School Gate, Opposite Old Fayrouz",
                "addressLocality": "Ifite Awka",
                "addressRegion": "Anambra State",
                "addressCountry": "NG"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "No 152 Divine Plaza, 2nd Market/School road, Opposite NedKing Pharmacy & Stores",
                "addressLocality": "Ifite Awka",
                "addressRegion": "Anambra State",
                "addressCountry": "NG"
            }
        ]
    } : null;

    if (!mounted || !organizationSchema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
