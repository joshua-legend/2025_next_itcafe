"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="py-5 shadow-sm bg-white sticky top-0 z-10">
      <nav className="px-4 w-full max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-gray-500 hover:text-sky-200 transition-all duration-200 font-medium text-lg">
          <Link href={"/"}>IT Cafe</Link>
        </h1>
        <ul className="hidden md:flex items-center gap-8">
          <NavLink link={"/story"} navName={"Story"} />
          <NavLink link={"/menu"} navName={"Menu"} />
          <NavLink link={"/store"} navName={"Store"} />
          <NavLink link={"/content"} navName={"Contents"} />
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-gray-500">
          {isMenuOpen ? <MdCancel /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
