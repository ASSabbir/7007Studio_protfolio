import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactPage = () => {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, down: false });
  const selectedShapeRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const colors = [
    '#dc2626', // red-600
    '#ef4444', // red-500
    '#f87171', // red-400
    '#1f1f1f', // dark gray
    '#2a2a2a', // darker gray
    '#991b1b', // dark red
    '#450a0a', // very dark red
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initShapes();
    };

    const initShapes = () => {
      shapesRef.current = [];
      const numShapes = Math.floor(canvas.width / 100) + 8;

      for (let i = 0; i < numShapes; i++) {
        shapesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: 30 + Math.random() * 30,
          color: colors[Math.floor(Math.random() * colors.length)],
          sides: 6 + Math.floor(Math.random() * 3),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          glowIntensity: Math.random() * 20 + 10,
        });
      }
    };

    const drawPolygon = (x, y, radius, sides, rotation, color, glowIntensity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.shadowColor = color;
      ctx.shadowBlur = glowIntensity;

      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    };

    const isPointInPolygon = (x, y, shape) => {
      const dx = x - shape.x;
      const dy = y - shape.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < shape.radius;
    };

    const handleCollision = (shape1, shape2) => {
      const dx = shape2.x - shape1.x;
      const dy = shape2.y - shape1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDist = shape1.radius + shape2.radius;

      if (distance < minDist) {
        const angle = Math.atan2(dy, dx);
        const targetX = shape1.x + Math.cos(angle) * minDist;
        const targetY = shape1.y + Math.sin(angle) * minDist;

        const ax = (targetX - shape2.x) * 0.05;
        const ay = (targetY - shape2.y) * 0.05;

        shape1.vx -= ax;
        shape1.vy -= ay;
        shape2.vx += ax;
        shape2.vy += ay;

        shape1.rotationSpeed += (Math.random() - 0.5) * 0.05;
        shape2.rotationSpeed += (Math.random() - 0.5) * 0.05;
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape, i) => {
        shape.x += shape.vx;
        shape.y += shape.vy;

        shape.vx *= 0.98;
        shape.vy *= 0.98;

        shape.rotationSpeed *= 0.99;
        shape.rotation += shape.rotationSpeed;

        if (shape.x - shape.radius < 0 || shape.x + shape.radius > canvas.width) {
          shape.vx *= -0.8;
          shape.x = Math.max(shape.radius, Math.min(canvas.width - shape.radius, shape.x));
        }
        if (shape.y - shape.radius < 0 || shape.y + shape.radius > canvas.height) {
          shape.vy *= -0.8;
          shape.y = Math.max(shape.radius, Math.min(canvas.height - shape.radius, shape.y));
        }

        for (let j = i + 1; j < shapesRef.current.length; j++) {
          handleCollision(shape, shapesRef.current[j]);
        }

        if (selectedShapeRef.current === shape && mouseRef.current.down) {
          const dx = mouseRef.current.x - shape.x;
          const dy = mouseRef.current.y - shape.y;
          shape.vx = dx * 0.2;
          shape.vy = dy * 0.2;
        }

        drawPolygon(shape.x, shape.y, shape.radius, shape.sides, shape.rotation, shape.color, shape.glowIntensity);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseRef.current = { x, y, down: true };

      for (let shape of shapesRef.current) {
        if (isPointInPolygon(x, y, shape)) {
          selectedShapeRef.current = shape;
          shape.rotationSpeed = (Math.random() - 0.5) * 0.1;
          break;
        }
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseUp = () => {
      mouseRef.current.down = false;
      selectedShapeRef.current = null;
    };

    const handleTouchStart = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      mouseRef.current = { x, y, down: true };

      for (let shape of shapesRef.current) {
        if (isPointInPolygon(x, y, shape)) {
          selectedShapeRef.current = shape;
          shape.rotationSpeed = (Math.random() - 0.5) * 0.1;
          break;
        }
      }
    };

    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
    };

    const handleTouchEnd = () => {
      mouseRef.current.down = false;
      selectedShapeRef.current = null;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Full screen animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Small contact form overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md pointer-events-auto"
        >
          <div className="bg-black/70 backdrop-blur-xl border border-red-500/30 rounded-2xl p-9 ">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 text-center">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/60 border border-red-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-red-500/50"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;