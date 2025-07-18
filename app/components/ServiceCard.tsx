"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ComponentType } from "react";

interface Service {
  icon: ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>
        
        <ul className="space-y-3">
          {service.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-200"
            >
              <CheckIcon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
} 