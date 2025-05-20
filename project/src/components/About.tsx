import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black/50 dark:bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-800 dark:bg-gray-200 flex items-center justify-center">
            <span className="text-lg text-gray-400 dark:text-gray-500">Brand Image</span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">ABOUT XNOTIES</h2>
            <div className="space-y-4">
              <p className="text-gray-400 dark:text-gray-600">
                Founded in 2023, XNOTIES represents the intersection of minimalist design and street culture. 
                We believe in creating timeless pieces that transcend seasonal trends.
              </p>
              <p className="text-gray-400 dark:text-gray-600">
                Our approach focuses on quality materials, ethical production methods, and distinctive silhouettes 
                that blend comfort with contemporary aesthetics.
              </p>
              <p className="text-gray-400 dark:text-gray-600">
                Each piece is designed with intention, featuring clean lines and subtle details that 
                speak to the discerning individual who values both style and substance.
              </p>
            </div>
            <a 
              href="#story" 
              className="inline-block underline underline-offset-4 hover:text-gray-300 dark:hover:text-gray-600 transition-colors"
            >
              Read our full story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;