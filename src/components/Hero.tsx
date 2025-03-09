
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const titleElement = titleRef.current;
    const imageElement = imageRef.current;
    const subtitleElement = subtitleRef.current;
    const buttonElement = buttonRef.current;

    if (titleElement) titleElement.classList.add('animate-slide-in-left');
    if (imageElement) {
      setTimeout(() => {
        imageElement.classList.add('animate-scale-in');
        imageElement.classList.remove('opacity-0');
      }, 200);
    }
    if (subtitleElement) {
      setTimeout(() => {
        subtitleElement.classList.add('animate-slide-in-right');
        subtitleElement.classList.remove('opacity-0');
      }, 400);
    }
    if (buttonElement) {
      setTimeout(() => {
        buttonElement.classList.add('animate-slide-in-bottom');
        buttonElement.classList.remove('opacity-0');
      }, 600);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-lightest/70 to-yellow-lightest/60 z-0"></div>
      
      {/* Floating elements for parallax effect */}
      <div 
        className="absolute w-12 h-12 rounded-full bg-pink-lightest top-1/4 left-1/4 opacity-60"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute w-16 h-16 rounded-full bg-yellow-lightest top-1/3 right-1/4 opacity-60"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      <div 
        className="absolute w-10 h-10 rounded-full bg-cookie-tan bottom-1/4 left-1/3 opacity-50"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      ></div>
      
      <div className="section-container z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-quicksand font-bold mb-4"
            >
              Welcome to <br />
              <span className="text-pink-medium">Cookie</span>
              <span className="text-cookie-golden">Craze</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl mb-8 opacity-0 font-nunito text-cookie-lightBrown"
            >
              Bite into happiness with our deliciously cute cookies! Each one is baked with love and a sprinkle of magic.
            </p>
            
            <a 
              ref={buttonRef}
              href="#flavors" 
              className="opacity-0 bg-pink-light hover:bg-pink-medium text-cookie-lightBrown font-quicksand font-bold text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 mx-auto md:mx-0 inline-block"
            >
              Explore Flavors
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end items-center relative">
            {/* Main cookie image */}
            <img 
              ref={imageRef}
              src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
              alt="Cookie Craze Mascot" 
              className="opacity-0 w-full max-w-md animate-float z-10 relative"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            />
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pink-lightest/30 rounded-full filter blur-xl" 
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
