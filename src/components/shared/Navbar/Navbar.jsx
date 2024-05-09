"use client";
import Image from "next/image";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../../../assets/wingLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("CLicked");
  };
  return (
    <nav className="container_fluid">
      <div className="md:px-[15px]">
        {/* large screen */}
        <div className="md:p-5 flex items-center justify-between">
          {/* logo */}
          <div className="w-[120px] h-[45px] md:w-[200px] md:h-[55px]">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full  object-fill"
            />
          </div>
          <div className="xl:hidden">
            <CiMenuFries
              className="text-white"
              size={25}
              onClick={toggleMenu}
            />
          </div>
          {/* menu */}
          {isMenuOpen && (
            <div className="bg-gray-800 text-white py-2 px-4 absolute top-full left-0 right-0 z-10">
              {/* Add your menu items here */}
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
