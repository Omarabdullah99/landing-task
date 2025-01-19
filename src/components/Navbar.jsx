import React, { useState } from "react";
import logo from "../assets/logoplan.png";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b-gray-300 w-[90%] m-auto">
      <Link to="/">
        <img className="cursor-pointer" src={logo} alt="logo" />
      </Link>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <Link
          to="/"
          className={`py-4 ${
            isActive("/") ? "text-[#B68053] border-b-2 border-[#B68053]" : ""
          }`}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={`py-4 ${
            isActive("/about")
              ? "text-[#B68053] border-b-2 border-[#B68053]"
              : ""
          }`}
        >
          ABOUT
        </Link>
        <Link
          to="/service"
          className={`py-4 ${
            isActive("/service")
              ? "text-[#B68053] border-b-2 border-[#B68053]"
              : ""
          }`}
        >
          Service
        </Link>
        <Link
          to="/project"
          className={`py-4 ${
            isActive("/project")
              ? "text-[#B68053] border-b-2 border-[#B68053]"
              : ""
          }`}
        >
          Project
        </Link>
        <Link
          to="/blog"
          className={`py-4 ${
            isActive("/blog")
              ? "text-[#B68053] border-b-2 border-[#B68053]"
              : ""
          }`}
        >
          Blog
        </Link>
      </ul>
      <div className="flex items-center gap-4">
        <button className="hidden md:block border border-[#ECA76E] text-[18px] text-black font-bold px-6 py-3">
          Contact us
        </button>
        <img
          onClick={() => setShowMenu(true)}
          className="w-5 block md:hidden"
          src={menu_icon}
          alt=""
        />
        {/* mobile menu start */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <Link to="/" onClick={() => setShowMenu(false)}>
              <li>Home</li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
            <Link>
              <li>Service</li>
            </Link>
            <Link>
              <li>Project</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
            <Link onClick={() => setShowMenu(false)}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        {/* mobile menu end */}
      </div>
    </div>
  );
};

export default Navbar;
