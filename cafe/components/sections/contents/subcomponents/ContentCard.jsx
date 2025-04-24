"use client";
import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";
import { useState } from "react";

const ContentCard = ({ isHigh, imageUrl, title, subTitle }) => {
  const [index, setIndex] = useState(1);
  const [onMouse, setOnMouse] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setOnMouse((prev) => true);
        setIndex((prev) => Math.floor(Math.random() * 5) + 1);
      }}
      onMouseLeave={() => setOnMouse((prev) => false)}
      className="flex flex-col gap-2 w-full"
    >
      <div className={`${onMouse ? "opacity-100" : "opacity-0"} duration-150 flex relative justify-end top-[10px] z-10`}>
        <Image src={`/cat${index}.png`} alt="" width={48} height={48} />
      </div>
      <div className={`${isHigh ? "h-[300px]" : "h-[200px]"} w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <Heading level={5}>{title}</Heading>
      <Paragraph>{subTitle}</Paragraph>
    </div>
  );
};

export default ContentCard;
