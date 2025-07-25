"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
  color: string;
}

export function FeatureCard({ icon: Icon, title, description, delay, color }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: delay || 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        x: 8,
        transition: { duration: 0.3 }
      }}
      className="group flex gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative arrow */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: delay || 0 + 0.2 }}
        viewport={{ once: true }}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center"
      >
        <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full" />
      </motion.div>
    </motion.div>
  );
} 