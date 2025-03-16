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
import Image from "next/image";
import { logo } from "../../../public/img";

const Navbar = () => {
  return (
    <header className=" text-text leading-10">
      {/* mini-header*/}
      <div className="bg-primary h-10  text-[12px] text-text border-b-[1px] border-[#e6e9ed]">
        <div className="container max-w-[1160px] mx-auto ">
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
      <div className="h-28 py-[35px] border-b-[1px] border-[#e6e9ed] ">
        <div className="container max-w-[1160px] mx-auto">
          <div className="grid grid-cols-[auto,1fr] items-center">
            {/* Logo */}
            <div>
              <Image src={logo} alt="logo" />
            </div>
            {/* Navigation */}
            <nav className="flex items-center ">
              <span className="flex gap-11 ml-24 text-[15px] font-bold uppercase">
                <a href="" className="hover:text-[#3c5570]">
                  Home
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Portfolio
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Blog
                </a>
                <a
                  href=""
                  className="hover:text-[#3c5570] visited:text-[#3c5570]"
                >
                  Pages
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Features
                </a>
                <a href="" className="whitespace-nowrap hover:text-[#3c5570]">
                  Mega Menu
                </a>
                <a href="" className="hover:text-[#3c5570]">
                  Contact
                </a>
              </span>
              {/* Search Icon (Moved to Right) */}
              <a href="" className="ml-52 hover:text-[#3c5570]">
                <FaSearch size={14} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
