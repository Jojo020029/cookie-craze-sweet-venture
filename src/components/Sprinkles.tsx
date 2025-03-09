
import { useEffect, useState } from 'react';

type Sprinkle = {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
};

const Sprinkles = ({ count = 50 }) => {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-lightest',
      'bg-pink-light',
      'bg-yellow-lightest',
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

    const newSprinkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 4, // Varied size range
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 8,
      duration: Math.random() * 15 + 10, // Slower fall
      rotate: Math.random() * 360, // Random initial rotation
    }));

    setSprinkles(newSprinkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sprinkles.map((sprinkle) => (
        <div
          key={sprinkle.id}
          className={`sprinkle ${sprinkle.color} rounded-full`}
          style={{
            width: `${sprinkle.size}px`,
            height: `${sprinkle.size}px`,
            left: `${sprinkle.x}%`,
            animationDelay: `${sprinkle.delay}s`,
            animationDuration: `${sprinkle.duration}s`,
            transform: `rotate(${sprinkle.rotate}deg)`,
          }}
        />
      ))}
      <style>{`
        .sprinkle {
          position: absolute;
          top: -20px;
          animation: fall linear infinite;
          opacity: 0.7;
          box-shadow: 0 0 10px rgba(255,255,255,0.7);
          filter: blur(0.6px);
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default Sprinkles;
