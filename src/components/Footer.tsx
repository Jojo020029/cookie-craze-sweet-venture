
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cookie-brown text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-fredoka mb-4">
              <span className="text-pink-light">Cookie</span>
              <span className="text-yellow-light">Craze</span>
            </h3>
            <p className="text-gray-300 max-w-md">
              Baking happiness into every cookie. Our treats are made with love and a sprinkle of magic.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-fredoka mb-4">Connect With Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-pink-light transition-colors transform hover:scale-110 inline-block">
                <Instagram size={28} />
              </a>
              <a href="#" className="hover:text-pink-light transition-colors transform hover:scale-110 inline-block">
                <Facebook size={28} />
              </a>
              <a href="#" className="hover:text-pink-light transition-colors transform hover:scale-110 inline-block">
                <Twitter size={28} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-xl font-fredoka mb-4">Visit Our Bakery</h4>
            <p className="text-gray-300">
              123 Cookie Lane<br />
              Sweet Town, SC 12345<br />
              Open: Mon-Sat, 9am-6pm
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cookie Craze. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-dark/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-light/10 rounded-full translate-y-1/3 translate-x-1/3"></div>
    </footer>
  );
};

export default Footer;
