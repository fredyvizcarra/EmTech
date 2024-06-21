import React, { useState, useRef, useEffect } from "react";
import ArrowRightIcon from "./ArrowRightIcon";

const AccordionItem = ({
  title,
  content,
  buttonText,
  isOpen,
  onClick,
  isMobile,
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white mb-2 rounded-md overflow-hidden transition-all duration-300 lg:border-none ">
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none"
        onClick={onClick}
      >
        <span className="text-[15px] sm:text-[20px] font-semibold text-left">
          {title}
        </span>
        <ArrowRightIcon
          className={`h-5 w-5 transform ${
            isOpen && isMobile
              ? "rotate-90 text-blue-emtech"
              : isOpen && !isMobile
              ? "text-blue-emtech scale-x-150"
              : ""
          } transition-transform duration-300`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className={`transition-all duration-300 ease-in-out  ${
          isMobile ? "" : "lg:hidden"
        }`}
      >
        <div className="p-4 bg-blue-emtech">
          <p className="text-white text-[15px]">
            {content.map((fragment, index) => (
              <span key={index} className={fragment.bold ? "font-bold" : ""}>
                {fragment.text}
              </span>
            ))}
          </p>
          <div className="flex justify-center py-4">
            {buttonText && (
              <button className="mt-4 px-8 py-2 bg-turquoise-emtech text-white rounded font-light text-[15px]">
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
