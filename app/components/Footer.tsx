"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                Clickbait
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                Vaš partner za online prisustvo. Gradimo moderne web stranice koje donose rezultate i pomažu vašem biznisu da raste.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <a href="mailto:hcutuna@gmail.com" className="hover:underline">
                  hcutuna@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Phone className="w-5 h-5" />
                <a href="tel:+38761496745" className="hover:underline">
                  +387 61 496 745
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Sarajevo, Bosna i Hercegovina</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Brze veze</h4>
            <div className="space-y-3">
              {[
                { name: "Početna", href: "/" },
                { name: "Usluge", href: "/#usluge" },
                { name: "O nama", href: "/#o-nama" },
                { name: "Radovi", href: "/#radovi" },
                { name: "Blog", href: "/blog" },
                { name: "Kontakt", href: "/kontakt" }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 hover:text-green-400 transition-all duration-200 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social & Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            

            {/* Social Links */}
            <h4 className="text-lg font-semibold text-white mb-4">Pratite nas</h4>
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/hamza-cutuna",
                  bg: "from-emerald-500 to-green-600",
                  hoverBg: "from-emerald-400 to-green-500"
                },
                {
                  name: "Facebook", 
                  href: "https://www.facebook.com/clickbait.ba/",
                  bg: "from-blue-500 to-blue-600",
                  hoverBg: "from-blue-400 to-blue-500"
                }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`group w-12 h-12 bg-gradient-to-br ${social.bg} hover:${social.hoverBg} rounded-xl flex items-center justify-center transition-all duration-10 hover:shadow-lg hover:shadow-blue-500/25`}
                >
                  <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                    {social.name === "LinkedIn" ? "in" : "f"}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
              © 2025{" "}
              <span className="text-green-400 font-semibold">Clickbait</span>
              . Sva prava zadržana.
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: 0, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              <span className="text-sm">Nazad na vrh</span>
              <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 