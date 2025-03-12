import Image from "next/image";
import post1 from "../../../public/img/post-1.jpg";
import post2 from "../../../public/img/post-2.jpg";
const Portfolio = () => {
  return (
    <section className="bg-[#f2f5f7]">
      <div className="container max-w-[1160px] mx-auto py-32">
        {/* sectionIntro */}
        <div className="text-center ">
          <h1 className="text-[#506a85] text-[42px] mb-4 font-semibold">
            Check out our latest works
          </h1>
          <p className="text-[#73879c] text-[20px]">
            Magnis modipsae que voloratati andigen daepeditem quiate re porem
            aut labor.
          </p>
        </div>
        {/* posts */}
        <div className="grid grid-cols-2 mt-20 gap-8 items-center">
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
      </div>
    </section>
  );
};

export default Portfolio;
