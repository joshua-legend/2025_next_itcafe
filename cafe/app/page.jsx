import Contents from "@/components/sections/contents/Contents";
import Slider from "@/components/sections/Slider/Slider";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Slider />
      <Contents />
      <aside className="z-20 fixed top-[200px] right-[200px] flex flex-col gap-4">
        <div className="rounded-full text-white bg-[#3A466A] p-3">
          <FaInstagram />
        </div>
        <div className="rounded-full text-white bg-[#3A466A] p-3">
          <FaYoutube />
        </div>
      </aside>
    </>
  );
}
