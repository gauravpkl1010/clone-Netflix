"use client";

import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomButton from "@/components/button";
import Questions from "./questions";
const Faq: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="relative h-full w-full   flex flex-col justify-start items-center bg-black/90 mt-2 bg-cover">
        <p className="text-white font-extrabold text-5xl mt-10 mb-10">
          Frequently Asked Questions
        </p>
        <Questions title="What is Netflix?" details="hi hello world" />
        <Questions
          title="How much does Netflix costs?"
          details="hi hello world"
        />
        <Questions title="Where can i watch?" details="hi hello world" />
        <Questions title="How do i cancel?" details="hi hello world" />
        <Questions
          title="What can i watch on Netflix?"
          details="hi hello world"
        />
        <Questions title="Is Netflix good for kids?" details="hi hello world" />
        <p className="text-white text-xl font-normal pt-7 pb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex items-center mb-16">
          <input
            type="text"
            placeholder="Email address"
            name="Email address"
            required
            className="px-5 py-4 rounded w-96 bg-black/20 text-white/70 border border-white/30 mr-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomButton
            text="Get Started"
            css="text-2xl px-5 py-3 relative flex flex-row justify-between"
          >
            <MdOutlineKeyboardArrowRight className=" text-white text-4xl" />
          </CustomButton>
        </div>
      </div>
    </>
  );
};
export default Faq;
