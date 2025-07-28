"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface StatsCardProps {
  stat: {
    number: string;
    label: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
  };
  index: number;
}

export function StatsCard({ stat, index }: StatsCardProps) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200/50 card-hover motion-reduce"
    >
      {/* Background gradient on hover - desktop only */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block" />
      
      <div className="relative z-10 text-center">
        <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg transition-shadow duration-200`}>
          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
        </div>
        
        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-200">
          {stat.number}
        </div>
        
        <div className="text-base lg:text-lg font-semibold text-gray-700 mb-1 lg:mb-2 group-hover:text-gray-900 transition-colors duration-200">
          {stat.label}
        </div>
        
        <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
          {stat.description}
        </div>
      </div>

      {/* Simplified decorative elements - desktop only */}
      <div className="absolute top-3 lg:top-4 right-3 lg:right-4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block" />
    </motion.div>
  );
} 