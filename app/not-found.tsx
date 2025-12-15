"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Home } from "lucide-react";

// Note: Next.js automatically adds noindex to 404 pages
export default function NotFound() {
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route");
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="text-center px-6">
                <h1 className="mb-4 text-6xl md:text-8xl font-bold text-tan">404</h1>
                <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-foreground">
                    Page Not Found
                </h2>
                <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-tan hover:bg-tan-dark text-white px-6 py-3 rounded-lg transition-colors shadow-elegant"
                >
                    <Home className="h-5 w-5" />
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
