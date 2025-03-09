
import { useEffect, useRef } from 'react';

const cookies = [
  {
    id: 1,
    name: "Classic Cookie",
    description: "The perfect balance of chewy and crispy with chocolate chunks.",
    color: "bg-cookie-golden",
    direction: "animate-slide-in-left"
  },
  {
    id: 2,
    name: "Chocolate Velvet",
    description: "Rich, smooth, and oh-so-decadent chocolate paradise.",
    color: "bg-cookie-brown",
    direction: "animate-slide-in-bottom"
  },
  {
    id: 3,
    name: "Kunafa Cookie",
    description: "A Middle Eastern twist with sweet cheese and crunchy pastry bits.",
    color: "bg-pink-medium",
    direction: "animate-slide-in-right"
  },
  {
    id: 4,
    name: "Pistachio Dream",
    description: "Nutty, sweet, and absolutely delightful with every bite.",
    color: "bg-yellow-light",
    direction: "animate-slide-in-bottom"
  }
];

const CookieCard = ({ cookie, index }: { cookie: typeof cookies[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add(cookie.direction);
            cardRef.current?.classList.remove('opacity-0');
          }, index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cookie.direction, index]);

  return (
    <div
      ref={cardRef}
      className={`relative opacity-0 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 ${cookie.color} text-white border-4 border-cookie-brown overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full"></div>
      
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-fredoka mb-2 cookie-outline">{cookie.name}</h3>
        <p className="font-nunito mb-4">{cookie.description}</p>
        <div className="mt-auto">
          <button className="bg-white text-cookie-brown py-2 px-4 rounded-full font-fredoka hover:bg-yellow-light transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const CookieMenu = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current?.classList.add('animate-slide-in-bottom');
          titleRef.current?.classList.remove('opacity-0');
          
          setTimeout(() => {
            textRef.current?.classList.add('animate-slide-in-bottom');
            textRef.current?.classList.remove('opacity-0');
          }, 200);
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
    <section id="flavors" className="py-20 relative bg-pink-light/30">
      <div className="section-container">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-fredoka mb-4 text-center opacity-0"
        >
          Our <span className="text-pink-dark">Delicious</span> Flavors
        </h2>
        <p 
          ref={textRef}
          className="text-xl text-center max-w-3xl mx-auto mb-12 opacity-0"
        >
          Each cookie is crafted with love and the finest ingredients to create a taste sensation that will leave you craving more!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {cookies.map((cookie, index) => (
            <CookieCard key={cookie.id} cookie={cookie} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-pink-medium animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-yellow-light animate-float opacity-50" style={{ animationDelay: '0.7s' }}></div>
    </section>
  );
};

export default CookieMenu;
