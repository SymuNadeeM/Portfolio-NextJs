import { aboutData } from "@/data/aboutPage";
import Achievement from "../components/screen/Home/Achievement";
import Experience from "../components/screen/Home/Experience";
import Interests from "../components/screen/Home/Interests";
import TitleText from "../components/shared/TitleText";


export default function Home() {
  return (
    <section>
      <div className="mt-10 p-5 sm:p-13 bg-black rounded-[20px]">
        <TitleText title={aboutData.about.title} />

        {aboutData.about.description.map((paragraph, index) => (
          <p key={index} className="max-w-[630px] leading-7">
            {paragraph}
          </p>
        ))}
        <Achievement />
        <Interests />
        <Experience />
      </div>
    </section>
  );
}
