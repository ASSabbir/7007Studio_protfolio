import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/0Swr3dhMkTmmzhgH/scene.splinecode" />
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-3 w-[150px] h-[40px] sm:w-[200px] sm:h-[50px] bg-black z-20"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex  items-center px-[10vw]  lg:justify-end min-h-screen   pointer-events-none">
        {/* Left side - Contact Form */}
        <div className="relative   w-full lg:w-1/2 max-w-2xl pointer-events-auto">
          {/* Glass morphism container */}
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-white/70 text-sm sm:text-base md:text-lg">
                We'd love to hear from you. Send us a message!
              </p>
            </div>

            {/* Form */}
            {!submitted ? (
              <div className="space-y-4 md:space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none backdrop-blur-sm text-sm sm:text-base"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5  border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70 text-sm sm:text-base">We'll get back to you soon.</p>
              </div>
            )}

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-2 sm:gap-4 text-white/60 text-xs sm:text-sm">
              <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                hello@example.com
              </a>
              <span className="text-white/30">•</span>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Right side - New Spline Scene */}
        {/* <div className="relative lg:right-20 xl:right-80 hidden lg:block w-1/2 h-screen pointer-events-auto">
          <Spline scene="https://prod.spline.design/Yl5v1BednKtCBeel/scene.splinecode" />
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-3 w-[150px] h-[40px] sm:w-[200px] sm:h-[50px] bg-black z-20"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;