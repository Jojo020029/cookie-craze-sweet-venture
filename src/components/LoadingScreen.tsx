
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
    <div className="fixed inset-0 bg-pink-light/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <img 
        src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
        alt="Cookie Craze Loading" 
        className="w-32 h-32 animate-spin-slower mb-4"
      />
      <h2 className="text-3xl font-fredoka text-cookie-lightBrown mb-2">Cookie Craze</h2>
      <p className="text-xl font-dancing text-cookie-lightBrown">Loading... Yum!</p>
    </div>
  );
};

export default LoadingScreen;
