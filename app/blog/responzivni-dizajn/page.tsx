"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, PersonIcon, ArrowLeftIcon, StarIcon, BarChartIcon, CopyIcon } from "@radix-ui/react-icons";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { CTASection } from "@/app/components/CTASection";
import Head from "next/head";

// SVGs for Facebook and WhatsApp
const FacebookIcon = () => (
  <Image src="/facebook.svg" alt="Facebook" width={20} height={20} className="w-5 h-5 text-white" />
);
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.7c1.87 1.02 3.98 1.56 6.24 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm6.98 18.13c-.29.81-1.7 1.59-2.34 1.69-.6.09-1.36.13-2.19-.14-.5-.16-1.14-.37-1.97-.73-3.47-1.5-5.74-5.01-5.92-5.25-.17-.23-1.41-1.88-1.41-3.59 0-1.71.9-2.55 1.22-2.89.29-.3.77-.44 1.23-.44.15 0 .28.01.4.01.35.01.52.02.75.58.29.7.99 2.41 1.08 2.59.09.18.15.4.03.63-.11.23-.17.37-.33.57-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.85 1.41 1.83 2.29 1.26 1.13 2.32 1.48 2.65 1.65.33.17.52.14.71-.08.19-.22.81-.94 1.03-1.26.22-.32.43-.27.72-.16.29.11 1.84.87 2.15 1.03.31.16.52.24.6.37.08.13.08.75-.21 1.56z"/></svg>
);

export default function ResponzivniDizajn() {
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
    id: 3,
    title: "Važnost responzivnog dizajna u 2025. godini",
    excerpt: "Mobile-first pristup više nije trend - to je standard. Saznajte zašto responzivni dizajn direktno utiče na konverzije i korisničko iskustvo.",
    content: [
      {
        type: "paragraph",
        text: "U 2025. godini, više od 70% korisnika pristupa internetu putem mobilnih uređaja. Ako vaša web stranica nije prilagođena svim ekranima, gubite veliki broj potencijalnih klijenata. Responzivni dizajn omogućava da vaš sadržaj izgleda odlično na svakom uređaju, bez obzira na veličinu ekrana."
      },
      {
        type: "image",
        src: "/images/responzivni-dizajn.jpg",
        alt: "Osoba koja radi na Macu",
        caption: "Responzivni dizajn je ključan za moderno korisničko iskustvo."
      },
      {
        type: "heading",
        text: "Zašto je responzivnost važna?",
        icon: <StarIcon className="inline w-6 h-6 text-yellow-500 mr-2 align-middle" />
      },
      {
        type: "paragraph",
        text: "Google favorizuje web stranice koje su optimizirane za mobilne uređaje. To znači bolje rangiranje na pretraživačima, više posjeta i veće šanse za konverziju. Osim toga, responzivni dizajn smanjuje stopu napuštanja stranice i povećava zadovoljstvo korisnika."
      },
      {
        type: "highlight",
        color: "emerald",
        title: "Prednosti responzivnog dizajna:",
        items: [
          "Bolje SEO rangiranje",
          "Povećava konverzije",
          "Poboljšava korisničko iskustvo",
          "Smanjuje troškove održavanja"
        ]
      },
      {
        type: "heading",
        text: "Kako implementirati responzivni dizajn?",
        icon: <BarChartIcon className="inline w-6 h-6 text-blue-500 mr-2 align-middle" />
      },
      {
        type: "paragraph",
        text: "Koristite fleksibilne mrežne sisteme (grid), media queries i optimizirane slike. Testirajte svoju stranicu na različitim uređajima i veličinama ekrana. Pratite analitiku i prilagodite dizajn prema potrebama korisnika."
      },
      {
        type: "image",
        src: "/images/responsive1.jpeg",
        alt: "Testiranje na različitim uređajima",
        caption: "Testiranje na različitim uređajima je obavezno."
      },
    ],
    image: "/images/responzivni-dizajn.jpg",
    author: "Hamza Čutuna",
    date: "5. juni 2025.",
    category: "Web Design",
    readTime: "4 min",
    tags: ["Web Design", "UX", "Mobile", "SEO"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{post.title} | Clickbait</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="https://www.clickbait.ba/images/responzivni-dizajn.jpg" />
        <meta property="og:url" content={`https://www.clickbait.ba/blog/responzivni-dizajn`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Clickbait" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://www.clickbait.ba/images/responzivni-dizajn.jpg" />
      </Head>
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
                      <FacebookIcon />
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
                {/* Tags */}
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