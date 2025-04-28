"use client";
import Container from "@/components/common/layout/Container";
import Heading from "@/components/common/typography/Heading";
import Paragraph from "@/components/common/typography/Paragraph";
import { motion } from "motion/react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[url('/farm.jpg')] bg-cover bg-center">
        <motion.section className="flex flex-col text-5xl text-center text-white font-bold leading-snug">
          <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
            브라질 이파네마 농장의 언덕에는
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
            지난 10년간 같은 자리에 줄곧
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
            카페베네 팻말이 꽂혀있었습니다
          </motion.span>
        </motion.section>
      </div>
      <Container className="h-screen flex gap-20 py-10 px-8 md:px-0">
        <motion.div className="flex-2 flex flex-col gap-10" transition={{ duration: 1 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
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
          <motion.div whileTap={{ scale: 1.05 }} className={"h-full flex-1 relative"}>
            <Image alt="" className="object-cover" fill src={"/coffee_3.jpg"} />
          </motion.div>
          <div className="flex-1 flex flex-col gap-4">
            <motion.div whileTap={{ scale: 1.05 }} className={"h-[300px] flex-1 relative"}>
              <Image alt="" className="object-cover" fill src={"/coffee_4.jpg"} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.05 }} className={"h-[300px] flex-1 relative"}>
              <Image alt="" className="object-cover" fill src={"/coffee_5.jpg"} />
            </motion.div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
