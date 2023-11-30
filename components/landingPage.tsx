"use client";
import Image from "next/image";
import Link from "next/link";
import { LuLanguages } from "react-icons/lu";
import Questions from "./questions";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomButton from "@/components/button";
const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="relative h-[96vh] flex flex-col justify-center items-center bg-main  bg-cover">
        <div className="w-full h-full bg-black/50">
          <nav className="mx-44 py-5  flex flex-row justify-between items-center">
            <Image src="/images/logo.png" alt="logo" width={150} height={150} />
            <CustomButton css="px-3 py-1 bg-red-600 text-white/90 text-sm font-bold" />
          </nav>
          <div className="flex flex-col items-center justify-center h-3/5 mt-16">
            <h1 className="text-5xl font-bold text-white">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-xl font-semibold p-5">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white text-xl font-normal pb-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex items-center">
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
                css="text-2xl font-semibold text-white/90 px-5 py-3 bg-red-600 hover:bg-red-700 rounded relative flex flex-row justify-between"
              >
                <MdOutlineKeyboardArrowRight className=" text-white text-4xl" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[80vh] w-full flex flex-row justify-between items-center bg-black/90 mt-2 bg-cover">
        <div className="w-1/2 p-5 ml-24">
          <p className="text-white font-extrabold text-5xl mb-5">
            Enjoy on your TV
          </p>
          <p className="text-white font-medium text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast,
            <br /> Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="relative w-1/2 h-96">
          <Image
            alt="tv"
            src="/images/tv.png"
            width={500}
            height={400}
            className="absolute z-10"
          />
          <video
            className=" absolute top-0 left-0 w-[366px] ml-[65px] mt-[77px] h-[206px]   "
            autoPlay
            muted
            loop
            src="/images/video.m4v"
          ></video>
        </div>
      </div>
      <div className="relative h-[80vh] w-full flex flex-row justify-around items-center bg-black/90 mt-2  ">
        <div className=" w-1/2 h-96 relative ml-[200px]">
          <div className="w-[300px] h-[92px] ml-[124px] absolute  bottom-0 bg-black/90  border-2 px-2  border-slate-500 rounded-lg flex flex-row items-center ">
            <Image
              alt="Stranger Things"
              src="/images/stranger.png"
              width={50}
              height={50}
            />
            <div className="flex flex-col ml-5 mr-10 ">
              <p className="text-sm font-semibold text-white">
                Stranger Things
              </p>
              <p className="text-sm font-medium text-blue-500 ">
                Downloading...
              </p>
            </div>
            <Image
              alt="download"
              src="/images/downloading.gif"
              width={50}
              height={50}
            />
          </div>
          <Image
            alt="mobile"
            src="/images/mobile.jpg"
            width={550}
            height={450}
            className="-z-[1]"
          />
        </div>
        <div className=" w-1/2 py-5 pr-5 mr-[90px]">
          <p className="text-white font-extrabold text-5xl mb-5">
            Download your show to watch offline
          </p>
          <p className="text-white font-medium text-2xl">
            Save your favorites easily and always have
            <br /> something to watch.
          </p>
        </div>
      </div>
      <div className="relative h-[60vh] w-full  flex flex-row justify-between items-center bg-black/90 mt-2  bg-cover">
        <div className=" w-1/2 p-5 ml-80 ">
          <p className="text-white font-extrabold text-5xl mb-5">
            Watch <br />
            everywhere
          </p>
          <p className="text-white font-medium text-2xl">
            Stream unlimited movies and TV
            <br /> shows on your phone, tablet, laptop,
            <br />
            and TV.
          </p>
        </div>
      </div>
      <div className="relative h-[80vh] w-full  flex flex-row  items-center bg-black/90 mt-2  bg-cover">
        <div className=" w-1/2 py-5 ml-32  ">
          <Image alt="tv" src="/images/kids.png" width={600} height={600} />
        </div>
        <div className=" w-1/2 py-5 mr-32">
          <p className="text-white font-extrabold text-5xl mb-5">
            Create profiles for kids
          </p>
          <p className="text-white font-medium text-2xl">
            Send kids on adventures with their favorite
            <br /> characters in a space made just for them—free with
            <br /> your membership.
          </p>
        </div>
      </div>
      <div className="relative h-full w-full  flex flex-col justify-start items-center bg-black/90 mt-2 bg-cover">
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
            css="text-2xl px-5 py-3 relative flex flex-row justify-between bg-red-600 font-sm font-bold text-white/90"
          >
            <MdOutlineKeyboardArrowRight className=" text-white/90 text-4xl" />
          </CustomButton>
        </div>
      </div>
      <div className="h-[55vh] w-full mt-2 bg-black/90 px-40 py-16">
        <p className="text-base text-white/70 hover:underline">
          Questions? Contact us.
        </p>
        <div className="flex flex-row items-start  ">
          {" "}
          <div className="flex flex-col items-start mt-5 mr-32">
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              FAQ
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Investors Relation
            </p>
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Privacy
            </p>
            <Link href="https://fast.com/">
              <p className="text-sm text-white/70 my-5 hover:underline  cursor-pointer">
                Speed Test
              </p>
            </Link>
            <div className="relative">
              <LuLanguages
                size={15}
                className="absolute top-2 left-1 text-white"
              />
              <select
                className="h-7 text-center w-[116px] bg-black text-white rounded-md border-[1px] border-slate-500 px-4 outline outline-offset-[1px] outline-white/90 mb-5"
                id="simpleDropdown"
                value={selectedValue || ""}
                onChange={handleDropdownChange}
              >
                <option className="bg-blue-500" value="">
                  English
                </option>
              </select>
            </div>

            <p className="text-sm text-white/70 ">Netflix Nepal</p>
          </div>
          <div className="flex flex-col items-start mt-5 mr-32">
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Help Center
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Jobs
            </p>
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Cookie Preferences
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Legal Notices
            </p>
            <p className="text-sm text-white/70 ">Netflix Nepal</p>
          </div>
          <div className="flex flex-col items-start mt-5 mr-32">
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Account
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Ways to Watch
            </p>
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Corporate Information
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Only on Netflix
            </p>
            <p className="text-sm text-white/70 ">Netflix Nepal</p>
          </div>
          <div className="flex flex-col items-start mt-5 mr-32">
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Media Center
            </p>
            <p className="text-sm text-white/70 my-5 hover:underline cursor-pointer">
              Terms of Use
            </p>
            <p className="text-sm text-white/70 hover:underline cursor-pointer">
              Contact
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
