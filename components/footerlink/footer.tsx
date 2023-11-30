"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../button";
import { useState } from "react";
export default function Footer() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      {" "}
      <div className="w-full h-[50vh] bg-black px-32 py-5  bg-diagonal ">
        <div className="flex flex-row items-center justify-start">
          <p className="text-white/90 font-semibold text-lg">Need more Help?</p>
          <CustomButton
            css="text-base w-[160px] font-semibold text-black bg-white/90 hover:bg-white/70 rounded py-1 ml-8 px-6 h-10"
            text="Contact Us"
          />
        </div>
        <div className="bg-white/90 w-full h-[1px] mt-7"></div>
        <select
          className="h-10 text-center w-48 bg-transparent text-slate-400 border-[1px] border-slate-400 mt-8"
          id="simpleDropdown"
          value={selectedValue || ""}
          onChange={handleDropdownChange}
        >
          <option value="">English</option>
          <option value="">Espanol</option>
        </select>
        <div className="flex flex-col mt-5">
          <p className="text-sm text-white/70 hover:underline cursor-pointer">
            Terms of Use
          </p>
          <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
            Privacy
          </p>
          <p className="text-sm text-white/70 hover:underline cursor-pointer">
            Cookie Preferences
          </p>
          <p className="text-sm text-white/70 mt-5 hover:underline cursor-pointer">
            Corporate Information
          </p>
        </div>
      </div>
    </>
  );
}
