import { useState, useEffect } from 'react';
import Black from '../assets/triangle.svg';
import { TbMenu } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navItem = [
        { name: "Showcase", link: "/" },
        { name: "Docs", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Templates", link: "/" },
        { name: "Enterprise", link: "/" },
    ];

    const hamMenu = [
        { name: "Learn", link: "/" },
        { name: "Deploy", link: "/" },
        { name: "Showcase", link: "/" },
        { name: "Docs", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Next.js Commerce", link: "/" },
        { name: "Templates", link: "/" },
        { name: "Enterprise", link: "/" },
        { name: "GitHub", link: "/" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Add or remove 'overflow-hidden' class to the body based on the menu state
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);


    return (
        <nav className="border-b sticky top-0 backdrop-blur-sm z-50">
            <div className="flex justify-between item-center py-3 container mx-auto lg:px-0 px-4">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <a href="/">
                            <img src={Black} alt='logo' className='h-12 w-12' />
                        </a>
                        <a href="/">
                            <p className='text-3xl font-bold'>NEXT<spn className='text-xs font-'> .JS</spn></p>
                        </a>
                    </div>
                    <div className="hidden lg:flex gap-6 ml-10 text-sm">
                        {navItem.map((item) => (
                            <a href={item.link} className="text-gray-500 hover:text-gray-950">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="lg:flex hidden items-center gap-4">
                    <input
                        type="text"
                        className="w-full px-4 h-8 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none text-sm text-gray-800"
                        placeholder="Search documentation..."
                    />

                    <div className='flex'>
                        <button
                            type="submit"
                            className="flex items-center justify-center w-28 h-8 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-center me-2 py-2 px-1 font-medium"
                        >
                            <img src={Black} alt='logo' className='h-8 w-8 mr-1' />
                            Deploy
                        </button>
                        <button
                            type="submit"
                            className="bg-black text-white h-8 rounded-md hover:bg-gray-800 text-sm text-center me-2 py-2 px-3"
                        >
                            Learn
                        </button>
                    </div>
                </div>

                {/* Hamburger and search icon */}
                <div className="lg:hidden flex items-center gap-3 pr-4">
                    <button>
                        <IoIosSearch className='h-6 w-6' />
                    </button>
                    <button onClick={toggleMenu}>
                        <TbMenu className='h-6 w-6' />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white fixed w-full left-0 top-[64px] h-[calc(100vh-64px)] z-30 flex px-10 pt-6">
                    <ul className="flex flex-col gap-6 text-gray-700 text-base hover:text-gray-900">
                        {hamMenu.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="hover:text-gray-950">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar