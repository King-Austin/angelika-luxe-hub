import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.deangelika.com.ng';
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Add more routes here as the site grows
        // Example:
        // {
        //   url: `${baseUrl}/services`,
        //   lastModified: currentDate,
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ];
}
