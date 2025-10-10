import Link from "next/link";

const Button = ({ text, icon, bg, path, link }) => {
  return (
    <>
      {link && (
        <Link href={path}>
          <button
            className={`${bg} md:px-4 px-2 md:py-3 py-2 md:text-2xl text-[14px] text-white uppercase  tracking-wide rounded-md hover:bg-primary-hover transition`}>
            {text}
            <span>{icon}</span>
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
