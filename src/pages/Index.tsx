
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CookieMenu from '@/components/CookieMenu';
import Product from '@/components/Product';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Sprinkles from '@/components/Sprinkles';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Set page title
    document.title = "Cookie Craze - Sweet Treats";
    
    // Mark as loaded after animations are done
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    // Add scroll event listener for parallax
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <LoadingScreen />
      <Sprinkles count={25} />
      
      {/* Decorative gradient elements that move on scroll */}
      <div 
        className="fixed top-1/4 left-10 w-64 h-64 rounded-full bg-pink-lightest opacity-20 blur-xl"
        style={{ transform: `translate3d(0, ${scrollPosition * 0.2}px, 0)` }}
      ></div>
      <div 
        className="fixed bottom-1/3 right-10 w-96 h-96 rounded-full bg-yellow-lightest opacity-30 blur-xl"
        style={{ transform: `translate3d(0, ${-scrollPosition * 0.1}px, 0)` }}
      ></div>
      
      <Navbar />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <CookieMenu />
        <Product />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
