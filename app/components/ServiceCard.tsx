"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ComponentType } from "react";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
    gradient: string;
    features: string[];
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200/50 overflow-hidden card-hover motion-reduce"
    >
      {/* Background gradient on hover - desktop only */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block`} />
      
      <div className="relative z-10">
        <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg transition-shadow duration-200`}>
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
        </div>
        
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-200 font-serif">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-5 lg:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
          {service.description}
        </p>
        
        <ul className="space-y-2 lg:space-y-3">
          {service.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 + featureIndex * 0.03 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-200 motion-reduce"
            >
              <CheckIcon className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm lg:text-base text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
} 