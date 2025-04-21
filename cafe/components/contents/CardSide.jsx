import { colors } from "@/styles/color";
import Image from "next/image";

const CardSide = (props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full">
      <div className={`h-[150px] w-full relative`}>
        <Image alt="" className="object-cover" fill src={props.imageUrl} />
      </div>
      <h5 className="text-lg text-gray-800 font-medium">{props.title}</h5>
      <p className="text-md text-gray-700">{props.subTitle}</p>
      <button className={`bg-[${colors.green.primary}] rounded-3xl text-white py-2 px-5 w-fit`}>{props.buttonTitle}</button>
    </div>
  );
};

export default CardSide;
