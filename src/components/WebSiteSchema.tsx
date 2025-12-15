"use client";

import { useEffect, useState } from 'react';

export default function WebSiteSchema() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const websiteSchema = mounted ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "De Angelika Beauty Lounge",
        "alternateName": "De Angelika",
        "url": window.location.origin,
        "description": "Premium beauty and grooming services in Nigeria",
        "publisher": {
            "@type": "Organization",
            "name": "De Angelika Beauty Lounge"
        },
        "inLanguage": "en-NG"
    } : null;

    if (!mounted || !websiteSchema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
    );
}
