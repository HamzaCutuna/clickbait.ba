"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, StarIcon, BarChartIcon, CodeIcon, MagnifyingGlassIcon, ColorWheelIcon, LockClosedIcon, RocketIcon, BadgeIcon } from "@radix-ui/react-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0C363C]/5 via-emerald-50/30 to-cyan-50/20 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C363C]/5 via-transparent to-emerald-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Gradimo moderne 
                <span className="bg-gradient-to-r from-[#0C363C] via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse"> web stranice </span> 
                koje donose rezultate
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed opacity-0 animate-fade-in-delayed">
                Specijalizovani smo za kreiranje responzivnih web stranica i SEO optimizaciju koja povećava vidljivost vašeg brenda online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delayed-2">
                <Link href="/kontakt" className="bg-gradient-to-r from-[#0C363C] to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#0C363C]/90 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-xl group text-center">
                  <span className="group-hover:scale-105 transition-transform duration-200">Zatraži besplatnu konsultaciju</span>
                </Link>
                <Link href="/#radovi" className="border-2 border-gradient-to-r from-[#0C363C] to-emerald-600 bg-gradient-to-r from-[#0C363C] to-emerald-600 text-transparent bg-clip-text border-[#0C363C] px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#0C363C] hover:to-emerald-600 hover:text-emerald-600
                   transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
                  Pogledaj naše radove
                </Link>
              </div>
            </div>
            <div className="relative opacity-0 animate-fade-in-right">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Modern web design"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C363C]/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ml-4 md:ml-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0C363C]/10 rounded-full flex items-center justify-center">
                    <BarChartIcon className="w-6 h-6 text-[#0C363C]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">Uspješnih projekata</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "150+", label: "Uspješnih projekata", icon: RocketIcon, color: "from-purple-500 to-purple-600", hoverColor: "text-purple-600" },
              { number: "98%", label: "Zadovoljnih klijenata", icon: StarIcon, color: "from-yellow-500 to-orange-500", hoverColor: "text-orange-600" },
              { number: "3+", label: "Godina iskustva", icon: BadgeIcon, color: "from-blue-500 to-blue-600", hoverColor: "text-blue-600" },
              { number: "24/7", label: "Podrška", icon: LockClosedIcon, color: "from-green-500 to-green-600", hoverColor: "text-green-600" }
            ].map((stat, index) => (
              <div key={index} className={`text-center opacity-0 animate-fade-in-up stagger-delay-${index + 1} bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`text-4xl font-bold text-gray-900 mb-2 group-hover:${stat.hoverColor} transition-colors duration-300`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naše usluge</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nudimo kompletno rješenje za vaš digitalni uspjeh - od dizajna do implementacije i optimizacije.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: CodeIcon,
                title: "Web Development",
                description: "Kreiramo moderne, brze i responzivne web stranice koristeći najnovije tehnologije poput React, Next.js i Tailwind CSS.",
                features: ["Responzivni dizajn", "Optimizacija brzine", "SEO spremnost", "Sigurnost"],
                color: "from-blue-500 to-cyan-500",
                hoverColor: "text-blue-600"
              },
              {
                icon: MagnifyingGlassIcon,
                title: "SEO Optimizacija",
                description: "Povećajte vidljivost na Google pretragama kroz detaljnu analizu ključnih riječi i tehnička poboljšanja.",
                features: ["Analiza ključnih riječi", "Tehnički SEO", "Optimizacija sadržaja", "Mjesečni izvještaji"],
                color: "from-emerald-500 to-teal-500",
                hoverColor: "text-emerald-600"
              },
              {
                icon: ColorWheelIcon,
                title: "Branding & Dizajn",
                description: "Razvijamo prepoznatljiv vizuelni identitet koji će istaći vaš brand i privući prave klijente.",
                features: ["Logo dizajn", "Vizuelni identitet", "UI/UX dizajn", "Grafički materijali"],
                color: "from-pink-500 to-rose-500",
                hoverColor: "text-pink-600"
              }
            ].map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up stagger-delay-${index + 1} hover-lift group`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${service.hoverColor} transition-colors duration-300`}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-200">
                      <CheckIcon className={`w-5 h-5 ${service.hoverColor} flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="o-nama" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Zašto baš Clickbait?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kombinujemo kreativnost s tehničkim znanjem kako bismo vam pružili rješenja koja ne samo da izgledaju sjajno, već i donose rezultate.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Dokazano iskustvo",
                    description: "Više od 150 uspješno završenih projekata u različitim industrijama."
                  },
                  {
                    title: "Personalizovani pristup",
                    description: "Svaki projekt prilagođavamo specifičnim potrebama i ciljevima klijenta. Otvoreni smo za vaše ideje i želje, ali i nudimo kreativna rješenja koja mogu dodatno unaprijediti vaš nastup."
                  },
                  {
                    title: "Kontinuirana podrška",
                    description: "Pružamo 24/7 podršku i redovno ažuriramo vaše stranice."
                  },
                  {
                    title: "Transparentnost",
                    description: "Redovni izvještaji o napretku i jasna komunikacija kroz cijeli proces."
                  },
                  {
                    title: "Marketing",
                    description: "Pružamo marketing usluge kako bismo povećali vidljivost vašeg brenda."
                  },
                  {
                    title: "Kreativnost",
                    description: "Mi ne samo da pratimo vaše upute – radimo zajedno s vama kako bismo stvorili jedinstvena i efektna rješenja koja ostavljaju utisak."
                  }
                ].map((item, index) => {
                  let color = '';
                  if (index === 0) color = 'bg-gradient-to-br from-blue-500 to-cyan-500';
                  else if (index === 1) color = 'bg-gradient-to-br from-purple-500 to-pink-500';
                  else if (index === 2) color = 'bg-gradient-to-br from-green-500 to-emerald-500';
                  else if (index === 3) color = 'bg-gradient-to-br from-orange-500 to-red-500';
                  else if (index === 4) color = 'bg-gradient-to-br from-yellow-500 to-amber-500'; // Marketing
                  else if (index === 5) color = 'bg-gradient-to-br from-red-500 to-red-600'; // Kreativnost
                  return (
                    <div key={index} className={`flex gap-4 hover:translate-x-2 transition-transform duration-300 opacity-0 animate-fade-in-up stagger-delay-${index + 1} group`}>
                      <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#0C363C] transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative opacity-0 animate-fade-in-right">
              <div className="relative hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/landing1.jpeg"
                  alt="Tim koji radi na projektu"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0C363C]/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="radovi" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Naši najnoviji radovi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pogledajte neke od projekata koje smo uspješno realizovali za naše klijente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/images/agencija.png",
                title: "Web stranica za sigurnosnu agenciju",
                category: "Web Development + SEO",
                description: "Moderna i pouzdana prezentacija sigurnosnih usluga s fokusom na profesionalizam."
              },
              {
                image: "/images/agram.png",
                title: "Poliklinika - digitalna prisutnost",
                category: "Web Development + SEO",
                description: "Savremena web stranica za polikliniku sa SEO optimizacijom i jasnim prikazom usluga."
              },
              {
                image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
                title: "Agencija za nekretnine",
                category: "Web Development + Design",
                description: "Elegantna web platforma za promociju i pretragu nekretnina, prilagođena korisnicima."
              }
              
            ].map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up stagger-delay-${index + 1} hover-lift group ${project.title === "Web stranica za sigurnosnu agenciju" ? "cursor-pointer" : ""}`}
                onClick={project.title === "Web stranica za sigurnosnu agenciju" ? () => window.open("https://videonadzorsarajevo.ba", "_blank") : undefined}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C363C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#0C363C] font-semibold mb-2 bg-[#0C363C]/10 px-2 py-1 rounded-lg inline-block">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0C363C] transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 opacity-0 animate-fade-in-delayed-2">
            <Link href="https://www.cutuna.com/" className="bg-gradient-to-r from-[#0C363C] to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#0C363C]/90 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
              Pogledaj sve projekte
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0C363C] to-[#0C363C]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C363C] to-[#0C363C]/90"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
            Spremni ste za digitalni uspjeh?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delayed leading-relaxed">
            Kontaktirajte nas danas i započnite svoje putovanje prema boljoj online prezentaciji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delayed-2">
            <Link href="/kontakt" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
              Zatraži besplatnu ponudu
            </Link>
            <a href="tel:+38761496745" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0C363C] transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
              Pozovi nas: +387 61 496 745
            </a>
          </div>
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
