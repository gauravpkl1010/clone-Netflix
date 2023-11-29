import React, { useState } from "react";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

interface QuestionsProps {
  title: string;
  details1: string;
  details2?: string;
}

const Questions: React.FC<QuestionsProps> = ({ title, details1, details2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleDetails}
      className="bg-[#2d2d2d] mb-3 w-5/6 h-auto  hover:bg-[#474646]"
    >
      <div className="flex flex-row items-center justify-between w-full px-8 h-20 mb-2">
        <span className="text-2xl font-medium text-white">{title}</span>
        <span>
          {isOpen ? (
            <IoCloseOutline className="text-white" size={50} />
          ) : (
            <IoAddOutline className="text-white" size={50} />
          )}
        </span>
      </div>
      <div className="border-t-[3px] border-black w-full "></div>
      {isOpen && (
        <div className="bg-[#2D2D2D] w-full h-auto px-8 py-3">
          <span className="text-2xl font-sm text-white w-full">{details1}</span>
          <br />
          <br />
          <span className="text-2xl font-sm text-white  w-full">
            {details2}
          </span>
        </div>
      )}
    </div>
  );
};

export default Questions;
