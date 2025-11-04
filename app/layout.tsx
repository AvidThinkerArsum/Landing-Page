import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arsum Chaudhary | AI Engineer & Product Builder",
  description: "AI Engineer & Product Builder turning ideas into systems that scale",
  keywords: ["AI Engineer", "Product Builder", "Software Engineer", "Machine Learning", "Product Development"],
  authors: [{ name: "Arsum Chaudhary" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Arsum Chaudhary | AI Engineer & Product Builder",
    description: "AI Engineer & Product Builder turning ideas into systems that scale",
    url: "https://arsumnc.com",
    siteName: "Arsum Chaudhary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arsum Chaudhary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsum Chaudhary | AI Engineer & Product Builder",
    description: "AI Engineer & Product Builder turning ideas into systems that scale",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
