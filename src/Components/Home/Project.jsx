
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import video1 from '../../assets/video/CF1.mp4'
import video2 from '../../assets/video/CF2.mp4'
import video3 from '../../assets/video/CF3.mp4'
import video4 from '../../assets/video/CF4.mp4'

const projects = [
    {
        id: 1,
        title: "Product Visualization",
        category: "3D Animation",
        video: video1,
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop"
    },
    {
        id: 2,
        title: "Cinematic VFX Shot",
        category: "VFX",
        video: video2,
        logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop"
    },
    {
        id: 3,
        title: "Game Environment",
        category: "Game Art",
        video: video3,
        logo: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=200&h=200&fit=crop"
    },
    {
        id: 4,
        title: "Brand Motion Film",
        category: "Motion Design",
        video: video4,
        logo: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=200&h=200&fit=crop"
    }
];

const Project = () => {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* Section Title */}
            <div className="text-center mb-16 sm:mb-20 md:mb-24 px-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-KronaOne text-red-600">
                    OUR HANDPICK PROJECT
                </h2>
            </div>

            {/* Project Grid Wrapper */}
            <div className="px-4 sm:px-10 md:px-20 lg:px-52 font-KronaOne">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative overflow-hidden border border-red-500/30 bg-black rounded-xl sm:rounded-2xl"
                        >
                            {/* Background Video */}
                            <video
                                src={item.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/65" />

                            {/* Card Content */}
                            <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">

                                {/* Top */}
                                <div>
                                    <span className="inline-block mb-3 sm:mb-4 bg-gradient-to-r from-red-600 to-red-700 px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase">
                                        {item.category}
                                    </span>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bottom */}
                                <div className="flex items-center justify-between pt-6 sm:pt-8 md:pt-12 border-t border-white/20">
                                    <NavLink
                                        to="/our_studio"
                                        className="text-xs sm:text-sm md:text-sm tracking-[0.35em] sm:tracking-[0.4em] text-gray-300 uppercase hover:text-red-500 transition-colors duration-300"
                                    >
                                        View Project
                                    </NavLink>

                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/30">
                                        <img
                                            src={item.logo}
                                            alt="logo"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-red-500/40" />
                            <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-red-500/40" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
