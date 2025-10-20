import NavBar from "@/app/component/navbar/navbar";
import { nav_menu } from "./navbar/nav_menu";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <NavBar menu={nav_menu} />
      </header>
    </>
  );
};

export default Header;
