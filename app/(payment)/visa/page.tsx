import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
export default function Visa() {
  return (
    <>
      <Header text="Sign Out" />
      <div className="relative h-screen flex flex-col justify-start items-center pt-8 ">
        <div className="flex flex-col justify-center items-center w-10/12">
          <p className="text-sm font-normal text-black/70 text-left w-2/6">
            STEP <strong>3</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-bold text-black/80 w-2/6 text-left pt-2 pb-3">
            Setup your Credit or Debit card
          </h1>
          <div className="w-2/6">
            <div className="flex flex-row w-1/4 items-start justify-start">
              <RiVisaLine size={30} />
              <RiMastercardFill className="ml-5" size={30} />
            </div>
          </div>
          <div className="relative w-2/6">
            {" "}
            <CiCreditCard1
              className="absolute top-1/2 right-4 transform -translate-y-1/2 font-medium text-gray-500"
              size={30}
            />
            <input
              type="text"
              placeholder="Card number"
              name="Card number"
              required
              className="px-5 py-4 rounded w-full font-medium text-black/90 border border-black/80 my-3 "
            />
          </div>
          <div className="w-2/6 flex flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Expiration Date"
              name="Expiration Date"
              required
              className="px-5 py-4 rounded w-52 font-medium text-black/90 border border-black/80 "
            />
            <div className="relative w-52">
              <IoHelpCircleOutline
                className="absolute top-1/2 right-4 transform -translate-y-1/2 font-medium text-gray-500"
                size={30}
              />
              <input
                type="text"
                placeholder="CVV"
                name="CVV"
                required
                className="pl-10 px-5 py-4 rounded w-full font-medium text-black/90 border border-black/80"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Name on card"
            name="Name on card"
            required
            className="px-5 py-4 rounded w-2/6 font-medium text-black/90 border border-black/80 my-2"
          />
          <div className="flex flex-row items-center h-16 justify-between w-2/6 rounded p-3 bg-slate-100 mt-2 ">
            <div className="flex flex-col items-start justify-start">
              <p className="font-sm font-bold">USD9.99/month</p>
              <p className="font-base text-slate-500 text-left">Premium</p>
            </div>
            <p className="font-semibold text-blue-500 hover:underline hover:cursor-pointer">
              Change
            </p>
          </div>

          <p className="text-xs font-semibold text-gray-400 w-2/6 mt-5 text-left ">
            By checking the checkbox below, you agree to our{" "}
            <span className="text-blue-500">
              <a
                href="https://help.netflix.com/legal/termsofuse"
                className=" hover:underline"
              >
                Terms of Use
              </a>
              ,{" "}
              <a
                href="https://help.netflix.com/legal/privacy"
                className="hover:underline"
              >
                Privacy Statement
              </a>
            </span>
            , and that you are over 18. Netflix will automatically continue your
            membership and charge the membership fee (currently USD9.99/month)
            to your payment method until you cancel. You may cancel at any time
            to avoid future charges.
          </p>
          <div className="flex flex-row items-center justify-start w-2/6 mb-5  mt-3">
            <input type="checkbox" className="w-6 h-6" />
            <p className="text-sm font-semibold text-gray-400 w-fill ml-2 ">
              I agree.
            </p>
          </div>
          <CustomButton
            text="Start Membership"
            css="text-2xl  font-base  px-3 py-4 w-2/6"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
