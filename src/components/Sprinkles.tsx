
import { useEffect, useState } from 'react';

type Sprinkle = {
  id: number;
  x: number;
  y: number; // Added initial y position
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
  blurAmount: string; // Added blur variation
  opacity: number; // Added opacity variation
};

const Sprinkles = ({ count = 70 }) => {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-lightest',
      'bg-pink-light',
      'bg-pink-medium',
      'bg-yellow-lightest',
      'bg-yellow-light',
      'bg-cookie-golden/70',
      'bg-cookie-tan',
      'bg-[#9b87f5]',
      'bg-[#D6BCFA]',
      'bg-[#FEF7CD]',
      'bg-[#FEC6A1]',
      'bg-[#E5DEFF]',
      'bg-[#FFDEE2]',
      'bg-[#FDE1D3]',
      'bg-[#D3E4FD]',
      'bg-[#F1F0FB]',
    ];
    
    const blurAmounts = ['blur-none', 'blur-sm', 'blur-md', 'blur-[1px]', 'blur-[0.5px]'];

    const newSprinkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -50, // Random initial y position above viewport
      size: Math.random() * 10 + 4, // Varied size range
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10, // Longer random delays
      duration: Math.random() * 20 + 15, // Wider range of fall durations
      rotate: Math.random() * 360, // Random initial rotation
      blurAmount: blurAmounts[Math.floor(Math.random() * blurAmounts.length)],
      opacity: Math.random() * 0.5 + 0.2, // Random opacity between 0.2 and 0.7
    }));

    setSprinkles(newSprinkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sprinkles.map((sprinkle) => (
        <div
          key={sprinkle.id}
          className={`sprinkle ${sprinkle.color} rounded-full ${sprinkle.blurAmount}`}
          style={{
            width: `${sprinkle.size}px`,
            height: `${sprinkle.size}px`,
            left: `${sprinkle.x}%`,
            top: `${sprinkle.y}%`,
            animationDelay: `${sprinkle.delay}s`,
            animationDuration: `${sprinkle.duration}s`,
            transform: `rotate(${sprinkle.rotate}deg)`,
            opacity: sprinkle.opacity,
            boxShadow: `0 0 ${Math.floor(sprinkle.size/2)}px rgba(255,255,255,0.8)`
          }}
        />
      ))}
      <style>{`
        .sprinkle {
          position: absolute;
          animation: fall linear infinite, twinkle 3s ease-in-out infinite;
          will-change: transform, opacity;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(120vh) rotate(720deg);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Sprinkles;
