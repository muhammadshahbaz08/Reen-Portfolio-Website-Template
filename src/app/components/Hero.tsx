const Hero = () => {
  return (
    // Hero or Feature Seciton
    <section className="bg-[#47617c] h-[780px] bg-cover bg-no-repeat bg-[url(../../public/img/bg.jpg)] overflow-hidden ">
      {/*contianer*/}
      <div className=" container px-4 mx-auto text-white text-center">
        <div className="w-full max-w-[945px] mx-auto  ">
          {/*hero content*/}
          <div className="pt-[260px] sm:pt-[320px] lg:pt-[250px]">
            <h1 className="uppercase leading-none text-[50px] font-bold md:text-[70px] lg:text-[90px] max-w-full">
              Made for Designers
            </h1>
            <p className="pt-2 text-[20px] md:text-[22px] lg:text-[24px] text-[#a3b1bf] mb-[50px]  max-w-[940px] text-balance md:text-pretty">
              Create your online portfolio in minutes with the professionally
              and lovingly designed REEN website template. Customize your site
              with versatile and easy to use features.
            </p>
          </div>
          {/* CTA Button */}
          <div className="uppercase">
            <a
              href=""
              className=" bg-[#00bc9c] hover:bg-[#05836e] font-bold text-[18px] border-b-2 border-[#00a085] rounded-md px-8 py-4 md:py-6 md:px-16 inline-block "
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
