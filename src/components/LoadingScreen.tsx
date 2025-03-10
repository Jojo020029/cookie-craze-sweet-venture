
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
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Enhanced lighting effects */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-lightest to-yellow-lightest opacity-40 animate-glow-pulse blur-xl"></div>
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-yellow-light to-pink-light opacity-30 animate-pulse blur-md"></div>
        
        {/* Cookie container with proper centering */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-light/40 to-yellow-light/40 opacity-60 rounded-full animate-pulse"></div>
          <img 
            src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
            alt="Cookie Craze Loading" 
            className="w-40 h-40 animate-float relative z-10"
          />
          <div className="absolute -bottom-4 w-36 h-4 bg-cookie-tan/30 rounded-full blur-md animate-pulse"></div>
        </div>
      </div>
      <p className="text-xl font-cormorant text-cookie-lightBrown animate-pulse mt-6">Loading yummy treats...</p>
    </div>
  );
};

export default LoadingScreen;
