import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function SignIn2() {
  return (
    <>
      <Header text="Sign In" />
      <div className="relative h-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center w-10/12">
          <p className="text-sm font-normal text-black/70 text-left w-2/6">
            STEP <strong>1</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-semibold text-black/80 w-2/6 text-left pt-3 pb-5">
            Create a password to start your membership
          </h1>
          <p className="text-lg font-medium text-black/70 w-2/6 text-left">
            Just a few more steps and you&apos;re done!
          </p>
          <p className="text-lg font-medium text-black/70 w-2/6 text-left pb-5">
            We hate paperwork,too.
          </p>
          <input
            type="text"
            placeholder="Email address"
            name="Email address"
            className="px-5 py-4 rounded w-2/6 font-light text-black/90 border border-black/80 "
          />
          <input
            type="text"
            placeholder="Add a password"
            name="Add a password"
            required
            className="px-5 py-4 rounded w-2/6 font-light text-black/90 border border-black/80 my-3"
          />
          <div className="flex flex-row items-center justify-start w-2/6 ">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-base font-medium text-black/70 w-fill ml-2 ">
              Please do not email me Netflix special offers.
            </p>
          </div>
          <CustomButton
            text="Next"
            css="text-2xl  font-medium mt-5 px-3 py-4 w-2/6"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
