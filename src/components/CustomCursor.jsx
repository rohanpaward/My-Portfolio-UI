import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
        }}
      />

      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-yellow-300 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out opacity-30"
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
