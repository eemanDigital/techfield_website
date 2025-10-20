import Link from "next/link";
import Image from "next/image";

export const Logo = ({ color, style }) => {
  return (
    <div className={`flex items-center ${style} ${color}`}>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="law firm logo"
          className="w-32 h-32"
        />
        {/* <span className="font-bold tracking-wider text-lg">TECHFIELD LAW</span> */}
      </Link>
    </div>
  );
};
