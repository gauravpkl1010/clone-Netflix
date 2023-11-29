"use client";
import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
interface SignIn3Props {}

interface PlansState {
  mobile: boolean;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}
export const plansData = [
  { monthlyPrice: "$2.99", videoQuality: "Good", resolution: "480p" },
  { monthlyPrice: "$3.99", videoQuality: "Good", resolution: "720p" },
  { monthlyPrice: "$7.99", videoQuality: "Better", resolution: "1080p" },
  { monthlyPrice: "$9.99", videoQuality: "Best", resolution: "4k+HDR" },
];
export default function SignIn3({}: SignIn3Props) {
  return (
    <>
      <Header text="Sign Out" />
      <div className="relative h-screen flex flex-col justify-center items-center  ">
        <div className="flex flex-col h-full justify-center items-center w-10/12">
          <p className="text-xs font-normal text-black/70 text-left w-2/3 mt-10">
            STEP <strong>2</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-semibold text-black/80 w-2/3 text-left pt-2 pb-5">
            Choose a plan that&apos;s right for you
          </h1>
          <p className=" flex flex-row items-start justify-start  text-lg font-medium  text-black/70 w-2/3 text-left ">
            <IoMdCheckmark className="text-red-600 " size={28} />{" "}
            <span className="ml-3">Watch all you want. Ad-free.</span>
          </p>
          <p className=" flex flex-row items-start justify-start  text-lg font-medium  text-black/70 w-2/3 text-left py-5">
            <IoMdCheckmark className="text-red-600 " size={30} />{" "}
            <span className="ml-3">Recommendations just for you.</span>
          </p>
          <p className=" flex flex-row items-start justify-start text-lg font-medium text-black/70 w-2/3 text-left ">
            <IoMdCheckmark className="text-red-600 " size={28} />{" "}
            <span className="ml-3">Change or cancel your plan anytime.</span>
          </p>
          <div className="h-1/6 w-7/12 my-5 ml-auto ">
            <div className="flex flex-row items-start justify-between w-2/3">
              <p className="bg-red-400 active:bg-red-500 h-[110px] w-[110px] rounded-sm flex justify-center items-center text-white font-semibold text-lg">
                Mobile
              </p>
              <p className="bg-red-400 active:bg-red-500 h-[110px] w-[110px] rounded-sm flex justify-center items-center text-white font-semibold text-lg">
                Basic
              </p>
              <p className="bg-red-400 active:bg-red-500 h-[110px] w-[110px] rounded-sm flex justify-center items-center text-white font-semibold text-lg">
                Standard
              </p>
              <p className="bg-red-400 active:bg-red-500 h-[110px] w-[110px] rounded-sm  flex justify-center items-center text-white font-semibold text-lg">
                Premium
              </p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-start justify-between">
            <p>Monthly Price</p>
            <div className="border-t border-black/10  my-5 w-full"></div>
            <p>VIdeo Quality</p>
            <div className="border-t border-black/10 my-5 w-full"></div>
            <p>Resolution</p>
            <div className="border-t border-black/10  my-5 w-full"></div>
            <p>Devices you can use to watch</p>
          </div>
          <p className="text-xs text-black/70 font-semibold w-2/3 text-left pt-5">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our{" "}
            <Link href="/" className=" text-blue-500">
              Terms of Use
            </Link>{" "}
            for more details.
          </p>
          <p className="text-xs text-black/70 font-semibold w-2/3 text-left my-2">
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
          <CustomButton
            text="Next"
            css="text-2xl  font-medium mt-5 px-3 py-4 w-3/12"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
