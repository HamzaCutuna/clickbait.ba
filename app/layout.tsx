import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clickbait - Web dizajn Sarajevo | Moderne web stranice BiH | SEO agencija",
  description: "Web dizajn Sarajevo i BiH - Izrada modernih, responzivnih web stranica i SEO optimizacija za bolje Google pozicije. Kontaktirajte nas za besplatnu konsultaciju!",
  keywords: "web dizajn, web dizajn Sarajevo, web stranice BiH, izrada web stranica, SEO optimizacija, digitalni marketing, Bosna i Hercegovina, web agencija, web development",
  authors: [{ name: "Clickbait Agency" }],
  creator: "Clickbait",
  publisher: "Clickbait",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="bs_BA" />
        <meta property="og:title" content="Clickbait - Web dizajn Sarajevo | Moderne web stranice BiH | SEO agencija" />
        <meta property="og:description" content="Web dizajn Sarajevo i BiH - Izrada modernih, responzivnih web stranica i SEO optimizacija za bolje Google pozicije. Kontaktirajte nas za besplatnu konsultaciju!" />
        <meta property="og:url" content="https://www.clickbait.ba/" />
        <meta property="og:site_name" content="Clickbait" />
        <meta property="og:image" content="/images/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clickbait - Web dizajn Sarajevo | Moderne web stranice BiH | SEO agencija" />
        <meta name="twitter:description" content="Web dizajn Sarajevo i BiH - Izrada modernih, responzivnih web stranica i SEO optimizacija za bolje Google pozicije. Kontaktirajte nas za besplatnu konsultaciju!" />
        <meta name="twitter:image" content="/images/cover.png" />
        <link rel="canonical" href="https://www.clickbait.ba/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" as="style" />
        {/* LocalBusiness Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Clickbait',
            image: 'https://www.clickbait.ba/images/logo.png',
            url: 'https://www.clickbait.ba/',
            telephone: '+38761496745',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sarajevo',
              addressLocality: 'Sarajevo',
              addressRegion: 'FBiH',
              postalCode: '71000',
              addressCountry: 'BA',
            },
            description: 'Web dizajn Sarajevo i BiH - Izrada modernih, responzivnih web stranica i SEO optimizacija za bolje Google pozicije.',
            areaServed: ['Bosna i Hercegovina', 'Sarajevo', 'Balkan'],
            sameAs: [
              'https://www.facebook.com/clickbait.ba',
              'https://www.instagram.com/clickbait.ba',
            ],
          })
        }} />
      </Head>
      <body className={`${inter.variable} antialiased font-inter`}>
        {children}
      </body>
    </html>
  );
}
