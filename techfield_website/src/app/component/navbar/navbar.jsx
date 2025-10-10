"use client";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { icons } from "@/app/icons/icon";
import useScroll from "@/app/hooks/useScroll";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import Button from "../buttons/button";

const NavBar = ({ menu }) => {
  const { isScrolled } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileOpenMenu, setIsMobileOpenMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState();
  const phoneNumber = "+234-806-723-4189";

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1200;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) setIsMobileOpenMenu(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      role="navigation"
      className={`fixed top-0 z-50 transition-all duration-300 w-full flex justify-between items-center gap-3 h-20 ${
        isScrolled || isMobileOpenMenu
          ? "bg-white bg-opacity-95"
          : "bg-transparent"
      }`}>
      {/* Desktop Nav */}
      <ul
        role="menu-bar"
        className={`hidden lg:flex items-center space-x-5 w-full ${
          isScrolled ? "text-primary" : "text-white"
        }`}>
        <Logo style="" color={`${isScrolled ? "text-info" : "text-white"}`} />

        {menu.map((nav, index) => (
          <li key={index} className="relative group">
            <div className="flex items-center gap-1 h-full">
              <Link
                className="text-lg tracking-wide font-bold hover:text-blue-600 transition-colors py-4 px-2"
                href={nav.path}>
                {nav.title}
              </Link>
              {nav.icon && (
                <span className="transition-colors">{icons.arrow_down}</span>
              )}
            </div>

            {nav.submenu && (
              <div
                className={`absolute ${
                  nav.submenu.length > 5 ? "-left-52" : "left-0"
                } top-full pt-2 w-auto min-w-[200px] invisible group-hover:visible`}>
                <ul
                  className={`bg-white rounded-md shadow-lg overflow-hidden transform origin-top transition-all duration-300 scale-y-0 group-hover:scale-y-100 ${
                    nav.submenu.length > 5
                      ? "grid grid-cols-3 gap-x-4 p-3 w-[700px]"
                      : "block"
                  }`}>
                  {nav.submenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.subpath}
                        className="font-bold block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0 whitespace-nowrap">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}

        {!isDesktop && (
          <div className="ml-auto">
            <Button
              text="Free Consultation"
              bg="bg-info"
              icon=""
              path="contact"
              link={true}
            />
          </div>
        )}
      </ul>

      {/* Mobile Nav */}
      {!isDesktop && (
        <>
          <Logo
            style="absolute text-xl p-3 left-0"
            color={`${
              isScrolled || isMobileOpenMenu ? "text-info" : "text-white"
            }`}
          />
          <button
            onClick={() => setIsMobileOpenMenu(!isMobileOpenMenu)}
            className="bg-black p-2 h-20 lg:hidden text-white absolute top-0 right-0 z-50">
            <Hamburger
              size={25}
              toggled={isMobileOpenMenu}
              toggle={setIsMobileOpenMenu}
            />
          </button>
          (
          <Link className="text-right" href={`tel:${phoneNumber}`}>
            <i aria-hidden={true}>{icons.phone}</i>
          </Link>
          )
          <div
            className={`fixed top-20 left-0 h-screen w-4/5 max-w-[320px] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out ${
              isMobileOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}>
            <ul className="flex flex-col gap-4 p-5">
              {menu.map((nav, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <Link
                      href={nav.path}
                      className="text-base font-semibold"
                      onClick={() => setIsMobileOpenMenu(false)}>
                      {nav.title}
                    </Link>
                    {nav.submenu && (
                      <button
                        onClick={() =>
                          setActiveSubMenu(
                            activeSubMenu === index ? null : index
                          )
                        }
                        className="text-xl">
                        {activeSubMenu ? icons.arrow_down : icons.arrow_up}
                      </button>
                    )}
                  </div>

                  {nav.submenu && (
                    <ul
                      className={`ml-4 mt-1 border-l border-gray-300 pl-2 space-y-2 overflow-auto transition-all duration-300 ease-in-out ${
                        activeSubMenu === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}>
                      {nav.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.subpath}
                            className="text-sm text-gray-600 block"
                            onClick={() => setIsMobileOpenMenu(false)}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {!isDesktop && (
                <div className="mt-5">
                  <Button
                    text="Free Consultation"
                    bg="bg-info"
                    icon=""
                    path="contact"
                    link={true}
                  />
                </div>
              )}
            </ul>
          </div>
        </>
      )}

      {isDesktop && (
        <div className="text-right bg-info text-white px-4 w-52 h-20 flex flex-col justify-center items-center">
          <span className="text-base font-semibold">Call Us</span>
          <p className="text-lg font-bold">{phoneNumber}</p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
