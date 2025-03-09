
import { useEffect, useState } from 'react';

type Sprinkle = {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const Sprinkles = ({ count = 20 }) => {
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
      size: Math.random() * 8 + 4, // Smaller size range
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 7 + 12, // Slower fall
    }));

    setSprinkles(newSprinkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sprinkles.map((sprinkle) => (
        <div
          key={sprinkle.id}
          className={`sprinkle ${sprinkle.color}`}
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
          animation: fall linear infinite;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Sprinkles;
