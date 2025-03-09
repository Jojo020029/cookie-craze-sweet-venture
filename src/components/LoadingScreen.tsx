
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-lightest via-yellow-lightest to-pink-light backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Additional lighting effects */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-lightest to-yellow-lightest opacity-40 animate-pulse blur-xl"></div>
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-yellow-light to-pink-light opacity-30 animate-pulse blur-md"></div>
        
        {/* Cookie container with proper centering */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-pink-lightest opacity-30 rounded-full animate-pulse"></div>
          <img 
            src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
            alt="Cookie Craze Loading" 
            className="w-32 h-32 animate-spin-slower relative z-10"
          />
          <div className="absolute -bottom-5 w-32 h-4 bg-cookie-tan/20 rounded-full blur-md"></div>
        </div>
      </div>
      <h2 className="text-3xl font-cormorant font-semibold text-cookie-lightBrown mb-2 mt-6 animate-bounce-light">Cookie Craze</h2>
      <p className="text-xl font-playfair text-cookie-lightBrown animate-pulse">Loading... Yum!</p>
    </div>
  );
};

export default LoadingScreen;
