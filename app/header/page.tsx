import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
export default function SignIn() {
  return (
    <>
      <Header text="Sign In" />
      <div className="relative h-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/signin.png" width={380} height={270} alt="" />
          <p className="text-sm font-normal text-black/70">
            STEP <strong>1</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-semibold text-black/80 w-96 text-center pt-3 pb-5">
            Finish setting up your account.
          </h1>
          <p className="text-ls font-medium text-black/70">
            Netflix is personalized for you.
          </p>
          <p className="text-ls font-medium text-black/70 w-72 text-center pb-5">
            Create a password to watch on any device at any time.
          </p>
          <CustomButton
            text="Next"
            css="text-2xl  font-medium px-3 py-4 w-96"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
