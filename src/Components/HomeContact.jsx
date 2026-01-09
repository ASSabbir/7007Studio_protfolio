import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
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
        <div className=" flex items-center justify-center px-4 py-10 bg-black pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md pointer-events-auto"
            >
                <div className="bg-black/70 font-KronaOne backdrop-blur-xl border border-red-500/30 rounded-xl p-9 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 text-center">
                        Get In <span className="text-red-500">Touch</span>
                    </h2>


                    <form onSubmit={handleSubmit} className="space-y-5 font-dmsans">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/60 border-b border-red-500/30  px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
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
                                className="w-full bg-black/60 border-b border-red-500/30 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
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
                                className="w-full bg-black/60 border-b border-red-500/30  px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3  transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-red-500/50"
                        >
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeContact;