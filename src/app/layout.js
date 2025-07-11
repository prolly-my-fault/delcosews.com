import { inter, crimsonPro, caveat, roboto } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";

export const metadata = {
  title: "DelcoSEWS - Community Sewing & Craft Group",
  description: "Join DelcoSEWS, Delaware County's premier sewing and craft community. Connect with fellow creators, share projects, and learn new skills.",
  keywords: ["sewing", "crafts", "community", "Delaware County", "handmade", "DIY"],
  authors: [{ name: "DelcoSEWS" }],
  creator: "DelcoSEWS",
  publisher: "DelcoSEWS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://delcosews.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DelcoSEWS - Community Sewing & Craft Group",
    description: "Join DelcoSEWS, Delaware County's premier sewing and craft community.",
    url: "https://delcosews.com",
    siteName: "DelcoSEWS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DelcoSEWS - Community Sewing & Craft Group",
    description: "Join DelcoSEWS, Delaware County's premier sewing and craft community.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimsonPro.variable} ${caveat.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
