"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "@/assets/veevents-logo-clear.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const MobileNav = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<any>();

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={container}>
      <div className="menu-overlay flex flex-col justify-between fixed top-0 bottom-0 w-screen h-screen bg-[#5a3ee5] pt-[11rem] md:pt-[9rem] pb-[7rem] md:pb-[4rem] px-[2rem] md:px-[6rem] lg:hidden z-[20]">
        <h1 className="absolute right-0 font-made-outline-alt-black text-[7rem] opacity-[0.08] rotate-45 translate-y-[5rem] translate-x-[5rem]">
          VEEVENTS
        </h1>
        <h1 className="absolute right-0 font-made-outline-alt-black text-[7rem] opacity-[0.08] -rotate-45 translate-y-[5rem] hidden md:block translate-x-[5rem]">
          VEEVENTS
        </h1>
        <h1 className="absolute right-0 font-made-outline-alt-black text-[7rem] opacity-[0.08] rotate-90 translate-y-[5rem] translate-x-[20rem]">
          VEEVENTS
        </h1>
        <div className="text-[2.2rem] md:text-[3.5rem] flex flex-col gap-[1rem]">
          <div className="menu-link font-made-alt-black">
            <div className="relative menu-link-item-holder">
              <Link href={"/"} onClick={toggleMenu}>
                Home
              </Link>
            </div>
          </div>
          <div className="menu-link font-made-alt-black">
            <div className="relative menu-link-item-holder">
              <SignedOut>
                <Link href={"/sign-in"} onClick={toggleMenu}>
                  Create Event
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href={"/events/create"} onClick={toggleMenu}>
                  Create Event
                </Link>
              </SignedIn>
            </div>
          </div>
          <div className="menu-link font-made-alt-black">
            <div className="relative menu-link-item-holder">
              <Link href={"/profile"} onClick={toggleMenu}>
                My Profile
              </Link>
            </div>
          </div>
          <SignedOut>
            <div className="menu-link font-made-alt-black ">
              <div className="relative menu-link-item-holder">
                <Link
                  href={"/sign-in"}
                  onClick={toggleMenu}
                  className="underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </SignedOut>
        </div>
        <div className="flex flex-col gap-[1.5rem] md:flex-row md:gap-0 md:justify-between">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="veevents-logo"
            className="h-[2rem] bg-gree-500 w-[17rem] object-cover translate-x-[-2.8rem]"
          />
          <div className="flex gap-[1rem] items-end">
            <FaFacebook size={22} />
            <FaInstagram size={22} />
            <FaTiktok size={22} />
            <FaXTwitter size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
