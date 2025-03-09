
import { useEffect, useRef, useState } from 'react';

const Product = () => {
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current?.classList.add('animate-slide-in-bottom');
          titleRef.current?.classList.remove('opacity-0');
          
          setTimeout(() => {
            imageRef.current?.classList.add('animate-scale-in');
            imageRef.current?.classList.remove('opacity-0');
          }, 200);
          
          setTimeout(() => {
            textRef.current?.classList.add('animate-slide-in-right');
            textRef.current?.classList.remove('opacity-0');
          }, 400);
          
          setTimeout(() => {
            priceRef.current?.classList.add('animate-slide-in-left');
            priceRef.current?.classList.remove('opacity-0');
          }, 600);
          
          setTimeout(() => {
            buttonRef.current?.classList.add('animate-slide-in-bottom');
            buttonRef.current?.classList.remove('opacity-0');
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-lightest via-yellow-lightest to-pink-light opacity-60"></div>
      
      {/* Floating elements for parallax effect */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-pink-medium top-1/4 left-1/5 opacity-30 blur-sm"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute w-20 h-20 rounded-full bg-yellow-light top-1/3 right-1/4 opacity-30 blur-sm"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      <div 
        className="absolute w-14 h-14 rounded-full bg-cookie-tan bottom-1/4 left-1/3 opacity-20 blur-sm"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      ></div>
      
      <div className="section-container relative z-10">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-quicksand font-bold mb-16 text-center opacity-0"
        >
          Our <span className="text-pink-dark">Premium</span> Cookie Box
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-light via-cookie-golden to-yellow-light rounded-lg opacity-20 blur-lg"
                style={{ transform: `translateY(${scrollY * -0.02}px)` }}></div>
            <img 
              ref={imageRef}
              src="/lovable-uploads/76fb2d05-a1fc-4e1b-9319-a58f9d77a721.png" 
              alt="Premium Cookie Box" 
              className="opacity-0 w-full max-w-md mx-auto hover:scale-105 transition-all duration-500 relative shadow-xl rounded-lg"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            />
          </div>
          
          <div>
            <div 
              ref={textRef}
              className="opacity-0 mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-quicksand text-cookie-lightBrown mb-4">Assorted Cookie Collection</h3>
              <p className="text-lg text-cookie-lightBrown mb-6">
                Our premium cookie box comes with a delightful assortment of our four signature flavors:
              </p>
              <ul className="space-y-2 text-cookie-lightBrown">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cookie-golden rounded-full mr-2"></span>
                  <span>Classic Cookie - The perfect balance of chewy and crispy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-pink-medium rounded-full mr-2"></span>
                  <span>Chocolate Velvet - Rich and decadent chocolate paradise</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cookie-tan rounded-full mr-2"></span>
                  <span>Kunafa Cookie - A Middle Eastern twist with sweet pastry</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-light rounded-full mr-2"></span>
                  <span>Pistachio Dream - Nutty, sweet, and absolutely delightful</span>
                </li>
              </ul>
            </div>
            
            <div 
              ref={priceRef}
              className="opacity-0 mb-8 bg-white/70 p-6 rounded-lg shadow-md backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xl font-quicksand text-cookie-lightBrown">Price:</span>
                <span className="text-3xl font-dancing text-pink-dark">$24.99</span>
              </div>
              <p className="text-sm text-cookie-lightBrown mt-2">Each box contains 12 cookies (3 of each flavor)</p>
            </div>
            
            <button 
              ref={buttonRef}
              className="opacity-0 bg-pink-medium hover:bg-pink-dark text-white font-quicksand font-bold text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
