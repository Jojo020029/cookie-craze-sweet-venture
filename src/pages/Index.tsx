
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    
    // Add mouse movement event listener for parallax
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 30,
        y: (event.clientY / window.innerHeight - 0.5) * 30
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <LoadingScreen />
      <Sprinkles count={70} />
      
      {/* Enhanced decorative gradient elements with more dynamic movement */}
      <div 
        className="fixed top-1/4 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-pink-lightest to-yellow-lightest opacity-20 blur-xl"
        style={{ 
          transform: `translate3d(${scrollPosition * 0.03 + mousePosition.x * 0.1}px, 
                                 ${scrollPosition * 0.1 + mousePosition.y * 0.1}px, 0) 
                      rotate(${scrollPosition * 0.01}deg)` 
        }}
      ></div>
      <div 
        className="fixed bottom-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-lightest to-pink-light opacity-30 blur-xl"
        style={{ 
          transform: `translate3d(${scrollPosition * -0.03 + mousePosition.x * -0.05}px, 
                                 ${scrollPosition * -0.1 + mousePosition.y * -0.05}px, 0) 
                      rotate(${scrollPosition * -0.01}deg)` 
        }}
      ></div>
      <div 
        className="fixed top-1/2 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-cookie-tan to-pink-medium opacity-20 blur-xl"
        style={{ 
          transform: `translate3d(${scrollPosition * 0.05 + mousePosition.x * 0.03}px, 
                                 ${scrollPosition * -0.15 + mousePosition.y * 0.03}px, 0) 
                      rotate(${scrollPosition * 0.02 + mousePosition.x * 0.01}deg)` 
        }}
      ></div>
      <div 
        className="fixed bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-light to-cookie-golden opacity-20 blur-xl"
        style={{ 
          transform: `translate3d(${scrollPosition * -0.04 + mousePosition.x * -0.02}px, 
                                 ${scrollPosition * 0.12 + mousePosition.y * -0.02}px, 0) 
                      rotate(${scrollPosition * -0.02 + mousePosition.y * 0.01}deg)` 
        }}
      ></div>
      
      {/* Additional decorative elements */}
      <div 
        className="fixed top-1/3 left-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-pink-light/30 to-yellow-lightest/30 opacity-30 blur-lg animate-pulse"
        style={{ 
          transform: `translate3d(${scrollPosition * 0.06 + mousePosition.y * 0.04}px, 
                                 ${scrollPosition * -0.08 + mousePosition.x * 0.04}px, 0)` 
        }}
      ></div>
      <div 
        className="fixed bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-gradient-to-tl from-cookie-golden/30 to-pink-lightest/30 opacity-40 blur-lg animate-pulse"
        style={{ 
          transform: `translate3d(${scrollPosition * -0.05 + mousePosition.y * -0.03}px, 
                                 ${scrollPosition * 0.07 + mousePosition.x * -0.03}px, 0)` 
        }}
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
