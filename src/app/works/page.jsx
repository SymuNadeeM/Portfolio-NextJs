import Tabs from "@/components/screen/Works/Tabs";
import TitleText from "@/components/shared/TitleText";

const WorkPage = () => {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <TitleText title="Portfolio" />
        <Tabs />
      </div>
    </section>
  );
};

export default WorkPage;
