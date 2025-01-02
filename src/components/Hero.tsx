import { motion } from 'framer-motion';
import { HeroImage } from '../assets';
import { IoDownloadOutline } from "react-icons/io5";
import { FadeRight } from '../utility/animation';

const Hero = () => {
    return (
        <div className='border-2 container flex flex-col md:flex-row justify-between min-h-[500px] px-6 md:px-24 items-center mx-auto'>
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.p
                    variants={FadeRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className='text-base font-semibold leading-relaxed tracking-widest md:text-lg lg:text-xl lg:leading-loose'>
                    Hi! I'm Viju Vastrad
                </motion.p>
                <motion.h1
                    variants={FadeRight(0.9)}
                    initial="hidden"
                    animate="visible"
                    className='text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl text-primary'>
                    Frontend Web
                </motion.h1>
                <motion.h1
                    variants={FadeRight(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl'>
                    Developer
                </motion.h1>
                <motion.p
                    variants={FadeRight(1.5)}
                    initial="hidden"
                    animate="visible"
                    className='text-sm font-semibold leading-relaxed tracking-wide md:text-base lg:text-lg lg:leading-loose'>
                    Specializing in intuitive interfaces and responsive design
                </motion.p>
                <motion.div
                    variants={FadeRight(1.8)}
                    initial="hidden"
                    animate="visible"
                >
                    <button
                        className='flex items-center gap-2 mx-auto primary-btn md:mx-0'>
                        <span><IoDownloadOutline /></span>
                        Download CV
                    </button>
                </motion.div>
            </div>
            <div className='flex items-center justify-center mt-6 drop-shadow md:mt-0'>
                <motion.img
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src={HeroImage} alt="heroImage" className='w-[250px] md:w-[400px] lg:w-[400px] mx-auto' />
            </div>
        </div>
    );
};

export default Hero;
