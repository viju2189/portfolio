import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux } from "react-icons/si";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

// FadeRight Variants Function (appears from the right)
const FadeRight = (delay: number) => ({
    hidden: { opacity: 0, x: 50 }, // Start slightly to the right
    visible: {
        opacity: 1,
        x: 0, // Move to original position
        transition: {
            duration: 0.6,
            delay: delay,
        },
    },
});

interface IconItem {
    id: number;
    icon: IconType;
    color: string;
    delay: number;
}

const iconsArray: IconItem[] = [
    { id: 1, icon: FaHtml5, color: "#E34F26", delay: 0.3 },
    { id: 2, icon: IoLogoJavascript, color: "#F7DF1E", delay: 0.6 },
    { id: 3, icon: FaCss3Alt, color: "#1572B6", delay: 0.9 },
    { id: 4, icon: FaReact, color: "#61DAFB", delay: 1.2 },
    { id: 5, icon: SiRedux, color: "#764ABC", delay: 1.5 },
    { id: 6, icon: SiTypescript, color: "#3178C6", delay: 1.8 },
];

const Techstack = () => {
    return (
        <section className="container py-10">
            <div className="px-4 mx-auto">
                {/* Left-aligned text */}
                <motion.h1
                    className="pb-6 text-2xl font-bold text-left uppercase"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Tech Stack
                </motion.h1>

                {/* Responsive Icon Container */}
                <div className="flex flex-wrap items-center justify-around w-full md:flex-nowrap">
                    {iconsArray.map((icon) => (
                        <motion.div
                            key={icon.id}
                            variants={FadeRight(icon.delay)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center justify-around w-24 h-24 p-4 bg-white rounded-full shadow-lg"
                        >
                            <icon.icon className="text-5xl" style={{ color: icon.color }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Techstack;
