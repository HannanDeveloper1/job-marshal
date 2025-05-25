import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/utils/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobMarshal | Find your dream job | Hire the best talent",
  description: "Find your dream job | Hire the best talent | JobMarshal",
  openGraph: {
    title: "JobMarshal",
    description: "Find your dream job | Hire the best talent | JobMarshal",
    url: "https://jobmarshal-hannandev.vercel.app",
    siteName: "JobMarshal",
    images: [
      {
        url: "https://jobmarshal-hannandev.vercel.app/logo.png",
        width: 512,
        height: 512,
        alt: "JobMarshal - Find your dream job | Hire the best talent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobMarshal",
    description: "Find your dream job | Hire the best talent | JobMarshal",
    images: ["https://jobmarshal-hannandev.vercel.app/logo.png"],
    creator: "@hannandev01",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false, // Allow caching
    googleBot: {
      index: true,
      follow: true,
      nocache: false, // Allow caching for Googlebot
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  keywords: [
    "job search",
    "job opportunities",
    "hiring",
    "career",
    "employment",
    "job listings",
    "remote jobs",
    "job board",
    "job portal",
    "find a job",
    "job openings",
    "job vacancies",
    "job applications",   
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
