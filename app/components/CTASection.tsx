"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0C363C] via-[#0C363C]0 to-emerald-600 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Spremni ste za{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              digitalni uspjeh?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Kontaktirajte nas danas i započnite svoje putovanje prema boljoj online prezentaciji.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/kontakt" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span className="relative z-10">Zatraži besplatnu ponudu</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 bg-white rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </Link>
            
            <a 
              href="tel:+38761496745" 
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Pozovi nas: +387 61 496 745
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 pt-8"
          >
            <div className="flex items-center gap-2 text-blue-100">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Dostupni 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000" />
              <span className="text-sm">Besplatna konsultacija</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000" />
              <span className="text-sm">150+ uspješnih projekata</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-red-400 to-rose-500 rounded-full animate-float-fast"></div>
        </div>
    </section>
  );
} 