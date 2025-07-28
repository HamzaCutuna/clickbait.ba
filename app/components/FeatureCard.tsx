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
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: delay || 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex gap-4 lg:gap-6 p-4 lg:p-6 rounded-xl lg:rounded-2xl hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30 transition-all duration-200 motion-reduce"
    >
      <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${color} rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 lg:mt-1 shadow-lg transition-shadow duration-200`}>
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-200">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
          {description}
        </p>
      </div>

      {/* Simplified decorative arrow - desktop only */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center hidden lg:flex">
        <div className="w-1.5 h-1.5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full" />
      </div>
    </motion.div>
  );
} 