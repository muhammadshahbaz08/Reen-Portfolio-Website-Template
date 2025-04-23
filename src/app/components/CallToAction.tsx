const CallToAction = () => {
  return (
    <section className="container mx-auto  py-24 md:py-32 px-4" id="cta">
      {/*section-content */}
      <div className="max-w-[745px] mx-auto text-center ">
        <h1 className="text-[#506a85] text-[42px] md:text-[44px] mb-5  font-semibold">
          Want to work with us?
        </h1>
        <p className="text-[#73879c] text-[18px] md:text-[22px]">
          Magnis modipsae que voloratati andigen daepeditem quiate re porem aut
          labor. Laceaque quiae sitiorem rest non restibusaes maio es dem
          tumquam.
        </p>
      </div>
      {/* CTA button */}
      <div className="mt-12 flex justify-center">
        <a
          href=""
          className="text-white bg-[#00bc9c] hover:bg-[#05836e] font-bold text-[18px] border-b-2 border-[#00a085] rounded-md py-4 px-9"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
