
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect on scroll and mouse movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 20,
        y: (event.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

  // Decorative elements that will respond to mouse movement
  const decorElements = [
    { size: 'w-16 h-16', color: 'bg-gradient-to-r from-pink-lightest to-pink-light', position: 'top-1/4 left-1/5', opacity: 'opacity-50', blur: 'blur-sm', speedX: 0.05, speedY: -0.03 },
    { size: 'w-20 h-20', color: 'bg-gradient-to-r from-yellow-lightest to-yellow-light', position: 'top-1/3 right-1/4', opacity: 'opacity-40', blur: 'blur-md', speedX: -0.06, speedY: 0.02 },
    { size: 'w-12 h-12', color: 'bg-gradient-to-r from-cookie-tan to-yellow-light', position: 'bottom-1/3 left-1/3', opacity: 'opacity-50', blur: 'blur-sm', speedX: 0.03, speedY: 0.05 },
    { size: 'w-24 h-24', color: 'bg-gradient-to-br from-pink-light to-yellow-lightest', position: 'bottom-1/4 right-1/3', opacity: 'opacity-30', blur: 'blur-lg', speedX: -0.04, speedY: -0.02 },
    { size: 'w-14 h-14', color: 'bg-gradient-to-tl from-pink-medium to-pink-lightest', position: 'top-1/2 right-1/5', opacity: 'opacity-40', blur: 'blur-sm', speedX: 0.07, speedY: 0.04 },
    { size: 'w-10 h-10', color: 'bg-gradient-to-tr from-cookie-golden to-yellow-cream', position: 'bottom-1/2 left-1/5', opacity: 'opacity-60', blur: 'blur-sm', speedX: -0.05, speedY: -0.06 },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-lightest/80 via-yellow-lightest/70 to-pink-light/60 z-0"></div>
      
      {/* Enhanced floating elements for parallax and mouse effects */}
      {decorElements.map((elem, index) => (
        <div 
          key={index}
          className={`absolute ${elem.size} rounded-full ${elem.color} ${elem.position} ${elem.opacity} ${elem.blur}`}
          style={{ 
            transform: `translate(${mousePosition.x * elem.speedX}px, ${mousePosition.y * elem.speedY}px) translateY(${scrollY * (index % 2 === 0 ? 0.1 : -0.1)}px) rotate(${scrollY * (index % 2 === 0 ? 0.01 : -0.01)}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
      ))}
      
      <div className="section-container z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-bold mb-4"
            >
              Welcome to <br />
              <span className="text-pink-medium">Cookie</span>
              <span className="text-cookie-golden">Craze</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl mb-8 opacity-0 font-playfair text-cookie-lightBrown"
            >
              Bite into happiness with our deliciously cute cookies! Each one is baked with love and a sprinkle of magic.
            </p>
            
            <a 
              ref={buttonRef}
              href="#flavors" 
              className="opacity-0 bg-pink-light hover:bg-pink-medium text-cookie-lightBrown font-cormorant font-bold text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 mx-auto md:mx-0 inline-block hover:shadow-xl"
            >
              Explore Flavors
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end items-center relative">
            {/* Enhanced lighting effects that respond to mouse movement */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-pink-lightest to-yellow-lightest opacity-30 rounded-full blur-xl"
              style={{ 
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px) translateY(${scrollY * 0.02}px) scale(1.2)` 
              }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-pink-light/30 to-yellow-light/30 opacity-40 rounded-full blur-lg"
              style={{ 
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * -0.03}px) scale(0.9)` 
              }}
            ></div>
            
            {/* Main cookie image with enhanced animation */}
            <div className="relative transform hover:scale-105 transition-transform duration-500 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-light/20 via-yellow-light/20 to-pink-light/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
              <img 
                ref={imageRef}
                src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
                alt="Cookie Craze Mascot" 
                className="opacity-0 w-full max-w-md animate-float z-10 relative hover:shadow-2xl transition-shadow duration-300"
                style={{ 
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * -0.05}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
