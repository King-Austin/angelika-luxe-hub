import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = 'https://deangelika.com.ng';
const siteName = 'De Angelika Beauty Lounge';
const siteDescription = 'Premium beauty and grooming services in Nigeria. Expert haircuts, luxury braids, professional nails, makeup artistry, and beard grooming. Book your appointment today.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Premium Beauty & Grooming Services in Nigeria`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'beauty salon Nigeria',
    'hair salon Lagos',
    'professional haircut',
    'luxury braids',
    'nail salon',
    'makeup artist',
    'beard grooming',
    'beauty lounge',
    'De Angelika',
    'Nigerian beauty services',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Premium Beauty & Grooming Services in Nigeria`,
    description: siteDescription,
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: `${siteName} - Beauty Salon`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Premium Beauty & Grooming Services`,
    description: siteDescription,
    images: ['/preview.jpg'],
    creator: '@de_angelikabeautylounge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Beauty & Personal Care',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
