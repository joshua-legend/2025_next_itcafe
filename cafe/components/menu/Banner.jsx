import Paragraph from "../common/typography/Paragraph";

const Banner = () => {
  return (
    <div className="h-[200px] bg-[url('/coffee_5.jpg')] bg-cover bg-center text-center flex items-center justify-center">
      <Paragraph className="text-white text-3xl">
        MENU
        <br />
        우리동네 숨은 스페셜티 블렌드 맛집
      </Paragraph>
    </div>
  );
};

export default Banner;
