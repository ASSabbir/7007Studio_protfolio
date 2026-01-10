import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How long does a 3D animation project typically take?',
            answer: 'Project timelines vary based on complexity and scope. A simple product visualization might take 2-3 weeks, while a full 3D animation video can take 8-12 weeks. We follow a structured 10-step pipeline from concept to final delivery, with regular updates and review milestones throughout the process to ensure we stay on track.'
        },
        {
            question: 'What is the cost range for 3D projects?',
            answer: 'Costs depend on project complexity, duration, and requirements. Simple product renders typically start at $2,000-$5,000, while comprehensive animation projects range from $10,000 to $100,000+. We provide detailed quotes after understanding your specific needs during the initial consultation.'
        },
        {
            question: 'What do you need from me to get started?',
            answer: 'To begin your project, we need a project brief, reference materials, brand guidelines, timeline requirements, and budget range. CAD files or existing assets are helpful but not required.'
        },
        {
            question: 'How many revisions are included in the project?',
            answer: 'We include 2-3 revision rounds at key stages. Additional revisions can be accommodated separately. Clear feedback helps ensure smooth progress.'
        },
        {
            question: 'What file formats will I receive upon completion?',
            answer: 'We deliver MP4, MOV, PNG, JPEG, TIFF, FBX, OBJ, and GLTF formats. Optimized versions for web, mobile, or AR/VR can also be provided.'
        },
        {
            question: 'What if I need changes after the project is delivered?',
            answer: 'We offer a 30-day warranty for technical issues. Updates or changes afterward can be handled through additional quotes or retainers.'
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black text-white pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 font-KronaOne">
            <div className="max-w-5xl mx-auto">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14 sm:mb-16 md:mb-20 text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-wider">
                        Frequently Asked <span className="text-red-500">Questions</span>
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                        Find answers to the most common questions about our 3D production services.
                        Can't find what you're looking for? Feel free to reach out.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-5 sm:space-y-6">
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
                                {/* Question */}
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-5 sm:p-6 md:p-8 flex items-start justify-between gap-4 sm:gap-6 hover:bg-red-500/5 transition-colors duration-300 group"
                                >
                                    <span className="text-base sm:text-lg md:text-2xl font-bold flex-1 leading-snug sm:leading-tight group-hover:text-red-500 transition-colors duration-300">
                                        {item.question}
                                    </span>

                                    <div
                                        className={`
                                            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                                            flex items-center justify-center
                                            border-2 border-red-500
                                            transition-all duration-300
                                            ${isOpen ? 'bg-red-500 rotate-180' : 'bg-transparent'}
                                        `}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        ) : (
                                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
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
                                            <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 border-t border-red-500/20">
                                                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-500 to-transparent my-5 sm:my-6" />
                                                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-r-2 border-red-500/40 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-l-2 border-red-500/40 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
