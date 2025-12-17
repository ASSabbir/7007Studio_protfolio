import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const MessageCard = ({ review, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-2xl ${isEven ? 'mr-auto' : 'ml-auto'}`}>
        {/* Message Bubble */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`relative bg-gradient-to-br ${
            isEven 
              ? 'from-red-500/10 to-black border-l-4 border-red-500' 
              : 'from-gray-800 to-black border-r-4 border-red-500'
          } p-6 md:p-8 rounded-2xl shadow-xl`}
        >
          {/* Speech Bubble Triangle */}
          <div 
            className={`absolute top-6 ${
              isEven ? '-left-3' : '-right-3'
            } w-0 h-0 border-t-[12px] border-b-[12px] ${
              isEven 
                ? 'border-r-[12px] border-r-red-500 border-t-transparent border-b-transparent' 
                : 'border-l-[12px] border-l-red-500 border-t-transparent border-b-transparent'
            }`}
          />

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-red-500 text-red-500" />
              </motion.div>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-200 font-dmsans text-base md:text-lg leading-relaxed tracking-wide mb-6">
            "{review.text}"
          </p>

          {/* Client Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
            {/* Avatar */}
            <div className="relative group/avatar">
              {review.image ? (
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-14 h-14 object-cover rounded-full border-2 border-red-500/30"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border-2 border-red-500/30">
                  <span className="text-white font-silverbold text-lg tracking-wider">
                    {review.avatar}
                  </span>
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-black">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Client Details */}
            <div className="flex-1">
              <h4 className="font-silverbold text-white text-base md:text-lg tracking-wider">
                {review.name}
              </h4>
              <p className="text-gray-400 font-dmsans text-sm tracking-wide">{review.role}</p>
              <p className="text-gray-600 font-dmsans text-xs tracking-wide">{review.company}</p>
            </div>

            {/* Project Badge */}
            <div className="hidden md:block">
              <span className="inline-block text-xs font-dmsans text-red-400 bg-red-500/10 px-3 py-1 border border-red-500/30 rounded-full tracking-wider">
                {review.projectType}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Example usage with sample data
const ExampleUsage = () => {
  const sampleReview = {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    company: 'TechCorp Industries',
    text: 'Exceptional work! They transformed our vision into reality with incredible attention to detail.',
    rating: 5,
    avatar: 'SJ',
    image: null,
    projectType: 'Product Animation'
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <MessageCard review={sampleReview} index={0} />
        <MessageCard review={sampleReview} index={1} />
        <MessageCard review={sampleReview} index={2} />
      </div>
    </div>
  );
};

export default MessageCard;