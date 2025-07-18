"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckIcon, 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  UserIcon,
  MessageSquareIcon,
  SendIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      content: "hcutuna@gmail.com",
      color: "from-blue-500 to-cyan-500",
      desc: "Odgovarat ćemo u roku od 2 sata",
      href: "mailto:hcutuna@gmail.com"
    },
    {
      icon: PhoneIcon,
      title: "Telefon",
      content: "+387 61 496 745",
      color: "from-emerald-500 to-teal-500",
      desc: "Dostupni radnim danima 9-17h",
      href: "tel:+38761496745"
    },
    {
      icon: MapPinIcon,
      title: "Lokacija",
      content: "Sarajevo, BiH",
      color: "from-purple-500 to-pink-500",
      desc: "Radimo sa klijentima globalno",
      href: null
    },
    {
      icon: ClockIcon,
      title: "Radno vrijeme",
      content: "Pon-Pet 9:00-17:00",
      color: "from-orange-500 to-red-500",
      desc: "Weekend dostupni za hitne slučajeve",
      href: null
    }
  ];

  const services = [
    "Web Development",
    "SEO Optimizacija",
    "Branding & Dizajn",
    "Digital Marketing",
    "E-commerce Rješenja",
    "Održavanje Web Stranica",
    "Drugo"
  ];

  const faqData = [
    {
      question: "Koliko traje izrada web stranice?",
      answer: "Vrijeme izrade zavisi od kompleksnosti projekta. Jednostavne web stranice mogu biti gotove za 2-3 nedelje, dok kompleksniji projekti mogu trajati 6-8 nedelja. Uvijek vas informišemo o tačnom vremenskom okviru prije početka rada."
    },
    {
      question: "Da li nudite održavanje web stranica?",
      answer: "Da, nudimo kompletnu uslugu održavanja web stranica koja uključuje redovne ažuriranja, sigurnosne patcheve, backup-ove i tehničku podršku. Naši paketi su fleksibilni i prilagođeni vašim potrebama."
    },
    {
      question: "Koje su cijene vaših usluga?",
      answer: "Cijene se razlikuju ovisno o kompleksnosti projekta i vašim specifičnim potrebama. Svaki projekat je jedinstven, pa vam nudimo personalizovane ponude. Kontaktirajte nas za besplatnu konsultaciju i detaljnu ponudu."
    },
    {
      question: "Da li radite sa klijentima iz inostranstva?",
      answer: "Apsolutno! Radimo sa klijentima iz cijelog svijeta. Naš tim je dostupan putem email-a, telefona i video poziva. Koristimo moderne alate za saradnju koji omogućavaju efikasnu komunikaciju bez obzira na vremensku zonu."
    },
    {
      question: "Da li nudite SEO usluge?",
      answer: "Da, nudimo kompletnu SEO optimizaciju koja uključuje tehničku optimizaciju, optimizaciju sadržaja, link building i redovno praćenje rezultata. Naš cilj je da vaša web stranica bude vidljiva u pretraživačima i privlači kvalitetan saobraćaj."
    },
    {
      question: "Koji je proces saradnje?",
      answer: "Proces započinjemo besplatnom konsultacijom gdje razumijemo vaše potrebe. Zatim pripremamo detaljnu ponudu i plan projekta. Nakon odobrenja, krećemo u izradu sa redovnim ažuriranjima. Nakon završetka, pružamo podršku i održavanje."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full text-sm font-medium text-green-700 mb-6"
            >
              <MessageSquareIcon className="w-4 h-4" />
              <span>Kontaktirajte nas</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Započnimo vaš{" "}
              <span className="bg-gradient-to-r from-[#0B3C41] via-[#00BE57] to-emerald-600 bg-clip-text text-transparent">
                digitalni uspjeh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Spremni smo da pretvorimo vaše kreativne ideje u digitalni uspjeh. Počnimo razgovor koji će transformirati vaš biznis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200/50 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Direktan{" "}
                  <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                    pristup
                  </span>
                </h2>
                
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`group p-4 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                      onClick={item.href ? () => window.open(item.href, item.href?.startsWith('mailto:') ? undefined : '_blank') : undefined}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-200">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-base">{item.title}</h3>
                          <p className="text-white/90 font-medium text-base">{item.content}</p>
                          <p className="text-white/70 text-xs mt-1">{item.desc}</p>
                        </div>
                        {item.href && (
                          <ArrowRightIcon className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info Section */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-gray-200/30">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquareIcon className="w-5 h-5 text-[#00BE57]" />
                    Brza komunikacija
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00BE57] rounded-full"></div>
                      <span>Odgovor u roku od 2 sata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00BE57] rounded-full"></div>
                      <span>Besplatna konsultacija</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00BE57] rounded-full"></div>
                      <span>Personalizovana ponuda</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00BE57] rounded-full"></div>
                      <span>24/7 tehnička podrška</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50 h-full">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckIcon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Fantastično!</h3>
                      <p className="text-gray-600 mb-8 text-lg">Vaša poruka je uspješno poslana. Naš tim će vas kontaktirati u najkraćem mogućem roku.</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl hover:from-green-500 hover:to-emerald-500 transition-all duration-300 font-semibold shadow-lg"
                      >
                        Pošalji novu poruku
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Započnimo{" "}
                        <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                          saradnju
                        </span>
                      </h3>
                      <p className="text-gray-600 text-lg">Opišite svoj projekat i mi ćemo vam poslati personalizovani prijedlog u roku od 24 sata.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                            Ime i prezime *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                              placeholder="Vaše ime i prezime"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                            Email adresa *
                          </label>
                          <div className="relative">
                            <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                              placeholder="vas@email.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                            Broj telefona
                          </label>
                          <div className="relative">
                            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                              placeholder="+387 XX XXX XXX"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-3">
                            Usluga
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80"
                          >
                            <option value="">Odaberite uslugu</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                          Poruka *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 font-medium text-gray-900 bg-white/80 resize-none"
                          placeholder="Opišite vaš projekat, ciljeve i očekivanja..."
                        />
                      </div>

                      <div className="mt-auto pt-6">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-[#0B3C41] to-[#00BE57] text-white py-4 rounded-2xl font-semibold hover:from-[#0B3C41] hover:to-[#00BE57] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Slanje poruke...
                            </>
                          ) : (
                            <>
                              <SendIcon className="w-5 h-5" />
                              Pošalji poruku
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Često postavljena{" "}
              <span className="bg-gradient-to-r from-[#0B3C41] to-[#00BE57] bg-clip-text text-transparent">
                pitanja
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pronađite odgovore na najčešća pitanja o našim uslugama i procesu saradnje
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUpIcon className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 