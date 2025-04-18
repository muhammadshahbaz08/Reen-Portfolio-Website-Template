const Hero = () => {
  return (
    // Hero or Feature Seciton
    <section className="bg-[#47617c] h-[780px] bg-cover bg-no-repeat bg-[url(../../public/img/bg.jpg)]">
      {/*contianer*/}
      <div className=" max-w-[1160px] px-4 mx-auto text-white text-center">
        <div className="w-full max-w-[945px] mx-auto  ">
          {/*hero content*/}
          <div className="pt-[350px] lg:pt-[250px]">
            <h1 className="uppercase text-[60px] font-bold md:text-[70px] lg:text-[90px] w-full max-w-full ">
              Made for Designers
            </h1>
            <p className="text-[24px] text-[#a3b1bf] mb-[60px]  max-w-[940px] w-full  md:text-[20px] sm:text-[18px]">
              Create your online portfolio in minutes with the professionally
              and lovingly designed REEN website template. Customize your site
              with versatile and easy to use features.
            </p>
          </div>
          {/* CTA Button */}
          <div className="uppercase">
            <a
              href=""
              className=" bg-[#00bc9c] hover:bg-[#05836e] font-bold text-[18px] border-b-2 border-[#00a085] rounded-md py-6 px-16 inline-block sm:px-8 sm:py-4"
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
