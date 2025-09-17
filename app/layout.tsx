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

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Mohak Gupta – Portfolio",
  description: "Portfolio website of Mohak Gupta, a web3 and cybersecurity developer.",
  keywords: ["Mohak Gupta", "Portfolio", "Web3", "Cybersecurity", "Developer", "dApps", "Web Development"],
  authors: [{ name: "Mohak Gupta" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Mohak Gupta – Portfolio",
    description: "Portfolio website of Mohak Gupta, a web3 and cybersecurity developer.",
    url: "https://your-portfolio-domain.com", // replace with your domain
    siteName: "Mohak Gupta Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohak Gupta – Portfolio",
    description: "Portfolio website of Mohak Gupta, a web3 and cybersecurity developer.",
    creator: "@rushbeef04",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}