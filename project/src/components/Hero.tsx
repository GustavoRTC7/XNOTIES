import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              DEFINING THE FUTURE OF STREETWEAR
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Minimalist designs for the modern individual.
              Breaking boundaries while maintaining timeless elegance.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#shop" 
                className="inline-flex items-center space-x-2 bg-white dark:bg-black text-black dark:text-white px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <span>SHOP NOW</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="#collections" 
                className="inline-flex items-center space-x-2 border border-black dark:border-white px-6 py-3 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
              >
                <span>EXPLORE</span>
              </a>
            </div>
          </div>
          <div className="aspect-square bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-lg text-gray-500 dark:text-gray-400">Featured Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero