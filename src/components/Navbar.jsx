import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
import { X, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import Menu from "./ui/Menu";

const flyoutLinks = [
  { to: "/accounting", label: "Accounting & Financial Reporting" },
  { to: "/audit_and_assurance", label: "Audit and Assurance" },
  { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
  { to: "/business_advisory", label: "Business Advisory" },
  { to: "/compliance_support", label: "Regulatory & Compliance Support" },
  { to: "/specialized_services", label: "Specialized Advisory Services" },
];

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  const timeoutRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const servicesRef = useRef(null);

  // Flyout menu handlers
  const handleFlyoutEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServices(true);
  }, []);

  const handleFlyoutLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setShowServices(false), 200); // change the value to adjust delay of color changing effect on navbar.
  }, []);

  // Scroll handler for homepage
  // useEffect(() => {
  //   // if (!isHome) {
  //   //   setIsScrolled(true);
  //   //   return;
  //   // }

  //   // const handleScroll = () => {
  //   //   setIsScrolled(window.scrollY > 200);
  //   // };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isHome]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav
      className={`${isHome ? "fixed" : "sticky"} bg-clip-padding
backdrop-filter
backdrop-blur
bg-opacity-10
backdrop-saturate-100
backdrop-contrast-100 top-0 z-50 w-full transition-all duration-300 text-white 
        ${isScrolled ? "shadow-xl" : ""}
        ${isOpen ? "bg-[#2b3780]" : isScrolled ? "bg-[#18204e]" : "bg-white/20"}`}
    >
      <div className="flex justify-between items-center mx-4 sm:mx-6 md:mx-15 py-4">
        {/* Logo */}
        <div>
          <Link
            to="/"
            onClick={() => {
              handleScrollTop();
              // setIsScrolled(false);
            }}
            className="outline-none focus:outline-none"
          >
            <p className="text-2xl md:text-2xl font-playfair-display font-extrabold">
              Sanjay K Pathak & Associates
            </p>
            <p className="text-sm md:text-md font-playfair-display font-extrabold">
              Chartered Accountants
            </p>
          </Link>
        </div>

        {/* Desktop Nav */}
        <span className="hidden lg:flex gap-10 text-md items-center relative">
          <Link onClick={() => {
            handleScrollTop();
            // setIsScrolled(false);
          }} className="li-custom" to="/">
            Home
          </Link>
          <Link onClick={handleScrollTop} className="li-custom" to="/about">
            About Us
          </Link>

          <div className="relative">
            <Link
              ref={servicesRef}
              to="/services"
              className="li-custom flex items-center gap-1"
              onClick={handleScrollTop}
              onMouseEnter={handleFlyoutEnter}
              onMouseLeave={handleFlyoutLeave}
            >
              Services
              <img src="/DropDown.svg" className="h-3 w-3 mt-0.5" alt="skp and associates Services Dropdown icon" />
              {/* <ChevronDown className="h-5 w-5 mt-0.5"/> */}
            </Link>

            {showServices && servicesRef.current && (
              <ul
                className="absolute min-w-[350px] z-[3000] p-2 shadow-xl rounded-md bg-green-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"
                style={{
                  top: servicesRef.current.offsetHeight + 8 + "px",
                  left:
                    servicesRef.current.offsetLeft +
                    servicesRef.current.offsetWidth / 2 -
                    175 +
                    "px", // 175 = half of min-width 350px
                }}
                onMouseEnter={handleFlyoutEnter}
                onMouseLeave={handleFlyoutLeave}
              >
                {flyoutLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-800 hover:text-white rounded hover:bg-[#ff6b6b] flex items-center text-lg p-2 px-4 w-full"
                      onClick={() => {
                        setShowServices(false);
                        handleScrollTop();
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link onClick={handleScrollTop} className="li-custom" to="/industries">
            Industries
          </Link>
          <Link onClick={handleScrollTop} className="li-custom" to="/leaderships">
            Our Leadership
          </Link>

          <Button label="Contact Us" href="/contact" onClick={handleScrollTop} />
        </span>

        {/* Tablet Nav */}
        <div className="hidden sm:flex lg:hidden items-center gap-4">
          <button aria-label="menu open close button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="cursor-pointer" size={28} /> : <Menu className="cursor-pointer" size={28} />}
          </button>
          <Button
            label="Contact Us"
            href="/contact"
            onClick={() => {
              handleScrollTop();
              setIsOpen(false);
            }}
          />
        </div>

        {/* Mobile Nav */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded="false"

            aria-controls="main-navigation"
          >
            {isOpen ? <X className="cursor-pointer" size={28} /> : <Menu className="cursor-pointer" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#142172]/90 px-4 sm:px-6 md:px-15 py-4 space-y-4 text-lg flex flex-col">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/industries"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Industries
          </Link>
          <Link
            to="/leaderships"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline"
          >
            Our Leadership
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
            className="hover:underline flex gap-1"
          >
            Services
            {/* <img src="/DropDown.svg" alt="" /> */}
          </Link>

          {/* Mobile-only Contact */}
          <div
            className="sm:hidden"
            onClick={() => {
              setIsOpen(false);
              handleScrollTop();
            }}
          >
            <Button label="Contact Us" href="/contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
