import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const MD = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-auto px-6 md:px-0">
      <div className="relative aspect-square w-full md:w-[220px]">
        <Image fill className="object-cover rounded-lg hover:scale-105 transition-transform duration-300" src={imageSrc} alt={title} quality={100} />
      </div>
      <div className="px-2">
        <Heading level={5} className="text-lg md:text-xl font-medium">
          {title}
        </Heading>
        <Paragraph className="text-sm md:text-base text-gray-600">{subtitle}</Paragraph>
      </div>
    </div>
  );
};

export default MD;
