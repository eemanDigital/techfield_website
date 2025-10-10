// import { cinzel } from "../utils/font";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({ color, style }) => {
  return (
    // <div className={` ${style} || ${cinzel.className} text-xl p-3 ${color}`}>
    <div className={` flex ${style} text-xl p-3 ${color}`}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={200}
          height={200}
          alt="law firm logo"
        />
      </Link>
      <span className="font-bolder tracking-wider text-[14px]">
        TECHFIELD LAW
      </span>
    </div>
  );
};
