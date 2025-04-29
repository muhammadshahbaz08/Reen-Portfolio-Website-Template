"use client";
import {
  FaRegEnvelope,
  FaMobileAlt,
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaBehance,
  FaDribbble,
  FaSearch,
} from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import Image from "next/image";
import { logo } from "../../../public/img";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 lg:relative bg-white shadow-md text-text leading-10 ">
      {/* mini-header*/}
      <div className="hidden lg:block bg-primary h-10  text-[12px] text-text border-b-[1px] border-[#e6e9ed] ">
        <div className="max-w-[1160px] mx-auto ">
          <div className="grid grid-cols-2 ">
            {/* mini-header-contact */}
            <div className="flex">
              <span className="flex items-center gap-2 mr-5">
                <FaRegEnvelope />
                info@reen.com
              </span>
              <span className="flex items-center gap-2">
                <FaMobileAlt />
                +00 (123) 456 78 90
              </span>
            </div>
            {/* mini-header-socails */}
            <div className="flex justify-end ">
              <span className="flex items-center gap-4 ">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    size={14}
                    className=" text-text hover:text-[#1877F2]"
                  />
                </a>
                <a
                  href="https://plus.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlusG
                    size={14}
                    className=" text-text hover:text-[#DB4437]"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    size={14}
                    className=" text-text hover:text-[#1DA1F2]"
                  />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest className=" text-text hover:text-[#E60023]" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDribbble
                    size={14}
                    className=" text-text hover:text-[#EA4C89]"
                  />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance
                    size={14}
                    className=" text-text hover:text-[#1769FF]"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* main-header */}
      <div className="h-28 py-[35px] border-b-[1px] border-[#e6e9ed] overflow-hidden">
        <div className=" px-6 lg:px-0 max-w-[1160px] mx-auto">
          <div className="flex justify-between lg:grid lg:grid-cols-[auto,1fr] items-center ">
            {/* Logo */}
            <div>
              <Image src={logo} alt="logo" />
            </div>
            {/* Navigation for larger screen*/}
            <nav className="hidden lg:flex  items-center justify-evenly ">
              <span className="flex gap-11 ml-24 text-[15px] font-bold uppercase">
                <a href="/" className="hover:text-[#7c94ae]">
                  Home
                </a>
                <a href="#services" className="hover:text-[#7c94ae]">
                  Who we are
                </a>
                <a href="#portfolio" className="hover:text-[#7c94ae]">
                  Latest Work
                </a>
                <a href="#cta" className="hover:text-[#7c94ae]">
                  Get In touch
                </a>
              </span>
              {/* Search Icon (Moved to Right) */}
              <a href="" className=" hover:text-[#7c94ae] ">
                <FaSearch size={14} />
              </a>
            </nav>
            {/* Menu toggle */}
            <div className="lg:hidden relative ">
              <CgMenu size={40} onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <div className="fixed top-[111px] left-0 right-0 w-full   bg-[#506a85] text-white flex flex-col items-center justify-center gap-4 text-xl shadow-lg z-40 uppercase ">
                  <a
                    href="/"
                    className="text-[15px] font-bold  border-b border-[#3d5269] p-5  w-full text-center hover:text-[#00bc9c]"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="text-[15px] font-bold  border-b border-[#3d5269] pb-5 w-full text-center hover:text-[#00bc9c]"
                  >
                    Who we are
                  </a>
                  <a
                    href="#portfolio"
                    className="text-[15px] font-bold  border-b border-[#3d5269] pb-5  w-full text-center hover:text-[#00bc9c]"
                  >
                    latest work
                  </a>
                  <a
                    href="#cta"
                    className="text-[15px] font-bold   border-b border-[#3d5269] mb-2 pb-5 w-full  text-center hover:text-[#00bc9c]"
                  >
                    Get in Touch
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
