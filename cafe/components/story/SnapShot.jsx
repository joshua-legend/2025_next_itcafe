"use client";
import { motion } from "motion/react";
import Container from "../common/layout/Container";
import Image from "next/image";
import Paragraph from "../common/typography/Paragraph";
import { animation, containerVariant } from "@/styles/motion";

const SnapShot = () => {
  return (
    <Container className="h-screen py-10 px-8 md:px-0">
      <motion.div viewport={{ once: true, amount: 0.2 }} initial="hidden" whileInView="visible" className="flex gap-20 h-screen" variants={containerVariant}>
        <motion.div className="flex-2 flex flex-col gap-10" variants={animation.fadeInSlideUp}>
          <Paragraph className="text-xl">
            흐르는 시간 동안 차곡차곡 쌓인 신뢰
            <br />
            동반 파트너로 이어온 끈끈한 우정
            <br />
            브라질 내 단일 커피 농장으로 최대 규모인
            <br />
            이파네마 농장의 특별한 원두 품질
          </Paragraph>
          <div className={`h-[500px] w-full relative`}>
            <Image alt="" className="object-cover" fill src={"/coffee_1.jpg"} />
          </div>
          <Paragraph className="text-xl">
            이것이
            <br />
            이파네마와 우리의 10년입니다.
          </Paragraph>
        </motion.div>
        <div className="flex-5 flex gap-4 w-full h-full">
          <motion.div variants={animation.fadeInSlideUp} whileTap={{ scale: 1.05 }} className={"h-full flex-1 relative"}>
            <Image alt="" className="object-cover" fill src={"/coffee_3.jpg"} />
          </motion.div>
          <div className="flex-1 flex flex-col gap-4">
            <motion.div variants={animation.fadeInSlideUp} whileTap={{ scale: 1.05 }} className={"h-[300px] flex-1 relative"}>
              <Image alt="" className="object-cover" fill src={"/coffee_4.jpg"} />
            </motion.div>
            <motion.div variants={animation.fadeInSlideUp} whileTap={{ scale: 1.05 }} className={"h-[300px] flex-1 relative"}>
              <Image alt="" className="object-cover" fill src={"/coffee_5.jpg"} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default SnapShot;
