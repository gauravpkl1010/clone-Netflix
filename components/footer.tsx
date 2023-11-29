import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-10 py-2 px-24 mt-24 w-full">
      <div className="container mt-5 mx-auto flex items-center justify-start sticky bottom-0 ">
        <Link href="/">
          <span className="font-medium text-black/60 text-base hover:underline text-left">
            Questions? Contact us.
          </span>
        </Link>
      </div>
      <div className="container w-5/12 mt-5 mr-auto flex flex-row items-start justify-between  left-0">
        <Link href="/">
          <span className="font-medium text-black/60 text-sm hover:underline">
            FAQ
          </span>
        </Link>
        <Link href="/">
          <span className="font-medium text-left text-black/60 text-sm hover:underline">
            Help Center
          </span>
        </Link>
        <Link href="/">
          <span className="font-medium text-left text-black/60 text-sm hover:underline">
            Netflix Shop
          </span>
        </Link>
        <Link href="/">
          <span className="font-medium text-left text-black/60 text-sm hover:underline">
            Terms of Use
          </span>
        </Link>
      </div>
      <div className="container w-5/12 mt-5 mr-auto flex flex-row items-start justify-start left-0">
        <Link href="/">
          <span className="font-medium text-black/60 text-sm hover:underline">
            Privacy
          </span>
        </Link>
        <Link href="/">
          <span className="font-medium text-black/60 text-sm ml-16 hover:underline">
            Cookies Preferences
          </span>
        </Link>
        <Link href="/">
          <span className="font-medium ml-10 text-black/60 text-left text-sm hover:underline">
            Corporate Information
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
