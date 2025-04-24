import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="z-20 fixed top-[200px] right-[200px] flex flex-col gap-4">
      <div className="rounded-full text-white bg-[#3A466A] p-3">
        <FaInstagram />
      </div>
      <div className="rounded-full text-white bg-[#3A466A] p-3">
        <FaYoutube />
      </div>
    </aside>
  );
};

export default Aside;
