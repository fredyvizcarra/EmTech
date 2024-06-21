import React from "react";
import ArrowRightIcon from "./ArrowRightIcon";

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <ArrowRightIcon className="h-6 w-6 text-gray-700" />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 cursor-pointer z-10"
      onClick={onClick}
    >
      <ArrowRightIcon className="h-6 w-6 text-gray-700" />
    </div>
  );
};
