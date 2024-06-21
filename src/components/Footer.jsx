const Footer = () => {
  return (
    <footer className="bg-white py-10 flex justify-center items-center text-[30px] lg:[50px] font-light">
      <div className="text-center lg:flex lg:items-center">
        <h2 className="">
          <span className="bg-clip-text text-blue-emtech mr-2 font-bold">
            EmTech Institute,
          </span>
        </h2>
        <p className="">
          <span className="text-blue-emtech"> where </span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-emtech to-turquoise-emtech lg:hidden">
            technology
          </span>
        </p>
        <p className="lg:hidden">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-emtech to-turquoise-emtech">
            meets <span className="font-bold text-blue-emtech">talent.</span>
          </span>
        </p>
        <p className="hidden lg:flex ">
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-navy-emtech to-turquoise-emtech">
            technology meets <span className="font-bold">talent.</span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
