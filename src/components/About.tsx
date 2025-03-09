
import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current?.classList.add('animate-slide-in-bottom');
          titleRef.current?.classList.remove('opacity-0');
          
          setTimeout(() => {
            contentRef.current?.classList.add('animate-slide-in-left');
            contentRef.current?.classList.remove('opacity-0');
          }, 200);
          
          setTimeout(() => {
            imageRef.current?.classList.add('animate-slide-in-right');
            imageRef.current?.classList.remove('opacity-0');
          }, 400);
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-light/30 to-pink-light/20 z-0"></div>
      
      <div className="section-container relative z-10">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-fredoka mb-12 text-center opacity-0"
        >
          About <span className="text-pink-dark">Cookie</span> <span className="text-cookie-golden">Craze</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div 
            ref={contentRef}
            className="opacity-0"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-pink-light">
              <h3 className="text-2xl font-fredoka mb-4 text-pink-dark">Our Sweet Story</h3>
              <p className="mb-4">
                Cookie Craze began with a simple dream: to create the most delightful cookies that bring joy to everyone who takes a bite.
              </p>
              <p className="mb-4">
                Our bakery is a place where imagination meets flavor, and every cookie is crafted with love and a sprinkle of magic.
              </p>
              <p className="mb-6">
                We believe that the perfect cookie should not only taste amazing but also bring a smile to your face with its playful appearance.
              </p>
              
              <div className="flex items-center">
                <Heart className="text-pink-dark mr-2" size={24} />
                <span className="font-dancing text-2xl text-pink-dark">Made with love</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              ref={imageRef}
              src="/lovable-uploads/e7fec986-ef0e-42e3-93e3-3ca4c3b9c346.png" 
              alt="Cookie Character" 
              className="w-full max-w-md opacity-0 animate-bounce-light"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-cookie-golden animate-float opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-pink-light animate-float opacity-60" style={{ animationDelay: '1.2s' }}></div>
    </section>
  );
};

export default About;
