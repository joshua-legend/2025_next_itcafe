import Text from "@/components/common/base/Text";
import Image from "next/image";

const Coffee = ({ title, price, image }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="relative h-[300px] w-full">
        <Image className="object-cover" src={image} alt={""} fill />
      </div>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </div>
  );
};

export default Coffee;
