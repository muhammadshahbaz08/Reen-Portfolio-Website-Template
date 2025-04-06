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
                <a href="/">
                  <FaFacebookF
                    size={14}
                    className=" text-text hover:text-[#3c5570]"
                  />
                </a>
                <a href="/">
                  <FaGooglePlusG
                    size={14}
                    className=" text-text hover:text-[#3c5570]"
                  />
                </a>
                <a href="/">
                  <FaTwitter
                    size={14}
                    className=" text-text hover:text-[#3c5570]"
                  />
                </a>
                <a href="/">
                  <FaPinterest className=" text-text hover:text-[#3c5570]" />
                </a>
                <a href="/">
                  <FaDribbble
                    size={14}
                    className=" text-text hover:text-[#3c5570]"
                  />
                </a>
                <a href="/">
                  <FaBehance
                    size={14}
                    className=" text-text hover:text-[#3c5570]"
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
                <a href="" className="hover:text-[#3c5570]">
                  Home
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Who we are
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Latest Work
                </a>
                <a
                  href=""
                  className="hover:text-[#3c5570] visited:text-[#3c5570]"
                >
                  Get In touch
                </a>
              </span>
              {/* Search Icon (Moved to Right) */}
              <a href="" className=" hover:text-[#3c5570] ">
                <FaSearch size={14} />
              </a>
            </nav>
            {/* Menu toggle */}
            <div className="lg:hidden relative ">
              <CgMenu size={40} onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <div className="fixed top-[111px] left-0 right-0 w-full   bg-[#506a85] text-white flex flex-col items-center justify-center gap-4 text-xl shadow-lg z-40 uppercase ">
                  <a
                    href=""
                    className="text-[15px] font-bold  border-b border-[#3d5269] p-5  w-full text-center hover:text-[#3c5570]"
                  >
                    Home
                  </a>
                  <a
                    href=""
                    className="text-[15px] font-bold  border-b border-[#3d5269] pb-5 w-full text-center"
                  >
                    Who we are
                  </a>
                  <a
                    href=""
                    className="text-[15px] font-bold  border-b border-[#3d5269] pb-5  w-full text-center"
                  >
                    latest work
                  </a>
                  <a
                    href=""
                    className="text-[15px] font-bold   border-b border-[#3d5269] mb-2 pb-5 w-full  text-center"
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
