"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/veevents-logo-clear.png";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex ivert";
  return (
    <>
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <header className="flex justify-between items-center py-[2rem] px-[2rem] md:px-[6rem] bg-[#09090b] fixed w-full border-b-white/50 border-b-[0.5px] z-50 2xl:max-w-[1470px]">
        <Link href={"/"}>
          <Image
            src={logo}
            width={400}
            height={400}
            alt="veevents-logo"
            className="h-[2rem] bg-gree-500 w-[17rem] object-cover translate-x-[-2.8rem]"
          />
        </Link>
        <SignedIn>
          <Nav />
        </SignedIn>

        <SignedOut>
          <Link
            href={"/sign-in"}
            className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold hidden lg:block absolute right-[2rem] md:right-[6rem]"
          >
            Login / Register
          </Link>
        </SignedOut>
        <div className="absolute right-[5.5rem] md:right-[10.5rem] lg:relative lg:right-0">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <div className="mix-blend-diffeence invert lg:hidden">
          <div
            className={`${menuClass} scale-[0.65] scale-x-[0.7] translate-y-[0.1rem] cursor-pointer`}
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
