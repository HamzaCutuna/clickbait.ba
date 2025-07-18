"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface Stat {
  number: string;
  label: string;
  icon: ComponentType<any>;
  color: string;
  description: string;
}

interface StatsCardProps {
  stat: Stat;
  index: number;
}

export function StatsCard({ stat, index }: StatsCardProps) {
  const Icon = stat.icon;

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
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-300"
        >
          {stat.number}
        </motion.div>
        
        <div className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
          {stat.label}
        </div>
        
        <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
          {stat.description}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
    </motion.div>
  );
} 