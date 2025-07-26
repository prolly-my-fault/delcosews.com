import { inter, crimsonPro, caveat, roboto } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";

export const metadata = {
  title: "delcoSEWS - Where we learn, create and inspire the magic of sewing!",
  description: "Where we learn, create and inspire the magic of sewing! Connect with fellow creators, share projects, and learn new skills.",
  icons: {
    icon: '/favicon.svg',
  },
  keywords: ["sewing", "crafts", "community", "Delaware County", "handmade", "DIY"],
  authors: [{ name: "delcoSEWS" }],
  creator: "delcoSEWS",
  publisher: "delcoSEWS",
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
    title: "delcoSEWS - Community Sewing & Craft Group",
    description: "Join delcoSEWS, where we learn, create and inspire the magic of sewing!",
    url: "https://delcosews.com",
    siteName: "delcoSEWS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "delcoSEWS - Community Sewing & Craft Group",
    description: "Join delcoSEWS, where we learn, create and inspire the magic of sewing!",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${crimsonPro.variable} ${caveat.variable} ${roboto.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `
        }} />
        <Header />
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
