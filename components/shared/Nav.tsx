import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden lg:flex gap-[3rem] translate-x-[-7rem]">
      <Link href={"/"} className="hover:opacity-70 duration-200">
        Home
      </Link>
      <Link href={"/"} className="hover:opacity-70 duration-200">
        Create Event
      </Link>
      <Link href={"/"} className="hover:opacity-70 duration-200">
        My Profile
      </Link>
    </nav>
  );
};

export default Nav;
