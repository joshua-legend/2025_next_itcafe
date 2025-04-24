import Contents from "@/components/sections/contents/Contents";
import Slider from "@/components/sections/slider/Slider";
import Aside from "@/components/sections/aside/Aside";
import MdSlider from "@/components/sections/mdSlider/MdSlider";

export default function Home() {
  return (
    <>
      <Aside />
      <Slider />
      <Contents />
      <MdSlider />
    </>
  );
}
