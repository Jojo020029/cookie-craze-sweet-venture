
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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
      <div className="absolute inset-0 bg-gradient-to-b from-pink-light/30 to-yellow-light/40 z-0"></div>
      
      <div className="section-container z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-fredoka mb-4"
            >
              Welcome to <br />
              <span className="text-pink-dark">Cookie</span>
              <span className="text-cookie-golden">Craze</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl mb-8 opacity-0 font-nunito"
            >
              Bite into happiness with our deliciously cute cookies! Each one is baked with love and a sprinkle of magic.
            </p>
            
            <a 
              ref={buttonRef}
              href="#flavors" 
              className="opacity-0 bg-pink-medium hover:bg-pink-dark text-white font-fredoka text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 mx-auto md:mx-0 inline-block"
            >
              Explore Flavors
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end items-center">
            <img 
              ref={imageRef}
              src="/lovable-uploads/e7fec986-ef0e-42e3-93e3-3ca4c3b9c346.png" 
              alt="Cookie Craze Mascot" 
              className="opacity-0 w-full max-w-md animate-bounce-light"
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-pink-light animate-float opacity-70"></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 rounded-full bg-yellow-light animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-cookie-lightBrown animate-float opacity-70" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
