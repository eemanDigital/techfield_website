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
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const phoneNumber = "+234-806-723-4189";

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1200;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setIsMobileOpenMenu(false);
        setActiveSubMenu(null);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsMobileOpenMenu(false);
    setActiveSubMenu(null);
  };

  return (
    <nav
      role="navigation"
      className={`fixed top-0 z-50 transition-all duration-300 w-full flex justify-between items-center gap-3 h-20 ${
        isScrolled || isMobileOpenMenu
          ? "bg-white bg-opacity-95 shadow-md"
          : "bg-transparent"
      }`}>
      {/* Desktop Nav */}
      <ul
        role="menubar"
        className={`hidden lg:flex items-center space-x-5 w-full ${
          isScrolled ? "text-primary" : "text-white"
        }`}>
        <Logo style="" color={`${isScrolled ? "text-info" : "text-white"}`} />

        {menu.map((nav, index) => (
          <li key={index} className="relative group">
            <div className="flex items-center gap-1 h-full">
              <Link
                className="text-[17px]  tracking-wide  hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:rounded-md transition-all duration-200 py-4 px-2"
                href={nav.path}>
                {nav.title}
              </Link>
              {nav.submenu && (
                <span className="transition-transform duration-200 group-hover:rotate-180">
                  {icons.arrow_down}
                </span>
              )}
            </div>

            {nav.submenu && (
              <div
                className={`absolute ${
                  nav.submenu.length > 5 ? "-left-52" : "left-0"
                } top-full pt-2 w-auto min-w-[200px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300`}>
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
                        className="font-bold block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200 border-b border-gray-100 last:border-0 whitespace-nowrap">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
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

          {/* Phone Link */}
          <Link
            className="text-right mr-16"
            href={`tel:${phoneNumber}`}
            aria-label="Call us">
            <i
              aria-hidden={true}
              className={`p-2 rounded-full transition-all duration-200 hover:bg-opacity-20 focus:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isScrolled || isMobileOpenMenu
                  ? "hover:bg-gray-200 focus:bg-gray-200"
                  : "hover:bg-white focus:bg-white"
              }`}>
              {icons.phone}
            </i>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileOpenMenu(!isMobileOpenMenu)}
            className="bg-secondary p-2 h-20 lg:hidden text-white absolute top-0 right-0 z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpenMenu}>
            <Hamburger
              size={25}
              toggled={isMobileOpenMenu}
              toggle={setIsMobileOpenMenu}
            />
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileOpenMenu && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsMobileOpenMenu(false)}
            />
          )}

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-20 left-0 h-screen w-4/5 max-w-[320px] bg-white text-black z-40 transform transition-transform duration-300 ease-in-out shadow-xl ${
              isMobileOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}>
            <ul className="flex flex-col gap-2 p-5">
              {menu.map((nav, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 last:border-b-0">
                  <div className="flex justify-between items-center py-3">
                    <Link
                      href={nav.path}
                      className="text-base font-semibold hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-md transition-all duration-200 px-2 py-1 flex-1"
                      onClick={handleLinkClick}>
                      {nav.title}
                    </Link>
                    {nav.submenu && (
                      <button
                        onClick={() => handleSubMenuToggle(index)}
                        className="text-xl p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition-all duration-200"
                        aria-expanded={activeSubMenu === index}
                        aria-label={`Toggle ${nav.title} submenu`}>
                        {activeSubMenu === index
                          ? icons.arrow_up
                          : icons.arrow_down}
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {nav.submenu && (
                    <ul
                      className={`ml-4 mt-1 border-l-2 border-blue-200 pl-3 space-y-1 transition-all duration-300 ease-in-out ${
                        activeSubMenu === index
                          ? "max-h-96 opacity-100 pb-2"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}>
                      {nav.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.subpath}
                            className="text-sm text-gray-600 block py-2 px-3 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md transition-all duration-200"
                            onClick={handleLinkClick}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Mobile Consultation Button */}
              <li className="mt-6 pt-4 border-t border-gray-200">
                <Button
                  text="Free Consultation"
                  bg="bg-info"
                  icon=""
                  path="contact"
                  link={true}
                  onClick={handleLinkClick}
                  className="w-full justify-center"
                />
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Desktop Contact Info */}
      {isDesktop && (
        <div className="text-right bg-info text-white px-4 w-52 h-20 flex flex-col justify-center items-center hover:bg-info-dark transition-colors duration-200 focus-within:ring-2 focus-within:ring-blue-500">
          <span className="text-base font-semibold">Call Us</span>
          <Link
            href={`tel:${phoneNumber}`}
            className="text-lg font-bold hover:underline focus:underline focus:outline-none">
            {phoneNumber}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
