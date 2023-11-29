import Image from "next/image";
import CustomButton from "@/components/button";
import Link from "next/link";
export default function Signout() {
  return (
    <div className="h-screen w-full bg-out bg-cover">
      <nav className="mx-16 py-5  flex flex-row justify-between items-center cursor-pointer">
        <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        <CustomButton css="bg-red-600 text-white/90 font-semibold rounded hover:bg-red-500 px-3 py-1" />
      </nav>
      <div className="flex items-center justify-center mt-8">
        <div className="w-[400px] h-[310px] p-8 bg-white/90 ">
          <p className="text-black/80 text-3xl mb-5 font-semibold">
            Leaving so soon?
          </p>
          <p className="text-black/80 text-sm mb-5 font-medium">
            Just so you know, you don&apos;t always need to sign out of Netflix.
            It&apos;s only necessary if you&apos;re on a shared or public
            computer.
          </p>
          <p className="text-black/80 text-sm mb-10 font-medium">
            You will be directed to Netflix.com in 30 seconds.
          </p>
          <Link href="/">
            <CustomButton css="bg-blue-600 w-full h-10 text-white/90 font-medium rounded hover:bg-blue-500 px-3 py-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
