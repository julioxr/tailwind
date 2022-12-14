import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="relative container mx-auto p-6">
                {/* Flex container */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <img src={logo} alt="logo de la compañia" />
                    </div>
                    {/* Menu items */}
                    <div className="pt-2">
                        <div className="hidden space-x-6 md:flex">
                            <a href="#" className="hover:text-darkGrayishBlue">
                                Pricing
                            </a>
                            <a href="#" className="hover:text-darkGrayishBlue">
                                Products
                            </a>
                            <a href="#" className="hover:text-darkGrayishBlue">
                                About us
                            </a>
                            <a href="#" className="hover:text-darkGrayishBlue">
                                Careers
                            </a>
                            <a href="#" className="hover:text-darkGrayishBlue">
                                Community
                            </a>
                        </div>
                    </div>
                    {/* Button */}
                    <a
                        href="#"
                        className="hidden shadow-teal-700 p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline md:block hover:bg-brightRedLight"
                    >
                        Get Started
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
