"use client";
import { MdLockOutline } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import Header from "@/components/header";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";
import { ImPaypal } from "react-icons/im";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function SignIn5() {
  const router = useRouter();
  const handlePaypal = () => {
    router.push("/paypal");
  };
  const handleVisa = () => {
    router.push("/visa");
  };
  return (
    <>
      <Header text="Sign Out" />
      <div className="relative h-screen flex flex-col justify-center items-center -translate-y-20 ">
        <div className="flex flex-col justify-center items-center w-10/12">
          <MdLockOutline className=" text-red-600 w-12 h-12 " />
          <p className="text-xs font-normal text-black/70 text-center w-3/12 mt-5">
            STEP <strong>3</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-semibold text-black/80 w-3/12 text-center pt-2 pb-5">
            Choose how to pay
          </h1>
          <p className="text-xl font-medium text-black/70 w-5/12 text-center pb-4">
            Your payment is encrypted and you can change how you pay anytime.
          </p>
          <p className="text-lg font-bold text-black/70 w-5/12 text-center ">
            Secure for peace of mind.
          </p>
          <p className="text-lg font-bold text-black/70 w-5/12 text-center pb-5">
            Cancel easy online.
          </p>
          <div className="flex flex-row items-center justify-end mb-1 w-5/12">
            <p className="text-xs font-base text-black/70 text-right">
              End-to-end encrypted
            </p>
            <MdLockOutline className="ml-1" />
          </div>
          <div
            onClick={handleVisa}
            className="h-16 flex flex-row items-center justify-Start w-5/12 rounded border-2 border-black/40 cursor-pointer pl-3 hover:scale-[1.02]"
          >
            Credit or Debit Card
            <RiVisaLine className="ml-10" size={30} />
            <FaCreditCard className="mx-5" size={30} />
            <RiMastercardFill size={30} />
            <FaChevronRight size={30} className="ml-40" />
          </div>
          <div
            onClick={handlePaypal}
            className="h-16 mt-1 pl-3 flex flex-row items-center justify-start w-5/12 rounded border-2 border-black/40 cursor-pointer hover:scale-[1.02]"
          >
            Paypal
            <ImPaypal className="ml-10 mr-11" size={20} />
            <FaChevronRight size={30} className="ml-80" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
