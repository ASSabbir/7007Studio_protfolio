import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How long does a 3D animation project typically take?',
            answer: 'Project timelines vary based on complexity and scope. A simple product visualization might take 2-3 weeks, while a full 3D animation video can take 8-12 weeks. We follow a structured 10-step pipeline from concept to final delivery, with regular updates and review milestones throughout the process to ensure we stay on track.'
        },
        {
            question: 'What is the cost range for 3D projects?',
            answer: 'Costs depend on project complexity, duration, and requirements. Simple product renders typically start at $2,000-$5,000, while comprehensive animation projects range from $10,000 to $100,000+. We provide detailed quotes after understanding your specific needs during the initial consultation. Payment is structured in milestones: 30% deposit, 40% mid-project, and 30% on delivery.'
        },
        {
            question: 'What do you need from me to get started?',
            answer: 'To begin your project, we need: (1) A project brief describing your goals and vision, (2) Reference materials like images or videos you like, (3) Brand guidelines or style preferences, (4) Timeline requirements, and (5) Budget range. If you have CAD files, product photos, or existing 3D assets, those are helpful but not required.'
        },
        {
            question: 'How many revisions are included in the project?',
            answer: 'We include 2-3 rounds of revisions at key stages: concept approval, modeling/animation review, and final delivery. This ensures the project aligns with your vision while maintaining efficient workflow. Additional revisions beyond this can be accommodated and quoted separately. We encourage detailed feedback during review stages to minimize extensive revisions.'
        },
        {
            question: 'What file formats will I receive upon completion?',
            answer: 'We deliver industry-standard formats based on your needs: Videos (MP4, MOV), Images (PNG, JPEG, TIFF), and 3D Files (FBX, OBJ, GLTF for web). We can also provide optimized files for specific platforms like web, mobile, VR/AR, or social media. Upon full payment, you receive full rights to all final deliverables and rendered content.'
        },
        {
            question: 'What if I need changes after the project is delivered?',
            answer: 'After delivery, we offer a 30-day warranty period for any technical issues with the files. For modifications or updates beyond this, we\'re available for future adjustments at a quoted rate. Many clients work with us on retainer for ongoing support. We maintain project archives, making it easy to retrieve and modify assets if you need variations or updates in the future.'
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black text-white pb-20 px-4 md:px-8 font-KronaOne">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-5xl md:text-5xl font-bold mb-6 tracking-wider">
                        Frequently Asked <span className="text-red-500">Questions</span>
                    </h1>
                    <p className="text-gray-400 text-lg mx-auto">
                        Find answers to the most common questions about our 3D production services. 
                        Can't find what you're looking for? Feel free to reach out.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border border-red-500/30 bg-zinc-900 overflow-hidden relative"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-8 flex items-start justify-between gap-6 hover:bg-red-500/5 transition-colors duration-300 group"
                                >
                                    <span className="text-xl md:text-2xl font-bold flex-1 leading-tight group-hover:text-red-500 transition-colors duration-300">
                                        {item.question}
                                    </span>
                                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border-2 border-red-500 transition-all duration-300 ${
                                        isOpen ? 'bg-red-500 rotate-180' : 'bg-transparent'
                                    }`}>
                                        {isOpen ? (
                                            <Minus className="w-6 h-6 text-white" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 border-t border-red-500/20">
                                                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-transparent mb-6 mt-6" />
                                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-red-500/40 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-red-500/40 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FAQ;