"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, PersonIcon, ArrowLeftIcon, StarIcon, BarChartIcon, GlobeIcon, CopyIcon } from "@radix-ui/react-icons";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { CTASection } from "@/app/components/CTASection";
// SVGs for Facebook and WhatsApp
const FacebookIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src="/facebook.svg" alt="Facebook" {...props} />
);
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.7c1.87 1.02 3.98 1.56 6.24 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm6.98 18.13c-.29.81-1.7 1.59-2.34 1.69-.6.09-1.36.13-2.19-.14-.5-.16-1.14-.37-1.97-.73-3.47-1.5-5.74-5.01-5.92-5.25-.17-.23-1.41-1.88-1.41-3.59 0-1.71.9-2.55 1.22-2.89.29-.3.77-.44 1.23-.44.15 0 .28.01.4.01.35.01.52.02.75.58.29.7.99 2.41 1.08 2.59.09.18.15.4.03.63-.11.23-.17.37-.33.57-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.85 1.41 1.83 2.29 1.26 1.13 2.32 1.48 2.65 1.65.33.17.52.14.71-.08.19-.22.81-.94 1.03-1.26.22-.32.43-.27.72-.16.29.11 1.84.87 2.15 1.03.31.16.52.24.6.37.08.13.08.75-.21 1.56z"/></svg>
);

export default function SeoOptimizacija() {
  const [copied, setCopied] = useState(false);
  const articleUrl = typeof window !== "undefined" ? window.location.href : "";
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const post = {
    id: 2,
    title: "SEO: Vodič za bolje rangiranje na Google-u",
    excerpt: "Otkrijte tajne SEO optimizacije koje će vašu web stranicu postaviti na vrh Google pretrage. Saznajte kako optimizirati web stranicu za bolje rangiranje i kako to može utjecati na vaše poslovne rezultate.",
    content: [
      {
        type: "paragraph",
        text: "SEO (Search Engine Optimization) je proces optimizacije web stranice kako bi se povećala vidljivost na Google-u i drugim pretraživačima. To je jedan od najvažnijih faktora za uspjeh online poslovanja. Saznajte kako optimizirati web stranicu za bolje rangiranje i kako to može utjecati na vaše poslovne rezultate."
      },
      {
        type: "image",
        src: "/images/seo1.jpeg",
        alt: "Chart sa rezultatima SEO optimizacije",
        caption: "Analitika i praćenje rezultata su ključni za SEO."
      },
      {
        type: "heading",
        text: "Osnove SEO optimizacije",
        icon: <StarIcon className="inline w-6 h-6 text-yellow-500 mr-2 align-middle" />
      },
      {
        type: "paragraph",
        text: "SEO optimizacija se sastoji od nekoliko faktora. Prvo, morate imati dobru i strukturiranu web stranicu. To znači da morate imati jasnu navigaciju, lako čitljiv sadržaj i kvalitetne slike. Drugo, morate imati dobru tehničku optimizaciju, što znači da morate imati ispravnu strukturu HTML-a, dobru tehničku optimizaciju slika i dobru optimizaciju URL-a."
      },
      {
        type: "highlight",
        color: "emerald",
        title: "Ključne prednosti SEO optimizacije:",
        items: [
          "Povećava vidljivost na Google i drugim pretraživačima",
          "Poboljšava korisničko iskustvo",
          "Povećava konverzije i prodaju",
          "Poboljšava SEO performanse"
        ]
      },
      {
        type: "heading",
        text: "Kvalitetan sadržaj je ključ",
        icon: <BarChartIcon className="inline w-6 h-6 text-blue-500 mr-2 align-middle" />
      },
      {
        type: "paragraph",
        text: "Sadržaj je najvažniji faktor za SEO optimizaciju. Google i drugi pretraživači traže dobre i relevantne sadržaje za korisnike. To znači da morate imati dobru i strukturiranu web stranicu, dobru tehničku optimizaciju i dobru optimizaciju sadržaja."
      },
      {
        type: "image",
        src: "/images/seo2.jpeg",
        alt: "Laptop na kojem se kodira",
        caption: "Kvalitetan sadržaj je temelj dobre SEO strategije."
      },
      {
        type: "heading",
        text: "24/7 dostupnost",
        icon: <GlobeIcon className="inline w-6 h-6 text-emerald-500 mr-2 align-middle" />
      },
      {
        type: "paragraph",
        text: "SEO optimizacija je proces koji traje dugo vrijeme. Zbog toga je važno da budete strpljivi i stalno pratite rezultate. To je proces koji se stalno mijenja i ažurira. To znači da morate stalno ažurirati vašu web stranicu i pratiti rezultate."
      },   
    ],
    image: "/images/seo-analytics.jpg",
    author: "Nedim Mehić",
    date: "12. juni 2025.",
    category: "SEO",
    readTime: "10 min",
    tags: ["SEO", "Digital Marketing", "Business Growth", "Web Development"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative bg-gradient-to-br from-[#0C363C]/5 via-emerald-50/30 to-cyan-50/20 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C363C]/5 via-transparent to-emerald-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 relative z-10">
            <Link href="/blog" className="inline-flex items-center text-[#0C363C] font-semibold hover:text-emerald-600 transition-colors duration-200 mb-6 group relative z-20">
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Povratak na blog
            </Link>
          </div>
          <div className="text-center mb-8">
            <span className="bg-gradient-to-r from-[#0C363C] to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500">
              <div className="flex items-center">
                <PersonIcon className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <span>•</span>
                <span className="ml-2">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {post.content.map((block, idx) => {
                  if (block.type === "paragraph") {
                    return <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-6">{block.text}</p>;
                  }
                  if (block.type === "image") {
                    return (
                      <figure key={idx} className="my-8">
                        <Image src={block.src || ""} alt={block.alt || ""} width={800} height={400} className="rounded-2xl w-full object-cover shadow-lg" />
                        <figcaption className="text-gray-500 text-sm mt-2 text-center">{block.caption}</figcaption>
                      </figure>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2 key={idx} className="text-2xl font-bold text-gray-900 mb-4 mt-12 flex items-center">
                        {block.icon}
                        <span>{block.text}</span>
                      </h2>
                    );
                  }
                  if (block.type === "highlight") {
                    return (
                      <div key={idx} className={`bg-gradient-to-r from-${block.color}-50 to-${block.color}-100 border-l-4 border-${block.color}-500 p-6 my-8 rounded-r-lg`}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{block.title}</h3>
                        <ul className="space-y-2 text-gray-700">
                          {(block.items || []).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`w-2 h-2 bg-${block.color}-500 rounded-full mt-2 flex-shrink-0`}></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </article>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Share */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Podijeli članak</h3>
                  <div className="flex space-x-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      title="Podijeli na Facebook"
                    >
                      <FacebookIcon className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + articleUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                      title="Podijeli na WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </a>
                    <button
                      onClick={handleCopy}
                      className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200 relative"
                      title="Kopiraj link"
                    >
                      <CopyIcon className="w-5 h-5 text-white" />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg z-10">
                          Kopirano!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tagovi</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-colors duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection/>
      <Footer />
    </div>
  );
} 