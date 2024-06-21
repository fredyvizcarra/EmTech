import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../assets";
import Image from "./Image";

const PartnersSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    images.santander,
    images.experia,
    images.sales,
    images.universia,
  ];

  return (
    <div className=" bg-blue-emtech w-full ">
      <div className="py-20 px-14 lg:pl-48 lg:flex lg:items-center">
        <div className="text-[20px] text-white mb-6 text-center leading-5 font-light lg:mr-6">
          Partnership with companies all over the world
        </div>
        <div className="hidden lg:block">
          <Image src={images.vector} alt={`Partner logo`} className="h-full" />
        </div>
        {isMobile ? (
          <section className="mx-5">
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              arrows={false}
              responsive={[
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 380,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {logos.map((logo, index) => (
                <div key={index} className="p-4">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="h-24"
                  />
                </div>
              ))}
            </Slider>
          </section>
        ) : (
          <div className="flex flex-row gap-3 w-full justify-center">
            {logos.map((logo, index) => (
              <div key={index} className="p-4">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="lg:h-24"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersSection;
