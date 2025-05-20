import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">JOIN THE MOVEMENT</h2>
          <p className="text-gray-400 dark:text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive drops, behind-the-scenes content, and early access to new collections.
          </p>
          
          {isSubmitted ? (
            <div className="bg-gray-900 dark:bg-gray-100 p-6 rounded-sm">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-gray-400 dark:text-gray-600 mt-2">You'll be the first to know about our latest releases.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-transparent border-b border-white dark:border-black py-3 px-4 focus:outline-none placeholder-gray-400 dark:placeholder-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-black text-black dark:text-white px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <span>SUBSCRIBE</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
          
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;