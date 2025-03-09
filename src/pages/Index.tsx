
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CookieMenu from '@/components/CookieMenu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Sprinkles from '@/components/Sprinkles';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Cookie Craze - Sweet Treats";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Sprinkles count={15} />
      <Navbar />
      <Hero />
      <CookieMenu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
