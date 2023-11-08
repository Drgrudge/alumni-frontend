import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // Define state and function for the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const loggedInLinks = [
        { path: "/dashboard", text: "Dashboard" },
        { path: "/profile", text: "Profile" },
        { path: "/events", text: "Events" },
        { path: "/about", text: "About" },
        { path: "/contact", text: "ContactUs" },
        { path: "/logout", text: "Logout" },
        { path: "/login", text: "Login" },
        { path: "/myprofile", text: "MyProfile" },
    ];

    const loggedOutLinks = [
        { path: "/", text: "Home" },
        // { path: "/profile", text: "Profile" },
        // { path: "/events", text: "Events" },
        { path: "/contact", text: "ContactUs" },
        { path: "/about", text: "About" },
        // { path: "/signUp", text: "SignUp" },
        { path: "/login", text: "Login" },
        // { path: "/myprofile", text: "MyProfile" },
    ];

    const linksToDisplay = isLoggedIn ? loggedInLinks : loggedOutLinks;

    return (
        <nav>
        <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4'>
            <div className='flex items-center flex-1'>
                <span className='text-3xl font-bold'>Logo</span>
            </div>

            <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                <div className='flex-10'>
                    <ul className='flex gap-8 mr-16 text-gray-500'>
                        {linksToDisplay.map((link, index) => (
                            <li
                                key={index}
                                className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'
                            >
                                <Link to={link.path}>{link.text}</Link>
                            </li>

                            

                        ))}
                        {isLoggedIn && (
                            <li
                                className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer relative'
                                onClick={toggleDropdown}
                            >
                                <span>My Profile</span>
                                {isDropdownOpen && (
                                    <ul className="absolute top-10 left-0 bg-white text-black border border-gray-300 py-2">
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <button className="md:hidden" onClick={toggleMenu}>
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={toggleMenu}
                    width={24}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color='white'
                />
            </button>
        </div>
    </nav>
    );
}

export default Nav;
