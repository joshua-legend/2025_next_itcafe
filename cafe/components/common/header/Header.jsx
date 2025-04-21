import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="py-5 shadow-sm bg-white sticky top-0 z-10">
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-gray-500 hover:text-sky-200 transition-all duration-200 font-medium text-lg">
          <Link href={"/"}>IT Cafe</Link>
        </h1>
        <ul className="flex items-center gap-8">
          <NavLink link={"/story"} navName={"Story"} />
          <NavLink link={"/menu"} navName={"Menu"} />
          <NavLink link={"/store"} navName={"Store"} />
          <NavLink link={"/content"} navName={"Contents"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
