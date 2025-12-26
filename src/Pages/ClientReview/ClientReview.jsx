import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, TrendingUp, CheckCircle, Quote } from 'lucide-react';
import ScrollMarquee from './ScrollMarquee';
import MessageCard from './MessageCard';
import vdo1 from '../../assets/video/footage3.mp4';

const ClientReview = () => {
  const reviews = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'Exceptional work! They transformed our vision into reality with incredible attention to detail.', rating: 5, avatar: '👩‍💼' },
    { name: 'Michael Chen', role: 'Founder, StartupX', text: 'Professional, creative, and delivered beyond expectations. Highly recommend!', rating: 5, avatar: '👨‍💼' },
    { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'The team at 7007 Studio brings innovation and expertise to every project.', rating: 5, avatar: '👩‍💻' },
    { name: 'David Kim', role: 'Product Manager', text: 'Outstanding collaboration and results. They truly understand modern design.', rating: 5, avatar: '👨‍💻' },
    { name: 'Jessica Martinez', role: 'Creative Director', text: 'Absolutely brilliant! The animations exceeded all our expectations and wowed our clients.', rating: 5, avatar: '👩‍🎨' },
    { name: 'Ryan Thompson', role: 'VP of Marketing', text: 'Their 3D work is phenomenal. We saw a 300% increase in engagement after launching.', rating: 5, avatar: '👨‍💼' }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Banner */}
      <div id='banner-page' className="relative h-screen overflow-hidden top-0 font-silverblack">
        <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" src={vdo1} autoPlay loop muted playsInline />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative pt-40 md:pt-60 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring" }} className="inline-block mb-6">
              <Award className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
            </motion.div>
            <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-7xl md:text-6xl lg:text-9xl font-silverblack mb-6 tracking-wide">
              Client<span className="text-red-500"> Testimonials</span>
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-gray-300 font-dmsans text-lg md:text-xl max-w-3xl mx-auto tracking-wider leading-relaxed">
              Don't just take our word for it. See what our clients have to say about working with us.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Reviews Section */}
      <div className="bg-black px-4 md:px-8 py-16 w-screen">
        <div className="max-w-7xl mx-auto">
          {/* Original Scrolling Marquee */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <ScrollMarquee />
          </div>

          {/* Marquee Reviews */}
          <div className="mt-20">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-9xl font-silverblack mb-12 text-center">
              What Our <span className="text-red-500">Clients Say</span>
            </motion.h2>
            <div className="space-y-8 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <MarqueeRow reviews={reviews.slice(0, 3)} direction="left" speed={40} />
              <MarqueeRow reviews={reviews.slice(3, 6)} direction="right" speed={45} />
              <MarqueeRow reviews={reviews.slice(0, 3)} direction="left" speed={50} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-black relative py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-7xl font-silverblack mb-6 tracking-wide">
            Ready to Join Our<span className="text-red-500"> Success Stories?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-300 font-dmsans text-lg mb-8 tracking-wider leading-relaxed">
            Let's create something extraordinary together
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-red-600 hover:bg-red-700 text-white font-silverbold text-5xl px-12 py-4 inline-flex items-center gap-3 transition-all duration-300">
            Start Your Project<CheckCircle className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// Marquee Row - Handles scrolling animation
const MarqueeRow = ({ reviews, direction, speed }) => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]; // Triple for seamless loop

  return (
    <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <motion.div
        className="flex gap-25"
        animate={{ x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" } }}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {duplicatedReviews.map((review, index) => (
          <MessageCard key={index} review={review} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

// Stats Counter
const Counter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={counterRef}>{prefix}{count}{suffix}</span>;
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', delay: 0.2 },
    { icon: Award, value: 1200, suffix: '+', label: 'Projects Completed', delay: 0.4 },
    { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate', delay: 0.6 },
    { icon: TrendingUp, value: 15, suffix: '+', label: 'Years Experience', delay: 0.8 }
  ];

  return (
    <div className="bg-black px-4 md:px-8 py-16 bg-gradient-to-b from-black to-red-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: stat.delay }} whileHover={{ y: -10 }} className="group relative bg-black border border-red-900/30 hover:border-red-500 p-6 md:p-8 text-center transition-all duration-500">
              <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-500" />
              <div className="relative">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-12 h-12 md:w-16 md:h-16 bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                </motion.div>
                <div className="text-3xl md:text-5xl font-silverblack text-red-500 mb-2 tracking-wider">
                  <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-gray-300 font-dmsans text-sm md:text-base tracking-wide">{stat.label}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;