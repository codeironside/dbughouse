import React, { useEffect } from 'react';

const RotatingEarth = () => {
  useEffect(() => {
    const canvas = document.getElementById('earthCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let rotation = 0;
    const earthImage = new Image();
    earthImage.src = 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop';

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      ctx.globalAlpha = 0.1; // Make the earth subtle
      ctx.drawImage(
        earthImage,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );
      ctx.restore();

      rotation += 0.001;
      requestAnimationFrame(animate);
    };

    earthImage.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      animate();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      id="earthCanvas"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default RotatingEarth;