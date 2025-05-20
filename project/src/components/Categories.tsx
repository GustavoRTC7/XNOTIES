import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { name: 'OUTERWEAR', image: 'bg-gray-800 dark:bg-gray-200' },
    { name: 'TOPS', image: 'bg-gray-700 dark:bg-gray-300' },
    { name: 'BOTTOMS', image: 'bg-gray-800 dark:bg-gray-200' },
    { name: 'ACCESSORIES', image: 'bg-gray-700 dark:bg-gray-300' },
  ];

  return (
    <section id="shop" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">CATEGORIES</h2>
          <p className="text-gray-400 dark:text-gray-600 mt-2">Explore our collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a 
              key={category.name} 
              href={`#${category.name.toLowerCase()}`}
              className="group block"
            >
              <div className={`aspect-[4/5] ${category.image} flex items-center justify-center mb-4 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}>
                <span className="text-xl text-gray-400 dark:text-gray-500">Image</span>
              </div>
              <h3 className="text-lg font-medium">{category.name}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">View collection</p>
            </a>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="aspect-[21/9] bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">NEW COLLECTION</h2>
              <p className="text-gray-400 dark:text-gray-600">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;