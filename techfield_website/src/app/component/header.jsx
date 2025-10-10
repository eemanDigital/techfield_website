import NavBar from "@/app/component/navbar/navbar";
import { nav_menu } from "./navbar/nav_menu";

const Header = () => {
  return (
    <>
      <header className="banner flex justify-between relative h-[900px]">
        <NavBar menu={nav_menu} />
      </header>
    </>
  );
};

export default Header;
