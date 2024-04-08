import logo from "@/assets/veevents-logo-clear.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-[2rem] md:px-[6rem] mt-[10rem] py-[4rem] border-t-[0.5px] border-white/50 flex flex-col justify-center items-center gap-[2rem] lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-[0.5rem]">
        <Link href={"/"}>
          <Image
            src={logo}
            width={400}
            height={400}
            alt="veevents-logo"
            className="h-[2rem] bg-gree-500 w-[17rem] object-cover translate-x-[-0.5rem] lg:translate-x-[-2.8rem]"
          />
        </Link>
        <p className="opacity-70 text-[0.8rem] text-center lg:text-left mt-[1rem]">
          2024 Veevents. All Rights Reserved.
        </p>
        <p className=" text-white/70 text-[0.8rem] text-center lg:text-left">
          Designed & Built by{" "}
          <span className="text-[#5a3ee5] underline font-bold">
            <Link href={"https://emmanuelayeniko.netlify.app/"}>
              Emmanuel Ayeniko
            </Link>
          </span>
        </p>
      </div>

      <div className="flex gap-[1rem] items-end text-[#5a3ee5]">
        <FaFacebook size={22} />
        <FaInstagram size={22} />
        <FaTiktok size={22} />
        <FaXTwitter size={22} />
      </div>
    </footer>
  );
};

export default Footer;
