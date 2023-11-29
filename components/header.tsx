import Link from "next/link";
import Image from "next/image";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <>
      <div className="flex flex-col">
        <header className="absolute z-30 w-full flex items-center px-16 py-2">
          <div className="container mx-auto">
            <div className="flex flex-row  justify-between items-center gap-y-6 py-4 ">
              <Link href={"/"}>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </Link>
              <Link href={"/"}>
                <span className="font-bold text-black/80 text-lg hover:underline">
                  {text}
                </span>
              </Link>
            </div>
          </div>
        </header>
        <div className="border-t border-black/10  mt-24 w-full"></div>
      </div>
    </>
  );
};

export default Header;
