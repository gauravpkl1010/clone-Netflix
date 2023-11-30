import Footer from "@/components/footerlink/footer";
import Header from "@/components/footerlink/header";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import Image from "next/image";
import x from "../../public/images/netflix-1.png";
export default function FAQ() {
  return (
    <div>
      <Header />
      <div className="px-32">
        <div className="flex flex-row items-center justify-start my-10">
          <FaArrowLeftLong size={15} />
          <p className="text-black text-sm ml-2 hover:underline">
            Back to Help Home
          </p>
        </div>
        <p className="text-black text-4xl font-semibold mb-7">
          What is Netflix?
        </p>
        <div className=" w-full h-full flex items-start justify-start p-3 mb-5">
          <div className="flex flex-col w-11/12">
            <Image
              alt=""
              src={x}
              width={930}
              height={750}
              className="rounded mb-2"
            />
            <p>
              Netflix is a subscription-based{" "}
              <span className="hover:underline text-red-600 cursor-pointer">
                streaming service
              </span>{" "}
              that allows our members to watch TV shows and movies on an
              internet-connected device.
            </p>
            <p className="my-2">
              <span className="hover:underline text-red-600 cursor-pointer">
                {" "}
                Depending on your plan
              </span>{" "}
              ,you can also{" "}
              <span className="hover:underline text-red-600 cursor-pointer">
                download TV shows and movies
              </span>{" "}
              to your iOS, Android, or Windows 10 device and watch without an
              internet connection.
            </p>
            <p>
              If you&apos;re already a member and would like to learn more about
              using Netflix, visit{" "}
              <span className="hover:underline text-red-600 cursor-pointer">
                Getting started with Netflix.
              </span>
            </p>
          </div>
          <div className="w-[420px] h-72 rounded-sm bg-white/90 border-[1px] border-slate-200 ml-10">
            <div className="w-full h-[6px] bg-red-600 rounded-[3px]"></div>
            <div className="m-4">
              <p className="text-black font-semibold">Related Articles</p>
              <p className="flex flex-row items-center justify-start">
                <MdOutlineArticle size={20} />
                <span className="underline ml-4 my-4">
                  Getting started with Netflix
                </span>
              </p>
              <p className="flex flex-row items-center justify-start">
                <MdOutlineArticle size={20} />
                <span className="underline ml-4">Billing and Payment</span>
              </p>
              <p className="flex flex-row items-center justify-start">
                <MdOutlineArticle size={20} />
                <span className="underline ml-4 my-4">Netflix Gift Cards</span>
              </p>{" "}
              <p className="flex flex-row items-center justify-start">
                <MdOutlineArticle size={20} />
                <span className="underline ml-4 ">
                  Can&apos;t signin to Netflix
                </span>
              </p>
              <p className="flex flex-row items-center justify-start">
                <MdOutlineArticle size={25} />
                <span className="underline ml-4 mt-4">
                  How to create,change or delete profiles
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
