"use client";

import { useState } from "react";
import { CheckIcon, EnvelopeClosedIcon, PersonIcon, ChevronDownIcon, HomeIcon } from "@radix-ui/react-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        alert('Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo.');
      }
    } catch {
      alert('Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };



  const faqData = [
    {
      question: "Koliko vremena je potrebno za izgradnju web stranice?",
      answer: "Vrijeme izrade zavisi od složenosti projekta. Jednostavna web stranica može biti gotova za 1-2 sedmice, dok složeniji projekti mogu trajati 4-8 sedmica. Nakon konzultacije, dat ćemo vam preciznu procjenu."
    },
    {
      question: "Šta je uključeno u SEO optimizaciju?",
      answer: "Naša SEO usluga uključuje: analizu ključnih riječi, optimizaciju sadržaja, tehnička poboljšanja, link building, mjesečne izvještaje i kontinuirano praćenje performansi."
    },
    {
      question: "Da li nudite održavanje web stranice?",
      answer: "Da, nudimo kompletno održavanje uključujući: sigurnosna ažuriranja, backup, tehnička podrška, dodavanje novog sadržaja i performanse optimizacije."
    },
    {
      question: "Koje tehnologije koristite?",
      answer: "Koristimo moderne tehnologije kao što su React, Next.js, WordPress, HTML5, CSS3, JavaScript, kao i savremene AI alate. Prilagođavamo tehnologiju prema potrebama vašeg projekta."
    },
    {
      question: "Da li radite sa klijentima van BiH?",
      answer: "Apsolutno! Radimo sa klijentima širom regiona i svijeta. Komuniciramo putem email-a, video poziva i modernih kolaborativnih alata."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <AnimatedText 
                text="Započnimo vaš digitalni uspjeh"
                delay={500}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Spremni smo da pretvorimo vaše kreativne ideje u digitalni uspjeh. Počnimo razgovor koji će transformirati vaš biznis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 opacity-0 animate-fade-in-left">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Direktan pristup</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: EnvelopeClosedIcon,
                      title: "Email",
                      content: "hcutuna@gmail.com",
                      color: "from-blue-500 to-cyan-500",
                      desc: "Odgovarat ćemo u roku od 2 sata"
                    },
                    {
                      icon: PersonIcon,
                      title: "Telefon",
                      content: "+387 61 496 745",
                      color: "from-emerald-500 to-green-500",
                      desc: "Dostupni radnim danima 9-17h"
                    },
                    {
                      icon: HomeIcon,
                      title: "Lokacija",
                      content: "Sarajevo, BiH",
                      color: "from-purple-500 to-pink-500",
                      desc: "Radimo sa klijentima globalno"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`group p-6 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up stagger-delay-${index + 1}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg">{item.title}</h3>
                          <p className="text-white/90 font-medium text-lg">{item.content}</p>
                          <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 opacity-0 animate-fade-in-right">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50 transition-all duration-500">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Fantastično!</h3>
                    <p className="text-gray-600 mb-8 text-lg">Vaša poruka je uspješno poslana. Naš tim će vas kontaktirati u najkraćem mogućem roku.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-[#0C363C] to-teal-600 text-white px-8 py-4 rounded-xl hover:from-[#0C363C]/90 hover:to-teal-500 transition-all duration-300 hover:scale-105 font-semibold"
                    >
                      Pošalji novu poruku
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif">Započnimo saradnju</h3>
                    <p className="text-gray-600 mb-8 text-lg">Opišite svoj projekat i mi ćemo vam poslati personalizovani prijedlog u roku od 24 sata.</p>
                    
                    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                            Ime i prezime *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                            placeholder="Vaše ime i prezime"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                            Email adresa *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                            placeholder="vas@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                            Broj telefona
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                            placeholder="+387 XX XXX XXX"
                          />
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                            Usluga
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                          >
                            <option value="">Odaberite uslugu</option>
                            <option value="web-development">Web Development</option>
                            <option value="seo">SEO Optimizacija</option>
                            <option value="branding">Branding & Dizajn</option>
                            <option value="maintenance">Održavanje web stranice</option>
                            <option value="consultation">Konsultacija</option>
                            <option value="other">Ostalo</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                          Poruka *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none font-medium text-gray-900 bg-white/80"
                          placeholder="Opišite vaš projekat ili postavite pitanje..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#0C363C] to-emerald-600 hover:from-[#0C363C]/90 hover:to-emerald-500'
                        } text-white`}
                      >
                        {isSubmitting ? 'Šalje se...' : 'Pošalji poruku →'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Često postavljana pitanja</h2>
            <p className="text-xl text-gray-600">Odgovori na najčešća pitanja o našim uslugama</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
} 