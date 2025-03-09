
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          titleRef.current?.classList.add('animate-slide-in-bottom');
          titleRef.current?.classList.remove('opacity-0');
          
          setTimeout(() => {
            formRef.current?.classList.add('animate-scale-in');
            formRef.current?.classList.remove('opacity-0');
          }, 300);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon!",
        variant: "default",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-pink-light/40">
      <div className="section-container">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-fredoka mb-12 text-center opacity-0"
        >
          Contact <span className="text-cookie-golden">Us</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-medium opacity-0"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-cookie-brown font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-light focus:border-pink-medium focus:outline-none transition-colors"
                placeholder="Your sweet name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-cookie-brown font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-light focus:border-pink-medium focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-cookie-brown font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-light focus:border-pink-medium focus:outline-none transition-colors"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-medium hover:bg-pink-dark text-white font-fredoka text-xl py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-cookie-golden animate-float opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 rounded-full bg-pink-medium animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Contact;
