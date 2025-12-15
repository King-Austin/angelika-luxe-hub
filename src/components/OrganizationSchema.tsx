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
            "https://wa.link/d6h7io"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English"]
        }
    } : null;

    if (!mounted || !organizationSchema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
