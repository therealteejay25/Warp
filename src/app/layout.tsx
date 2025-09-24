import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warp01.vercel.app"),
  title: {
    default: "Warp",
    template: "%s | Warp",
  },
  description:
    "Warp is an AI-driven studio offering services, pricing plans, and testimonials.",
  keywords: [
    "Warp",
    "AI studio",
    "AI services",
    "design",
    "development",
    "pricing",
  ],
  authors: [{ name: "Warp" }],
  creator: "Warp",
  publisher: "Warp",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://warp01.vercel.app/",
    siteName: "Warp",
    title: "Warp",
    description:
      "Warp is an AI-driven studio offering services, pricing plans, and testimonials.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warp",
    description:
      "Warp is an AI-driven studio offering services, pricing plans, and testimonials.",
    creator: "@warp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large", // <--- fixed kebab-case
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/warp..svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
