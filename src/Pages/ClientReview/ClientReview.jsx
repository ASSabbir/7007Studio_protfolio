import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const ClientReview = () => {
  const reviews = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'Exceptional work! They transformed our vision into reality with incredible attention to detail.', rating: 5, avatar: 'A' },
    { name: 'Michael Chen', role: 'Founder, StartupX', text: 'Professional, creative, and delivered beyond expectations. Highly recommend!', rating: 5, avatar: 'B' },
    { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'The team at 7007 Studio brings innovation and expertise to every project.', rating: 5, avatar: 'C' },
    { name: 'David Kim', role: 'Product Manager', text: 'Outstanding collaboration and results. They truly understand modern design.', rating: 5, avatar: 'D' },
    { name: 'Jessica Martinez', role: 'Creative Director', text: 'Absolutely brilliant! The animations exceeded all our expectations and wowed our clients.', rating: 5, avatar: 'E' },
    { name: 'Ryan Thompson', role: 'VP of Marketing', text: 'Their 3D work is phenomenal. We saw a 300% increase in engagement after launching.', rating: 5, avatar: 'F' }
  ];

  return (



    
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 md:pt-32 pb-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-6"
          >
            <Award className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-silverblack mb-6 tracking-wide"
          >
            Client
            <span className="text-red-500"> Testimonials</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 font-dmsans text-lg md:text-xl max-w-3xl mx-auto tracking-wider leading-relaxed"
          >
            Don't just take our word for it. See what our clients have to say about working with us.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Reviews Grid */}
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-silverblack mb-4 tracking-wide">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <TypewriterText 
              text="Real feedback from real clients who trust us with their projects" 
              className="text-gray-300 font-dmsans text-lg tracking-wider"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 md:px-8 mt-16 border-t border-red-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-silverblack mb-6 tracking-wide"
          >
            Ready to Join Our
            <span className="text-red-500"> Success Stories?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-dmsans text-lg mb-8 tracking-wider leading-relaxed"
          >
            Let's create something extraordinary together
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-silverbold text-lg px-12 py-4 inline-flex items-center gap-3 transition-all duration-300"
          >
            Start Your Project
            <CheckCircle className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>




  );
};

// Counter Component
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

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', delay: 0.2 },
    { icon: Award, value: 1200, suffix: '+', label: 'Projects Completed', delay: 0.4 },
    { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate', delay: 0.6 },
    { icon: TrendingUp, value: 15, suffix: '+', label: 'Years Experience', delay: 0.8 }
  ];

  return (
    <div className="px-4 md:px-8 py-16 bg-gradient-to-b from-black to-red-950/5">
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

// Typewriter Text Component
const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  useEffect(() => {
    if (isInView && !isTyping) {
      setTimeout(() => {
        setIsTyping(true);
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 40);

        return () => clearInterval(typingInterval);
      }, delay);
    }
  }, [isInView, text, isTyping, delay]);

  return (
    <p ref={textRef} className={className}>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-red-500 ml-1 align-middle"
        />
      )}
    </p>
  );
};

// Review Card with Typing Animation
const ReviewCard = ({ review, index }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isNameTyping, setIsNameTyping] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= review.text.length) {
          setDisplayedText(review.text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          // Start name typing after text is done
          setTimeout(() => {
            setIsNameTyping(true);
            let nameIndex = 0;
            const nameInterval = setInterval(() => {
              if (nameIndex <= review.name.length) {
                setDisplayedName(review.name.slice(0, nameIndex));
                nameIndex++;
              } else {
                clearInterval(nameInterval);
                setIsNameTyping(false);
              }
            }, 50);
          }, 200);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [isInView, review.text, review.name, isTyping]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-black border border-red-900/30 hover:border-red-500 p-6 md:p-8 transition-all duration-500"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-black/50 transition-all duration-500" />
      
      <div className="relative">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="mb-4"
        >
          <Quote className="w-10 h-10 text-red-500/30 group-hover:text-red-500/50 transition-colors duration-300" />
        </motion.div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 fill-red-500 text-red-500" />
            </motion.div>
          ))}
        </div>

        {/* Review Text with Typing Animation */}
        <div className="mb-6 min-h-[140px]">
          <p className="text-gray-200 font-dmsans text-base md:text-lg leading-relaxed tracking-wide">
            {displayedText}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-red-500 ml-1 align-middle"
              />
            )}
          </p>
        </div>

        {/* Author Info with Name Typing */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className="flex items-center gap-4 pt-6 border-t border-red-900/30"
        >
          <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 flex items-center justify-center text-2xl">
            {review.avatar}
          </div>
          <div>
            <h4 className="font-silverbold text-white group-hover:text-red-500 transition-colors duration-300 text-base md:text-lg tracking-wider">
              {displayedName}
              {isNameTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-4 bg-red-500 ml-1 align-middle"
                />
              )}
            </h4>
            <p className="text-gray-400 font-dmsans text-sm tracking-wide mt-1">{review.role}</p>
          </div>
        </motion.div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500" />
    </motion.div>
  );
};

export default ClientReview;