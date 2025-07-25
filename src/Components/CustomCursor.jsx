import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = (e) => {
      if (e.target.closest('a, button, .hover-target')) {
        setHovered(true);
      }
    };
    const removeHover = () => setHovered(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', addHover);
    window.addEventListener('mouseout', removeHover);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', addHover);
      window.removeEventListener('mouseout', removeHover);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'hovered' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
