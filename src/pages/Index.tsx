
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CookieMenu from '@/components/CookieMenu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Sprinkles from '@/components/Sprinkles';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = "Cookie Craze - Sweet Treats";
    
    // Mark as loaded after animations are done
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <LoadingScreen />
      <Sprinkles count={15} />
      <Navbar />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <CookieMenu />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
