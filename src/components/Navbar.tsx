import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from './ResponsiveMenu';
import { useState } from 'react';

interface INavLinkText {
    id: number;
    text: string;
    link: string;
}

export const navLinks: INavLinkText[] = [
    { id: 1, text: 'HOME', link: '/' },
    { id: 3, text: 'ABOUT', link: '/about' }, // Replace with a valid path if possible
    { id: 2, text: 'WORK', link: '/work' }, // Replace with a valid path if possible
    { id: 3, text: 'CONTACT', link: '/contact' }, // Replace with a valid path if possible
];

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <nav>
                <div className='container flex items-center justify-between py-4 md:pt-4'>
                    <NavLink to={'/'} className='text-3xl font-bold font-signature'>Viju</NavLink>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-[#606060]">
                            {
                                navLinks.map((n) => (
                                    <li key={n.id}>
                                        <NavLink
                                            to={n.link}
                                            className={({ isActive }) =>
                                                `inline-block py-1 px-3 font-semibold hover:text-primary ${isActive ? 'text-primary' : ''
                                                }`
                                            }
                                            aria-current="page"
                                        >
                                            {n.text}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <GiHamburgerMenu className='text-4xl' />
                    </div>
                </div>
            </nav>
            <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar;
