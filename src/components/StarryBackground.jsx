import React, { useEffect, useRef } from "react";

const StarryBackground = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight; // Ensures full height for scrolling
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 2, 
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.01,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 105, 180, ${star.alpha})`; 
        ctx.fill();
      });
    };

    const animateStars = () => {
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha >= 1 || star.alpha <= 0.1) star.speed *= -1;
      });
      drawStars();
      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Starry Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarryBackground;
