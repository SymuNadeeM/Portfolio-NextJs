import Educations from "@/components/screen/Resume/Educations";
import Experience from "@/components/screen/Resume/Experience";
import Knowledge from "@/components/screen/Resume/Knowledge";
import SkillAndKnowledge from "@/components/screen/Resume/SkillAndKnowledge";
import TitleText from "@/components/shared/TitleText";

const page = () => {
  return (
    <section>
      <div className="mt-10 p-5 sm:p-13 bg-black rounded-[20px]">
        <TitleText title="Resume" />
         <Experience />
         <Educations />
         <SkillAndKnowledge />
         <Knowledge />
      </div>
    </section>
  );
};

export default page;
