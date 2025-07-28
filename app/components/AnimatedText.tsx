"use client";

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-block ${className}`}>
      <span className={`shimmer-text ${isVisible ? 'animate' : ''}`}>
        {text}
      </span>
      <style jsx>{`
        .shimmer-text {
          display: inline-block;
          color: #111827;
          position: relative;
          background: linear-gradient(
            90deg,
            #111827 0%,
            #111827 40%,
            #059669 45%,
            #0d9488 47%,
            #059669 49%,
            #111827 54%,
            #111827 100%
          );
          background-size: 200% 100%;
          background-position: 0% 0%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: #111827;
        }
        .shimmer-text.animate {
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -100% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
        /* Fallback for browsers that don't support background-clip: text */
        @supports not (-webkit-background-clip: text) {
          .shimmer-text {
            color: #111827;
            -webkit-text-fill-color: #111827;
          }
          .shimmer-text.animate {
            animation: colorShimmer 0.8s linear infinite;
          }
          @keyframes colorShimmer {
            0%, 100% { color: #111827; }
            45% { color: #059669; }
            47% { color: #0d9488; }
            49% { color: #059669; }
            54% { color: #111827; }
          }
        }
        /* Disable animation on mobile and reduced motion */
        @media (max-width: 768px), (prefers-reduced-motion: reduce) {
          .shimmer-text.animate {
            animation: none;
            background: #111827;
            color: #111827;
            -webkit-text-fill-color: #111827;
          }
        }
      `}</style>
    </span>
  );
} 