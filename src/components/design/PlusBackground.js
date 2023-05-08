import React, { useEffect, useRef } from "react";

const PlusBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const numberOfPlusSigns = 50;
    const size = 16;
    const margin = size;
    const plusSigns = [];

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate grid positions for the plus signs
    for (let x = margin; x <= canvas.width - margin; x += size * 1.1) {
      for (let y = margin; y <= canvas.height - margin; y += size * 1.1) {
        if (y < canvas.height * 2 || y > canvas.height * 2) {
          if (x < canvas.width * 0.05 || x > canvas.width * 0.94) {
            plusSigns.push({ x, y });
          } else if (Math.random() > 2) {
            plusSigns.push({ x, y });
          }
        }
      }
    }

    // Shuffle the plus sign positions
    for (let i = plusSigns.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [plusSigns[i], plusSigns[j]] = [plusSigns[j], plusSigns[i]];
    }

    // Draw plus signs
    plusSigns.slice(0, numberOfPlusSigns).forEach((plusSign) => {
      context.fillStyle = "red";
      if (Math.random() < 0.15) {
        context.save();
        context.translate(plusSign.x, plusSign.y);
        context.rotate(Math.PI / 4);
        context.fillRect(-size / 2, 0, size, 1);
        context.fillRect(0, -size / 2, 1, size);
        context.restore();
      } else {
        context.fillRect(plusSign.x - size / 2, plusSign.y, size, 1);
        context.fillRect(plusSign.x, plusSign.y - size / 2, 1, size);
      }
    });
  }, []);

  return <canvas id="background" ref={canvasRef} />;
};

export default PlusBackground;
