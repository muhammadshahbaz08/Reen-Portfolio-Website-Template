import { logoWhite } from "../../../public/img";
import {
  FaArrowRight,
  FaRegEnvelope,
  FaMobileAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import {
  galleryPost1,
  galleryPost2,
  galleryPost3,
  galleryPost4,
} from "../../../public/img";
const Footer = () => {
  return (
    <footer>
      {/* footer-main */}
      <section className="bg-[#2f4052]">
        <div className=" max-w-[1160px] mx-auto py-[75px]">
          {/*main-grid */}
          <div className="grid grid-cols-4 gap-10">
            {/* col-1 */}
            <div className="">
              <h1 className="text-white mb-2 text-[22px] font-semibold ">
                WHO WE ARE
              </h1>
              {/* logoWhite */}
              <Image src={logoWhite} alt="logo" className="" />
              <p className="text-[14px] text-[#a3b1bf] mt-6 text-balance">
                Magnis modipsae voloratati andigen daepeditem quiate re porem
                que aut labor. Laceaque eictemperum quiae sitiorem rest non
                restibusaes maio es dem tumquam.
              </p>
              <a
                href=""
                className="block text-[14px] font-bold mt-8  text-[#a3b1bf] hover:text-[#00bc9c]"
              >
                More about us &nbsp;
                <FaArrowRight className="inline " />
              </a>
            </div>
            {/* col-2 */}
            <div>
              <h1 className="text-white mb-4 text-[22px] font-semibold ">
                LATEST WORK
              </h1>
              <div className="grid grid-cols-2  gap-2">
                <Image
                  src={galleryPost1}
                  alt="post"
                  className="w-full h-full "
                />
                <Image
                  src={galleryPost2}
                  alt="post"
                  className="w-full h-full "
                />
                <Image
                  src={galleryPost3}
                  alt="post"
                  className="w-full h-full "
                />
                <Image
                  src={galleryPost4}
                  alt="post"
                  className="w-full h-full "
                />
              </div>
            </div>
            {/* col-3 */}
            <div>
              <h1 className="text-white mb-3 text-[22px] font-semibold ">
                GET IN TOUCH
              </h1>
              <p className="text-[14px]  text-[#a3b1bf] mt-1 text-balance">
                Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis
                et consent accullignis dentibea autem inisita.
              </p>
              <div className=" mt-3 text-[14px]">
                <div className=" text-[#a3b1bf] hover:text-[#00bc9c] hover:font-semibold">
                  <FaLocationDot className="inline mr-3 " />
                  84 Street, City, State 24813
                </div>
                <div className=" text-[#a3b1bf] hover:text-[#00bc9c] hover:font-semibold">
                  <FaMobileAlt className="inline mr-3" />
                  +00 (123) 456 78 90
                </div>
                <div className="text-[#a3b1bf] hover:text-[#00bc9c] hover:font-semibold">
                  <FaRegEnvelope className="inline mr-3" />
                  info@reen.com
                </div>
              </div>
            </div>
            {/* col-4 */}
            <div>
              <h1 className="text-white mb-3 text-[22px] font-semibold ">
                FREE UPDATES
              </h1>
              <p className="text-[14px]  text-[#a3b1bf] mt-1 text-balance">
                Conecus iure posae volor remped modis aut lor volor accabora
                incim resto explabo.
              </p>
              {/* Email Input & Subscribe Button */}
              <div className="mt-4 relative flex items-center bg-gray-700 rounded-md  ">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className=" w-full px-1 py-3  pr-28 bg-[#4e5c6c] text-white rounded-md outline-none placeholder-gray-400"
                />
                <button className=" absolute  top-1/2 right-1 -translate-y-1/2 bg-[#00bc9c] hover:bg-[#05836e] text-white font-bold px-2 py-1 rounded-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer-nav-section*/}
      <section className="bg-[#283645]">
        <div className=" max-w-[1160px] mx-auto py-[35px] text-[#707e8c]">
          <div className="flex justify-between items-center">
            {/* Left Side: Copyright */}
            <div className="flex items-center gap-2">
              <FaRegCopyright size={14} />
              <p className="text-[14px]">2025 REEN. All rights reserved.</p>
            </div>

            {/* Right Side: Navigation Links */}
            <nav className="flex space-x-1 text-[14px]">
              <a
                href="#"
                className="relative after:content-['·'] after:mx-2 after:text-gray-400 last:after:content-none hover:text-[#00bc9c]"
              >
                Home
              </a>
              <a
                href="#"
                className="relative after:content-['·'] after:mx-2 after:text-gray-400 last:after:content-none hover:text-[#00bc9c]"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="relative after:content-['·'] after:mx-2 after:text-gray-400 last:after:content-none hover:text-[#00bc9c]"
              >
                Blog
              </a>
              <a
                href="#"
                className="relative after:content-['·'] after:mx-2 after:text-gray-400 last:after:content-none hover:text-[#00bc9c]"
              >
                About
              </a>
              <a
                href="#"
                className="relative after:content-['·'] after:mx-2 after:text-gray-400 last:after:content-none hover:text-[#00bc9c]"
              >
                Services
              </a>
              <a href="#" className="hover:text-[#00bc9c]">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
