import Text from "@/components/common/base/Text";
import Container from "@/components/common/layout/Container";
import Paragraph from "@/components/common/typography/Paragraph";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;
  const data = await fetch("https://api.sampleapis.com/coffee/hot");
  const newData = await data.json();
  const [coffee] = newData.filter((v) => v.id === +id);

  return (
    <Container className="py-10 px-8 md:px-0">
      <Text className="border-b-4 border-slate-700 py-2 my-5 block text-4xl">{coffee.title}</Text>
      <div className="flex gap-5">
        <div className="relative w-full h-[600px]">
          <Image className="object-cover" src={coffee.image} alt={""} fill />
        </div>
        <Paragraph>{coffee.description}</Paragraph>
      </div>
    </Container>
  );
};

export default Page;
