import Link from "next/link";
import Image from "next/image";
import CustomButton from "../button";

const Header = () => {
  return (
    <>
      <div className="w-full h-16 bg-black px-32 py-5 flex flex-row  items-center justify-start">
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <p className="text-white/90 font-thin text-3xl/8 mx-4">|</p>
        <p className="text-sm font-semibold text-white/90 hover:underline">
          Help Center
        </p>

        <CustomButton
          css="text-sm font-semibold text-white/90 border-[0.5px] border-white/90 rounded py-1 ml-[820px] px-4 h-8"
          text="Join Netflix"
        />
        <CustomButton css="text-sm font-semibold text-white/90 bg-red-600 rounded py-1 ml-4 px-4 h-8" />
      </div>
    </>
  );
};

export default Header;
