"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { post1, post2, item1, item2, item3, item4 } from "../../../public/img";

const Portfolio = () => {
  return (
    <section className="bg-[#f2f5f7]" id="portfolio">
      <div className="container mx-auto  py-24 md:py-32 px-4">
        {/* sectionIntro */}
        <div className="text-center ">
          <h1 className="text-[#506a85] text-[42px] mb-4 font-semibold">
            Check out our latest works
          </h1>
          <p className="text-[#73879c] text-[18px] text-balance">
            Magnis modipsae que voloratati andigen daepeditem quiate re porem
            aut labor.
          </p>
        </div>
        {/* posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 items-center ">
          {/* Post-1 */}
          <div className="bg-white">
            <Image src={post1} alt={"post-1"} className="w-full" />
            <div className="text-center p-4">
              <h1 className="text-[20px] text-[#506a85] font-semibold">
                Grand Motel gets an identity brushup
              </h1>
              <p className="text-[14px] text-[#73879c] mt-1">Identity</p>
            </div>
          </div>
          {/* Post-2 */}
          <div className="bg-white">
            <Image src={post2} alt={"post-2"} className="w-full" />
            <div className="text-center p-4">
              <h1 className="text-[20px] text-[#506a85] font-semibold">
                Fresh branding for a creative startup
              </h1>
              <p className="text-[14px] text-[#73879c] mt-1">Identity</p>
            </div>
          </div>
        </div>
        {/* caraousel */}
        <div className="pt-14 w-full">
          <Swiper
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="pb-16 custom-swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              450: { slidesPerView: 2 },
              500: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item1} alt={"item1"} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item2} alt={"item2"} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item3} alt={"item3"} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item4} alt={"item4"} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item1} alt={"item1"} className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <Image src={item2} alt={"item2"} className="w-full h-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
