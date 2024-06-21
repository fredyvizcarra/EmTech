import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import { accordionData } from "../constants";
import images from "../assets";

const AccordionSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openItems, setOpenItems] = useState([]);

  const handleItemClick = (index) => {
    if (window.innerWidth >= 1024) {
      // Desktop
      setSelectedItem(selectedItem === index ? null : index);
    } else {
      // Mobilee
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index]
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSelectedItem(null);
      setOpenItems([]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-blue-emtech py-3 lg:py-0 w-full flex justify-center">
      <div className="w-full text-left px-2 lg:px-0 md:px-14 flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 py-24 px-14 md:px-28 lg:px-48">
          <h2 className="text-[35px] font-bold mb-4 text-white">
            How do we do it?
          </h2>
          <p className="text-[15px] lg:text-[18px] text-white mb-8">
            At EmTech Institute, we offer a wide range of services designed to
            meet the diverse needs of today's businesses and individuals.
          </p>
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              buttonText={item.buttonText}
              isOpen={openItems.includes(index) || selectedItem === index}
              onClick={() => handleItemClick(index)}
              isMobile={window.innerWidth < 1024}
            />
          ))}
        </div>
        <div
          className="hidden lg:flex w-full lg:items-center  lg:w-5/12 bg-cover bg-center p-8 "
          style={{
            backgroundImage: `url(${images.backgroundAccordion})`,
          }}
        >
          {selectedItem !== null && (
            <div className="text-white px-24 font-light">
              <div className="flex justify-start w-full mb-8">
                <div className="h-1 bg-blue-emtech w-1/2"></div>
              </div>
              {accordionData[selectedItem].content.map((fragment, index) => (
                <span key={index} className={fragment.bold ? "font-bold" : ""}>
                  {fragment.text}
                </span>
              ))}
              {accordionData[selectedItem].buttonText && (
                <div className="flex justify-center py-4">
                  <button className="mt-4 px-8 py-2 bg-blue-emtech text-white rounded font-light text-[15px]">
                    {accordionData[selectedItem].buttonText}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
