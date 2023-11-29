import CustomButton from "@/components/button";
import Header from "@/components/header";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Footer from "@/components/footer";
export default function SignIn3() {
  return (
    <>
      <Header text="Sign Out" />
      <div className="relative h-screen flex flex-col justify-center items-center mt-5 ">
        <div className="flex flex-col justify-center items-center w-10/12">
          <IoCheckmarkCircleOutline className=" text-red-600 w-12 h-12 " />
          <p className="text-xs font-normal text-black/70 text-center w-3/12 mt-5">
            STEP <strong>2</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-semibold text-black/80 w-3/12 text-center pt-2 pb-5">
            Choose your plan.
          </h1>
          <p className=" flex flex-row items-start justify-start  text-lg font-medium  text-black/70 w-3/12 text-left ">
            <IoMdCheckmark className="text-red-600 " size={28} />{" "}
            <span className="ml-3">No commitments, cancel anytime.</span>
          </p>
          <p className=" flex flex-row items-start justify-start  text-lg font-medium  text-black/70 w-3/12 text-left py-5">
            <IoMdCheckmark className="text-red-600 " size={30} />{" "}
            <span className="ml-3">
              Everything on Netflix for one <br />
              low price.
            </span>
          </p>
          <p className=" flex flex-row items-start justify-start text-lg font-medium text-black/70 w-3/12 text-left ">
            <IoMdCheckmark className="text-red-600 " size={28} />{" "}
            <span className="ml-3">No ads and no extra fees. Ever.</span>
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
