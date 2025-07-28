import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://clickbait.ba'),
  title: "Clickbait - Moderne Web Stranice | Profesionalni Web Development",
  description: "Specijalizovani smo za kreiranje modernih, responzivnih web stranica. SEO optimizacija, branding i dizajn koji donosi rezultate. Zatraži besplatnu konsultaciju.",
  keywords: "web stranice, web development, SEO optimizacija, responzivni dizajn, branding, Sarajevo, Bosna i Hercegovina",
  authors: [{ name: "Clickbait" }],
  creator: "Clickbait",
  publisher: "Clickbait",
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
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://clickbait.ba',
    siteName: 'Clickbait',
    title: 'Clickbait - Moderne Web Stranice',
    description: 'Kreiranje modernih web stranica koji donose rezultate',
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
        alt: 'Clickbait - Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clickbait - Moderne Web Stranice',
    description: 'Kreiranje modernih web stranica koji donose rezultate',
    images: ['/images/cover.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0B3C41" />
        <meta name="msapplication-TileColor" content="#0B3C41" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${manrope.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
