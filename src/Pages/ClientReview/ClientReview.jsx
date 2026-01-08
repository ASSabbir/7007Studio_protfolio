import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

// Mock video component
const MockVideo = () => (
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black" />
);

// Stats Section
const StatsSection = () => {
  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', delay: 0.2 },
    { icon: Award, value: 1200, suffix: '+', label: 'Projects Completed', delay: 0.4 },
    { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate', delay: 0.6 },
    { icon: TrendingUp, value: 15, suffix: '+', label: 'Years Experience', delay: 0.8 }
  ];

  return (
    <div className="bg-black px-4 md:px-8 py- bg-gradient-to-b from-black to-red-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ y: -10 }}
              className="group relative bg-black hover:border-red-600 p-6 md:p-8 text-center transition-all duration-500"
            >
              <div className="absolute inset-0 transition-all duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 md:w-16 md:h-16 bg-red-600/10 border border-red-600/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                </motion.div>
                <div className="text-3xl md:text-6xl font-bold text-red-600 mb-2 tracking-wider">
                  <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-gray-300 text-sm md:text-3xl tracking-wide">{stat.label}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientReview = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'TechCorp Industries',
      text: 'Exceptional quality with outstanding attention to detail.',
      rating: 5,
      avatar: 'SJ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      projectType: 'Product Animation'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupX',
      text: 'Professional delivery that brought our product to life.',
      rating: 5,
      avatar: 'MC',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      projectType: '3D Modeling'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Ventures',
      text: 'Consistently innovative results with a cinematic finish.',
      rating: 5,
      avatar: 'ER',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      projectType: 'Brand Video'
    }
  ];


  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Banner */}


      {/* Stats Section */}
      <StatsSection />

      {/* Reviews Section - Updated with Service Card Style */}
      <div className="bg-black px-4 md:px-8 py-24 w-screen overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16">
          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-9xl font-bold text-center"
          >
            What Our <span className="text-red-600">Clients Say</span>
          </motion.h2> */}
        </div>

        {/* Single Marquee Row with Updated Cards */}
        <MarqueeRow reviews={reviews} />
      </div>
    </div>
  );
};

// Updated Review Card Component - Following ServiceCard Design
const ReviewCard3D = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[620px] lg:w-[460px] mx-6">
      <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-red-600 overflow-hidden">
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-black/50 transition-all duration-500" />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-[1fr_200px]">
          {/* Left Section - Text Content */}
          <div className="relative flex flex-col justify-between p-8 border-r-2 border-gray-700">
            <div>
              {/* Name */}
              <h3 className="text-4xl lg:text-2xl font-bold text-white font-serif mb-6 leading-tight">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="flex gap-1.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              {/* Category Badge */}
              <span className="letter bg-red-700 text-white text-sm font-semibold px-4 py-2 uppercase tracking-[0.15em]">
                {review.projectType}
              </span>

            </div>
          </div>

          {/* Right Section - Corner Accent */}
          <div className="relative">
            {/* Top Right Red Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-red-700"></div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="grid grid-cols-[1fr_200px]">
          {/* Bottom Left - Review Text */}
          <div className="relative p-8 border-t-2 border-b-2 border-gray-700">
            <p className="text-white/90 text-base font-serif leading-relaxed mb-4">
              "{review.text}"
            </p>

            {/* Author Details */}
            <div className="space-y-1">
              <p className="text-red-400 text-base font-serif">
                {review.role}
              </p>
              <p className="text-gray-400 text-sm font-serif">
                {review.company}
              </p>
            </div>

            {/* Bottom Left Red Corner */}
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-red-700"></div>
          </div>

          {/* Bottom Right - Image with Glow */}
          <div className="relative border-t-2 border-l-2 border-gray-700 flex items-center justify-center p-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 blur-2xl animate-pulse" />
            </div>

            <div className="relative z-10 w-full h-full">
              {review.image ? (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center rounded-lg">
                  <span className="text-white text-5xl font-bold">
                    {review.avatar}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Marquee Row - Single Line Scrolling
const MarqueeRow = ({ reviews }) => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear"
          }
        }}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard3D key={index} review={review} />
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

export default ClientReview;