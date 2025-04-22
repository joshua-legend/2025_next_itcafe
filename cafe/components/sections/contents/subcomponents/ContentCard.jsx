import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const ContentCard = ({ isHigh, imageUrl, title, subTitle }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className={`${isHigh ? "h-[500px]" : "h-[300px]"} w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
    </div>
  );
};

export default ContentCard;
