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
        <Questions
          title="What is Netflix?"
          details1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          details2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />
        <Questions
          title="How much does Netflix costs?"
          details1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, no contracts."
        />
        <Questions
          title="Where can i watch?"
          details1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          details2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <Questions
          title="How do i cancel?"
          details1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />
        <Questions
          title="What can i watch on Netflix?"
          details1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />
        <Questions
          title="Is Netflix good for kids?"
          details1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
          details2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
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
