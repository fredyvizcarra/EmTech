import images from "../assets";

const HeroSection = () => {
  return (
    <section
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center indent-px bg-full"
      style={{ backgroundImage: `url(${images.gif})` }}
    >
      <div className="flex flex-col  lg:flex-row text-white px-8 md:px-14 lg:px-24 max-w-xl lg:max-w-7xl text-left items-center gap-5 lg:gap-10">
        <h1 className=" text-[35px] lg:text-[80px] font-medium leading-none text-left">
          Empowering your digital future
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] lg:text-[30px] font-light">
            We believe in transforming the digital landscape of your business
          </p>
          <div className="flex justify-start w-full">
            <div className="h-1 bg-blue-emtech w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
