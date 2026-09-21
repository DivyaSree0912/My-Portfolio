import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/layout/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dadi Divya Sree — Software Engineer · AI/ML",
    template: "%s — Dadi Divya Sree",
  },
  description: site.statement,
  keywords: [
    "Dadi Divya Sree",
    "Software Engineer",
    "AI/ML",
    "Computer Vision",
    "GITAM University",
    "OdTect",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    title: "Dadi Divya Sree — Software Engineer · AI/ML",
    description: site.statement,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dadi Divya Sree — Software Engineer · AI/ML",
    description: site.statement,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  email: site.email,
  jobTitle: "Software Engineer",
  description: site.statement,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "GITAM University",
  },
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F5F0EB] font-sans text-[#1A1A1A]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
