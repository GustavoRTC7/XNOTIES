import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'SHOP',
      links: [
        { name: 'New Arrivals', href: '#new' },
        { name: 'Bestsellers', href: '#bestsellers' },
        { name: 'Outerwear', href: '#outerwear' },
        { name: 'Tops', href: '#tops' },
        { name: 'Bottoms', href: '#bottoms' },
        { name: 'Accessories', href: '#accessories' },
      ]
    },
    {
      title: 'INFO',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Stores', href: '#stores' },
        { name: 'Careers', href: '#careers' },
      ]
    },
    {
      title: 'CUSTOMER SERVICE',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'Shipping & Returns', href: '#shipping' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Size Guide', href: '#size-guide' },
      ]
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">XNOTIES</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Redefining streetwear with minimalist designs and premium quality. 
              Made for those who appreciate simplicity and subtle sophistication.
            </p>
            <div className="flex space-x-4">
              <a href="#instagram" className="p-2 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#twitter" className="p-2 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#youtube" className="p-2 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} XNOTIES. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="#privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-black dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;