import Image from "./Image";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3 justify-start lg:flex-row lg:gap-6 ">
      <Image
        src={student?.picture.medium}
        alt="Company Logo"
        className="w-16 h-16 rounded-full"
      />
      <div className="font-semibold flex flex-col justify-center items-center lg:items-start">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-2">
          <h3 className="text-[20px] ">{student?.name.first}</h3>
          <h4 className="text-[16px] lg:text-[20px] font-semibold">
            {student.name.last}
          </h4>
        </div>

        <p className="text-[16px] text-secondary-text">
          {student?.location.state}, {student?.location.country}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
