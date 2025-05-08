import Container from "@/components/common/layout/Container";
import Banner from "@/components/store/Banner";
import KakaoMap from "@/components/store/KakaoMap";

const Page = () => {
  return (
    <>
      <Banner />
      <Container>
        <KakaoMap />
      </Container>
    </>
  );
};

export default Page;
