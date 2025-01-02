import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { navLinks } from './Navbar';

interface IResponsiveMenu {
    open: boolean;

}
const ResponsiveMenu: React.FC<IResponsiveMenu> = ({ open }) => {
    return (
        <AnimatePresence mode='wait'>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className='absolute top-20 left-0 w-full h-screen z-20'>
                        <div className='text-xl font-semibold  uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col items-center gap-10'>
                                {
                                    navLinks.map((n) => (
                                        <li key={n.id}><a href={n.link}>{n.text}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu;
