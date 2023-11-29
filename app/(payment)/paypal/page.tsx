import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Paypal() {
  return (
    <>
      <Header text="Sign Out" />
      <div className="relative h-[55vh] flex flex-col justify-start items-center pt-8 ">
        <div className="flex flex-col justify-center items-center w-10/12">
          <p className="text-sm font-normal text-black/70 text-left w-2/6">
            STEP <strong>3</strong> of <strong>3</strong>
          </p>
          <h1 className="text-3xl font-bold text-black/80 w-2/6 text-left pt-2 pb-3">
            Setup your PayPal
          </h1>
          <div className="flex flex-row items-center h-16 justify-between w-2/6 rounded p-3 bg-slate-100 ">
            <div className="flex flex-col items-start justify-start">
              <p className="font-sm font-bold">USD9.99/month</p>
              <p className="font-base text-slate-500 text-left">Premium</p>
            </div>
            <p className="font-semibold text-blue-500 hover:underline hover:cursor-pointer">
              Change
            </p>
          </div>

          <p className="text-base font-medium text-black/70 w-2/6 mt-4 ">
            To finish signup,click the <strong>continue to Paypal </strong>
            button and log in to PayPal using your email and password
          </p>

          <CustomButton
            text="Continue to Paypal"
            css="text-2xl  font-medium mt-5 px-3 py-4 w-2/6"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
