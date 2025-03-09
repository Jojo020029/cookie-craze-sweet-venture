
import { useEffect, useState } from 'react';

type Sprinkle = {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const Sprinkles = ({ count = 30 }) => {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);

  useEffect(() => {
    const colors = [
      'bg-pink-lightest',
      'bg-pink-light',
      'bg-yellow-lightest',
      'bg-cookie-golden/70',
      'bg-cookie-tan',
    ];

    const newSprinkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 6, // Larger size range
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15, // Slower fall
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
          }}
        />
      ))}
      <style>{`
        .sprinkle {
          position: absolute;
          top: -20px;
          animation: fall linear infinite;
          opacity: 0.7;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Sprinkles;
