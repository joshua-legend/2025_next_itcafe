import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const MD = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="">
        <Image width={220} height={220} className="object-cover" src={imageSrc} alt={""} quality={100} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subtitle}</Paragraph>
    </div>
  );
};

export default MD;
