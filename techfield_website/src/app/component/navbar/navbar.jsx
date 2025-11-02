"use client";
import { useEffect, useState, useRef } from "react";
import {
  Scale,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  phoneNumber,
  email,
  logoName,
  logoInitials,
  logoTagline,
} from "@/data/info";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Practice Areas",
    path: "/#area-of-areas",
    // submenu: [
    //   { title: "Corporate Law", subpath: "/practice-area/corporate" },
    //   { title: "Litigation", subpath: "/practice-area/litigation" },
    //   { title: "Intellectual Property", subpath: "/practice-area/ip" },
    //   { title: "Employment Law", subpath: "/practice-area/employment" },
    //   { title: "Real Estate", subpath: "/practice-area/real-estate" },
    //   { title: "Tax Law", subpath: "/practice-area/tax" },
    // ],
  },
  {
    title: "Our Team",
    path: "/our-team",
  },
  // {
  //   title: "About Us",
  //   path: "/about",
  // },
  {
    title: "blog",
    path: "/#blog",
    // submenu: [
    //   { title: "Blog & Insights", subpath: "/blog" },
    //   { title: "Case Studies", subpath: "/case-studies" },
    //   { title: "Legal Resources", subpath: "/resources" },
    //   { title: "FAQ", subpath: "/faq" },
    // ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const mobileMenuRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Focus first item when mobile menu opens
      setTimeout(() => {
        const firstMenuItem = document.querySelector("[data-mobile-menu-item]");
        if (firstMenuItem) firstMenuItem.focus();
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setHoveredItem(null);
        setActiveSubmenu(null);
        if (isMobileMenuOpen) {
          toggleMobileMenu();
        }
      }
    };

    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        isMobileMenuOpen
      ) {
        toggleMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  // const handleAnchorClick = (e, path) => {

  //   if (path.includes("#")) {
  //     e.preventDefault();
  //     const targetId = path.split("#")[1];
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       // Close mobile menu if open
  //       if (isMobileMenuOpen) {
  //         toggleMobileMenu();
  //       }

  //       // Smooth scroll to target
  //       targetElement.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });

  //       // Focus the target for accessibility
  //       setTimeout(() => {
  //         targetElement.setAttribute("tabindex", "-1");
  //         targetElement.focus();
  //       }, 1000);
  //     }
  //   }
  // };

  const handleAnchorClick = async (e, path) => {
    if (path.includes("#")) {
      e.preventDefault();
      const [basePath, hash] = path.split("#");

      if (basePath && basePath !== window.location.pathname) {
        // Navigate to base page first (e.g., go to "/")
        router.push(`/${hash ? `#${hash}` : ""}`);
      } else {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // focus for accessibility
          targetElement.setAttribute("tabindex", "-1");
          targetElement.focus();
        }
      }
      // Close mobile menu if open
      if (isMobileMenuOpen) toggleMobileMenu();
    }
  };

  const handleMenuItemClick = (e, item) => {
    if (item.path.includes("#")) {
      handleAnchorClick(e, item.path);
    } else if (!item.submenu) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-[#990100]/95 via-[#b30000]/95 to-[#990100]/95 backdrop-blur-sm"
        }`}>
        {/* Top bar - Contact info (Desktop only) */}
        <div
          className={`hidden lg:block border-b transition-colors duration-300 ${
            isScrolled
              ? "border-gray-200 bg-gray-50"
              : "border-white/10 bg-black/10"
          }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-10 text-sm">
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className={`flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 rounded-md px-2 py-1 ${
                    isScrolled
                      ? "text-gray-600 hover:text-[#990100] focus:text-[#990100]"
                      : "text-white/90 hover:text-white focus:text-white"
                  }`}
                  tabIndex={0}>
                  <Phone className="w-3.5 h-3.5" />
                  <span className="font-medium">{phoneNumber}</span>
                </a>
                <a
                  href="mailto:info@legaltech.com"
                  className={`flex items-center gap-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 rounded-md px-2 py-1 ${
                    isScrolled
                      ? "text-gray-600 hover:text-[#990100] focus:text-[#990100]"
                      : "text-white/90 hover:text-white focus:text-white"
                  }`}
                  tabIndex={0}>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{email}</span>
                </a>
              </div>
              <div
                className={`text-xs ${
                  isScrolled ? "text-gray-500" : "text-white/70"
                }`}>
                Monday - Friday, 9:00 AM - 6:00 PM EST
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 rounded-lg p-2"
              tabIndex={0}>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-br from-[#990100] to-[#660000]"
                    : "bg-white/10 backdrop-blur-sm group-hover:bg-white/20"
                }`}>
                <div
                  className={`w-5 h-5 transition-colors duration-300  font-extrabold ${
                    isScrolled ? "text-white" : "text-white"
                  }`}>
                  {logoInitials}
                </div>
              </div>
              <div>
                <h1
                  className={` font-bold transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}>
                  {logoName}
                </h1>
                <p
                  className={`text-xs italic transition-colors duration-300 ${
                    isScrolled ? "text-gray-500" : "text-white/70"
                  }`}>
                  {logoTagline}
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}>
                  <a
                    href={item.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 focus:ring-offset-white ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#990100] hover:bg-red-50 focus:text-[#990100] focus:bg-red-50"
                        : "text-white hover:bg-white/10 focus:bg-white/10"
                    }`}
                    tabIndex={0}>
                    {item.title}
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredItem === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {item.submenu && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        hoveredItem === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.subpath}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-[#990100] focus:bg-red-50 focus:text-[#990100] focus:outline-none transition-colors duration-200 border-b border-gray-50 last:border-0"
                          tabIndex={hoveredItem === index ? 0 : -1}>
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 ${
                isScrolled
                  ? "bg-[#990100] text-white hover:bg-[#7a0000] shadow-lg hover:shadow-xl focus:bg-[#7a0000] focus:shadow-xl"
                  : "bg-white text-[#990100] hover:bg-gray-100 focus:bg-gray-100"
              }`}
              tabIndex={0}>
              Free Consultation
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                  : "text-white hover:bg-white/10 focus:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#990100] to-[#660000] rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{logoName}</h2>
              <p className="text-xs text-gray-500">{logoTagline}</p>
            </div>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#990100] rounded-lg transition-colors duration-200"
            aria-label="Close menu"
            tabIndex={isMobileMenuOpen ? 0 : -1}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="p-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between">
                  <a
                    href={item.path}
                    onClick={(e) => handleMenuItemClick(e, item)}
                    data-mobile-menu-item={index === 0 ? "first" : undefined}
                    className="flex-1 py-3 text-base font-semibold text-gray-900 hover:text-[#990100] focus:text-[#990100] focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-inset rounded-lg transition-colors duration-200"
                    tabIndex={isMobileMenuOpen ? 0 : -1}>
                    {item.title}
                  </a>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="p-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#990100] rounded-lg transition-colors duration-200"
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      aria-expanded={activeSubmenu === index}
                      aria-controls={`submenu-${index}`}>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          activeSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && (
                  <ul
                    id={`submenu-${index}`}
                    className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                      activeSubmenu === index
                        ? "max-h-96 opacity-100 pb-3"
                        : "max-h-0 opacity-0"
                    }`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.subpath}
                          onClick={toggleMobileMenu}
                          className="block py-2 px-3 text-sm text-gray-600 hover:text-[#990100] hover:bg-red-50 focus:text-[#990100] focus:bg-red-50 focus:outline-none rounded-lg transition-colors duration-200"
                          tabIndex={activeSubmenu === index ? 0 : -1}>
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="/contact"
            onClick={toggleMobileMenu}
            className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#990100] text-white rounded-lg font-bold hover:bg-[#7a0000] focus:bg-[#7a0000] focus:outline-none focus:ring-2 focus:ring-[#990100] focus:ring-offset-2 transition-colors duration-300"
            tabIndex={isMobileMenuOpen ? 0 : -1}>
            Free Consultation
            <ChevronRight className="w-4 h-4" />
          </a>

          {/* Mobile Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 text-gray-600 hover:text-[#990100] focus:text-[#990100] focus:outline-none focus:ring-2 focus:ring-[#990100] rounded-lg p-2 transition-colors duration-200"
              tabIndex={isMobileMenuOpen ? 0 : -1}>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Call Us</p>
                <p className="font-semibold">{phoneNumber}</p>
              </div>
            </a>
            <a
              href="mailto:info@legaltech.com"
              className="flex items-center gap-3 text-gray-600 hover:text-[#990100] focus:text-[#990100] focus:outline-none focus:ring-2 focus:ring-[#990100] rounded-lg p-2 transition-colors duration-200"
              tabIndex={isMobileMenuOpen ? 0 : -1}>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Us</p>
                <p className="font-semibold">info@legaltech.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
