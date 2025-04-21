import ContentsAside from "./ContentsAside";
import ContentsMain from "./ContentsMain";
import Title from "./Title";

const Contents = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <Title title={"Contents"} />
      <div className="flex w-full h-lvh gap-10">
        <ContentsMain />
        <ContentsAside />
      </div>
    </section>
  );
};

export default Contents;
