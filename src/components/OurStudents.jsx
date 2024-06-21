import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentCard from "./StudentCard";
import { NextArrow, PrevArrow } from "./CustomArrows";
import useFetchStudents from "../hooks/useFetchStudents";

const OurStudents = () => {
  const { data: students, loading, error } = useFetchStudents();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-10 bg-white">
      <div className="flex flex-col lg:items-start px-14 lg:px-48">
        <h2 className="text-3xl font-bold text-blue-emtech mb-6">
          Our students
        </h2>
        {isMobile ? (
          <section className="mx-5">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
            >
              {students.map((student) => (
                <StudentCard key={student.login.uuid} student={student} />
              ))}
            </Slider>
          </section>
        ) : (
          <div className="lg:grid lg:grid-cols-2 gap-6 w-full lg:items-start">
            {students.map((student) => (
              <StudentCard key={student.login.uuid} student={student} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurStudents;
