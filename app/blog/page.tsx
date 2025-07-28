"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarIcon, PersonIcon } from "@radix-ui/react-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const blogPosts = [
    {
      id: 1,
      title: "Zašto je profesionalna web stranica ključna za uspjeh",
      excerpt: "U digitalnom dobu, web stranica nije samo opcija - to je neophodno. Saznajte kako kvalitetna web prezentacija može transformirati vaš biznis i privući nove klijente.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      author: "Lamija Ibišević",
      date: "15. juni 2025.",
      category: "Web Development",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "SEO optimizacija: Vodič za bolje rangiranje na Google-u",
      excerpt: "Otkrijte tajne SEO optimizacije koje će vašu web stranicu postaviti na vrh Google pretrage. Praktični savjeti za poboljšanje vidljivosti online.",
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=400&h=250&fit=crop",
      author: "Nedim Mehić",
      date: "12. juni 2025.",
      category: "SEO",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Važnost responzivnog dizajna u 2025. godini",
      excerpt: "Mobile-first pristup nije više trend - to je standard. Saznajte zašto responzivni dizajn direktno utiče na konverzije i korisničko iskustvo.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop",
      author: "Hamza Čutuna",
      date: "5. juni 2025.",
      category: "Web Design",
      readTime: "4 min"
    },
    /*{
      id: 4,
      title: "Digitalni marketing strategije za mala i srednja preduzeća",
      excerpt: "Kako da sa ograničenim budžetom postignete maksimalne rezultate? Istraži efikasne digitalne marketing strategije prilagođene lokalnom tržištu.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      author: "Hamza Čutuna",
      date: "8. juni 2025.",
      category: "Marketing",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Kako da izaberete pravu web agenciju za vaš projekat",
      excerpt: "Tips za odabir pouzdane web agencije koja će realizovati vaš digitalni san. Ključna pitanja koja trebate postaviti prije donošenja odluke.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      author: "Hamza Čutuna",
      date: "2. juni 2025.",
      category: "Savjeti",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Brzina web stranice: Zašto svaka sekunda računa",
      excerpt: "Istraživanja pokazuju da 40% korisnika napušta web stranicu koja se učitava duže od 3 sekunde. Otkrijte kako optimizovati performanse.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=250&fit=crop",
      author: "Hamza Čutuna",
      date: "28. decembar 2024.",
      category: "Optimizacija",
      readTime: "6 min"
    }*/
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 pb-8 lg:pb-0">
        {/* Simplified Background Elements for mobile performance */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Reduced complexity - only show on desktop */}
          <div className="hidden lg:block absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Mobile-friendly background */}
          <div className="lg:hidden absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Trending Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['#SEO', '#WebDevelopment', '#Marketing', '#UX', '#DigitalMarketing'].map((tag) => (
                <span 
                  key={tag}
                  className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200/50 hover:bg-white hover:border-[#0C363C] hover:text-[#0C363C] transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <div className="space-y-4 lg:space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                  Digitalni fokus
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-left">
                Pratite najnovije trendove u web developmentu, SEO optimizaciji i digitalnom marketingu. 
                Stručni savjeti i uvidi koji će vam pomoći da uspješno digitalizujete vaš biznis.
              </p>
            </div>

            {/* Recent News Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 lg:mt-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                Najnoviji članak
              </h2>
              
              <div className="max-w-2xl mx-auto">
                {(() => {
                  const latestPost = blogPosts[0];
                  const href = "/blog/profesionalna-web-stranica";
                  return (
                    <Link
                      href={href}
                      className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200/50 block"
                    >
                      <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                        <div className="relative w-full lg:w-32 h-48 lg:h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={latestPost.image}
                            alt={latestPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <span className="bg-gradient-to-r from-[#0C363C] to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                              {latestPost.category}
                            </span>
                            <span className="mx-2">•</span>
                            <span>{latestPost.readTime}</span>
                            <span className="mx-2">•</span>
                            <span>{latestPost.date}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0C363C] transition-colors duration-300 leading-tight mb-2">
                            {latestPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {latestPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })()}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <Link 
                  href="#blog-posts"
                  className="inline-flex items-center text-[#0C363C] font-semibold hover:text-emerald-600 transition-colors duration-200 group"
                >
                  <span>Pogledaj sve članke</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const href =
                post.id === 1
                  ? "/blog/profesionalna-web-stranica"
                  : post.id === 2
                  ? "/blog/seo-optimizacija"
                  : post.id === 3
                  ? "/blog/responzivni-dizajn"
                  : "/blog";
              return (
                <Link
                  key={post.id}
                  href={href}
                  className={`block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-up stagger-delay-${index + 1} group`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#0C363C] to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                      <span className="mx-2">|</span>
                      <PersonIcon className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0C363C] transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#0C363C] to-[#0C363C]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C363C] via-[#0C363C]0 to-emerald-600 "></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
            Budite u toku sa <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">najnovijim trendovima</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delayed leading-relaxed">
            Pretplatite se na naš newsletter i redovno dobijajte stručne savjete, tipove i uvide iz svijeta digitalnog marketinga.
          </p>
          {subscribed ? (
            <div className="text-emerald-300 text-lg font-semibold py-6 opacity-0 animate-fade-in-up">
              Hvala na pretplati!
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto opacity-0 animate-fade-in-delayed-2"
              onSubmit={e => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
            >
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex-1 px-6 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all duration-300"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Pretplati se
              </button>
            </form>
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-red-400 to-rose-500 rounded-full animate-float-fast"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 