import Experience from "@/components/screen/Resume/Experience";
import TitleText from "@/components/shared/TitleText";

const page = () => {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <TitleText title="Resume" />
         <Experience />
      </div>
    </section>
  );
};

export default page;
