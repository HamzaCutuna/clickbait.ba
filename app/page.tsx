"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  StarIcon, 
  ChartBarIcon, 
  CodeBracketIcon, 
  MagnifyingGlassIcon, 
  SwatchIcon, 
  LockClosedIcon, 
  RocketLaunchIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TypewriterText } from "./components/TypewriterText";
import { StatsCard } from "./components/StatsCard";
import { ServiceCard } from "./components/ServiceCard";
import { FeatureCard } from "./components/FeatureCard";
import { ProjectCard } from "./components/ProjectCard";
import { CTASection } from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Gradimo moderne{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                      web stranice
                    </span>
                  </span>{" "}
                  koje donose rezultate
                </h1>

                <TypewriterText 
                  texts={[
                    "Specijalizovani smo za kreiranje responzivnih web stranica",
                    "SEO optimizacija koja povećava vidljivost vašeg brenda",
                    "Moderne tehnologije za najbolje korisničko iskustvo"
                  ]}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/kontakt" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0B3C41] to-[#00BE57] text-white font-semibold rounded-2xl hover:from-[#0B3C41] hover:to-[#00BE57] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  <span className="relative z-10">Zatraži besplatnu konsultaciju</span>

                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/#radovi" 
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-green-600 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Pogledaj naše radove
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-8 pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-[#0B3C41] to-[#00BE57] rounded-full border-2 border-white shadow-md"
                    ></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">150+ zadovoljnih klijenata</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.9/5 ocjena</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Modern web design"
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-200/50"
                >
                  <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-gradient-to-br from-[#0C363C] to-emerald-500 rounded-xl flex items-center justify-center">
                     <ChartBarIcon className="w-6 h-6 text-white" />
                   </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-sm text-gray-600">Uspješnih projekata</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Stack - Hidden on Mobile */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-200/50 hidden lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <CpuChipIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Next.js & React</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
                          {[
                { 
                  number: "150+", 
                  label: "Uspješnih projekata", 
                  icon: RocketLaunchIcon, 
                  color: "from-purple-500 to-pink-500",
                  description: "Različitih industrija"
                },
                { 
                  number: "98%", 
                  label: "Zadovoljnih klijenata", 
                  icon: StarIcon, 
                  color: "from-yellow-500 to-orange-500",
                  description: "Povratni klijenti"
                },
                { 
                  number: "3+", 
                  label: "Godina iskustva", 
                  icon: AcademicCapIcon, 
                  color: "from-blue-500 to-cyan-500",
                  description: "Profesionalno iskustvo"
                },
                { 
                  number: "24/7", 
                  label: "Podrška", 
                  icon: LockClosedIcon, 
                  color: "from-emerald-500 to-teal-500",
                  description: "Dostupnost"
                }
              ].map((stat, index) => (
              <StatsCard key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Naše{" "}
              <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                usluge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nudimo kompletno rješenje za vaš digitalni uspjeh - od dizajna do implementacije i optimizacije.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
                          {[
                {
                  icon: CodeBracketIcon,
                  title: "Web Development",
                  description: "Kreiramo moderne, brze i responzivne web stranice koristeći najnovije tehnologije poput React, Next.js i Tailwind CSS.",
                  features: ["Responzivni dizajn", "Optimizacija brzine", "SEO spremnost", "Sigurnost"],
                  color: "from-blue-500 to-cyan-500",
                  gradient: "from-blue-50 to-cyan-50"
                },
                {
                  icon: MagnifyingGlassIcon,
                  title: "SEO Optimizacija",
                  description: "Povećajte vidljivost na Google pretragama kroz detaljnu analizu ključnih riječi i tehnička poboljšanja.",
                  features: ["Analiza ključnih riječi", "Tehnički SEO", "Optimizacija sadržaja", "Mjesečni izvještaji"],
                  color: "from-emerald-500 to-teal-500",
                  gradient: "from-emerald-50 to-teal-50"
                },
                {
                  icon: SwatchIcon,
                  title: "Branding & Dizajn",
                  description: "Razvijamo prepoznatljiv vizuelni identitet koji će istaći vaš brand i privući prave klijente.",
                  features: ["Logo dizajn", "Vizuelni identitet", "UI/UX dizajn", "Grafički materijali"],
                  color: "from-pink-500 to-rose-500",
                  gradient: "from-pink-50 to-rose-50"
                }
              ].map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="o-nama" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Zašto baš{" "}
                  <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                    Clickbait?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kombinujemo kreativnost s tehničkim znanjem kako bismo vam pružili rješenja koja ne samo da izgledaju sjajno, već i donose rezultate.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Dokazano iskustvo",
                    description: "Više od 150 uspješno završenih projekata u različitim industrijama.",
                    icon: AcademicCapIcon,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Personalizovani pristup",
                    description: "Svaki projekt prilagođavamo specifičnim potrebama i ciljevima klijenta.",
                    icon: SparklesIcon,
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Kontinuirana podrška",
                    description: "Pružamo 24/7 podršku i redovno ažuriramo vaše stranice.",
                    icon: LockClosedIcon,
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    title: "Transparentnost",
                    description: "Redovni izvještaji o napretku i jasna komunikacija kroz cijeli proces.",
                    icon: GlobeAltIcon,
                    color: "from-orange-500 to-yellow-500"
                  }
                ].map((feature, index) => (
                  <FeatureCard 
                    key={index} 
                    icon={feature.icon} 
                    title={feature.title} 
                    description={feature.description} 
                    delay={index * 0.1}
                    color={feature.color}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/landing1.jpeg"
                    alt="Tim koji radi na projektu"
                    width={600}
                    height={500}
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-200/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <DevicePhoneMobileIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Responzivni dizajn</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="radovi" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Naši najnoviji{" "}
              <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                radovi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pogledajte neke od projekata koje smo uspješno realizovali za naše klijente.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                image: "/images/agencija.png",
                title: "Web stranica za sigurnosnu agenciju",
                category: "Web Development + SEO",
                description: "Moderna i pouzdana prezentacija sigurnosnih usluga s fokusom na profesionalizam.",
                link: "https://videonadzorsarajevo.ba"
              },
              {
                image: "/images/agram.png",
                title: "Poliklinika - digitalna prisutnost",
                category: "Web Development + SEO",
                description: "Savremena web stranica za polikliniku sa SEO optimizacijom i jasnim prikazom usluga.",
                link: null
              },
              {
                image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
                title: "Agencija za nekretnine",
                category: "Web Development + Design",
                description: "Elegantna web platforma za promociju i pretragu nekretnina, prilagođena korisnicima.",
                link: null
              }
            ].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="https://www.cutuna.com/" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0B3C41] to-[#00BE57] text-white font-semibold rounded-2xl hover:from-[#0B3C41] hover:to-[#00BE57] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Pogledaj sve projekte</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
