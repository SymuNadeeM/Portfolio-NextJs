import { aboutData } from "@/app/data/aboutPage";
import TitleText from "./components/shared/TitleText";

export default function Home() {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <TitleText title={aboutData.about.title} />

        {aboutData.about.description.map((paragraph, index) => (
          <p key={index} className="max-w-[632px] leading-7">
            {paragraph}
          </p>
        ))}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {aboutData.achievements.map((achievement, index) => (
            <div key={index} className="bg-grayBackground rounded-md p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-semibold">{achievement.value}</h2>
              <p className="pt-2 text-sm uppercase text-center">{achievement.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-4 mb-7.5">
            <h3 className="text-2xl text-white font-medium">My Interests</h3>
            <div className="w-[80px] h-[1.8px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
          </div>
          <div className="flex justify-between items-center">
            {aboutData.interests.map((interest, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <interest.icon size={20} className="text-white" />
                <p className="font-medium">{interest.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
