"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string | null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200/50 overflow-hidden cursor-pointer card-hover motion-reduce"
      onClick={project.link ? () => window.open(project.link!, "_blank") : undefined}
    >
      {/* Image Container */}
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Overlay - simplified */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block" />
        
        {/* Category Badge */}
        <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
          <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-green-700 border border-green-200/50">
            {project.category}
          </span>
        </div>

        {/* View Project Button - desktop only */}
        {project.link && (
          <div className="absolute top-3 lg:top-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <ArrowTopRightOnSquareIcon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0B3C41] group-hover:to-[#00BE57] group-hover:bg-clip-text transition-all duration-200">
          {project.title}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
} 