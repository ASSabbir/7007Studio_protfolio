import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';
import vdo1 from '../../assets/video/footage3.mp4';
import ScrollMarquee from './ScrollMarquee';

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ y: -10 }}
              className="group relative bg-black border border-red-900/30 hover:border-red-500 p-6 md:p-8 text-center transition-all duration-500"
            >
              <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 md:w-16 md:h-16 bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-all duration-300"
                >
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

const ClientReview = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'TechCorp Industries',
      text: 'Exceptional work! They transformed our vision into reality with incredible attention to detail and creativity that exceeded all expectations.',
      rating: 5,
      avatar: 'SJ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      projectType: 'Product Animation'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupX',
      text: 'Professional, creative, and delivered beyond expectations. The 3D animations brought our product to life in ways we never imagined.',
      rating: 5,
      avatar: 'MC',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      projectType: '3D Modeling'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Ventures',
      text: 'The team at 7007 Studio brings innovation and expertise to every project. Absolutely phenomenal results every single time.',
      rating: 5,
      avatar: 'ER',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      projectType: 'Brand Video'
    }
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

      {/* Marque Section */}

      <div className="bg-black">
        <ScrollMarquee></ScrollMarquee>
      </div>

      {/* Reviews Section - Updated with 3D Cards */}
      <div className="bg-black px-4 md:px-8 py-24 w-screen overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-9xl font-silverblack text-center"
          >
            What Our <span className="text-red-500">Clients Say</span>
          </motion.h2>
        </div>

        {/* Single Marquee Row with 3D Cards */}
        <MarqueeRow reviews={reviews} />
      </div>
    </div>
  );
};

// 3D Review Card Component
const ReviewCard3D = ({ review }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[620px] lg:w-[460px] mx-6">
      <div
        className="relative bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-3xl overflow-hidden"
        style={{
          transform: 'perspective(900px) rotateX(1.5deg)',
          transformStyle: 'preserve-3d',
          boxShadow:
            '0 40px 80px -20px rgba(0, 0, 0, 0.7), 0 25px 50px -30px rgba(239, 68, 68, 0.35)',
        }}
      >
        {/* Glossy Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
          style={{ transform: 'translateZ(18px)' }}
        />

        {/* Glass Reflection */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl"
          style={{ transform: 'translateZ(8px)' }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          <div className="grid md:grid-cols-[240px,1fr] gap-6 items-start">

            {/* Left Image */}
            <div className="relative mx-auto md:mx-0">
              <div className="absolute inset-0 bg-red-500/15 blur-3xl rounded-full" />

              <div
                className="relative rounded-full overflow-hidden border-2 border-white/10 w-full max-w-[150px]"
                style={{
                  transform: 'translateZ(25px)',
                  boxShadow: '0 18px 45px -10px rgba(239, 68, 68, 0.45)',
                }}
              >
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full aspect-square object-cover"
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">
                      {review.avatar}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25" />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent" />
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-3 -right-3 bg-gradient-to-br from-red-500 to-red-700 rounded-xl px-4 py-2 border border-white/20"
                style={{
                  transform: 'translateZ(35px)',
                  boxShadow: '0 8px 25px -5px rgba(239, 68, 68, 0.55)',
                }}
              >
                <p className="text-white font-semibold text-xs">
                  {review.projectType}
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4">

              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(review.rating)].map((_, i) => (
                  <div
                    key={i}
                    style={{ transform: `translateZ(${22 + i * 2}px)` }}
                  >
                    <Star className="w-5 h-5 md:w-6 md:h-6 fill-red-500 text-red-500" />
                  </div>
                ))}
              </div>

              {/* Review */}
              <p
                className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                style={{ transform: 'translateZ(18px)' }}
              >
                "{review.text}"
              </p>

              {/* Divider */}
              <div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ transform: 'translateZ(12px)' }}
              />

              {/* Author */}
              <div
                className="space-y-1"
                style={{ transform: 'translateZ(22px)' }}
              >
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                  {review.name}
                </h3>
                <p className="text-red-400 text-sm md:text-base font-medium">
                  {review.role}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">
                  {review.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-500/10 to-transparent" />
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