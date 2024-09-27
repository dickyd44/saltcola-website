"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";
// import NavbarDropdown from "./NavbarDropdown";

const NAVBAR_LINKS = [
  {
    name: "salt cola",
    link: "/",
  },
  {
    name: "our-company",
    link: "/our-company",
  },
  {
    name: "events",
    link: "/events",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.addEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="bg-gradient-to-r from-dark via-red to-dark">
      <div className="container w-full">
        <div className="h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 relative">
          {/* icon */}
          <Link href="#" className="flex items-center gap-5">
            <Image
              src={logo}
              alt="shopify-icon"
              width={1000}
              height={1000}
              className="w-16 h-16 object-contain z-20"
            />
            <div className="hidden xl:block">
              <p className="text-white text-xl">SaltCola® Indonesia</p>
              <p className="text-xs capitalize text-white font-light">
                simply refreshing
              </p>
            </div>
          </Link>

          {/* humberger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-white rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-white rounded-full"></span>
          </div>

          {/* menu */}
          <div className="hidden uppercase h-screen lg:flex items-center lg:gap-4 text-white text-sm font-medium">
            {NAVBAR_LINKS.map((navlink, idx) => (
              <Link
                key={idx}
                href={navlink.link}
                className=" p-3 rounded-sm hover:bg-[#dc2626]"
              >
                {navlink.name}
              </Link>
            ))}

            {/* button */}
            <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm font-head font-medium">
              <Link
                href="#"
                className="p-3 rounded-sm bg-pink-600 hover:bg-[#dc2626]"
              >
                <p className="text-black-100 cursor-pointer">Buy Now</p>
              </Link>
            </div>
          </div>
        </div>

        {/* navbar mobile menu */}
        {/* <NavbarDropdown isOpen={isOpen} /> */}
      </div>
    </nav>
  );
}
