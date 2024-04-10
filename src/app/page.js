import { FaLaptopCode } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

export default function Home() {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <div className="flex items-center gap-4 mb-3.5">
          <h2 className="text-3.5 capitalize inline-block text-white  font-bold">
            About
          </h2>
          <div className="w-[200px] h-[3px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
        </div>

        <p className="max-w-[632px] leading-7">
          I am a dedicated frontend web developer with a passion for crafting
          engaging and dynamic user experiences. With expertise in JavaScript,
          React, Next.js, Node.js, CSS, Bootstrap, and Tailwind CSS, I thrive on
          bringing designs to life with seamless functionality and aesthetic
          appeal.
        </p>
        <p className="max-w-[632px] leading-7 mt-3">
          Having honed my skills at Nurit Software Company, I've gained
          invaluable experience collaborating within team environments,
          communicating effectively, and delivering high-quality solutions under
          tight deadlines. My commitment to staying abreast of the latest trends
          and technologies in web development ensures that I'm always equipped
          to tackle new challenges and push the boundaries of what's possible on
          the web.
        </p>
        {/* achievement card */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          <div className="bg-grayBackground rounded-md  p-4 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold"> 3+ </h2>
            <p className="pt-2 text-sm uppercase text-center">
              Years of Experience
            </p>
          </div>
          <div className="bg-grayBackground rounded-md  p-4 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold"> 30+ </h2>
            <p className="pt-2 text-sm uppercase text-center">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="bg-grayBackground rounded-md  p-4 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold"> 10+ </h2>
            <p className="pt-2 text-sm uppercase text-center"> HAPPY CLIENTS</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-4 mb-7.5">
            <h3 className="text-2xl text-white font-medium">My Interests</h3>
            <div className="w-[80px] h-[1.8px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <SiYourtraveldottv size={20} className="text-white" />
              <p className="font-medium">Travel</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaLaptopCode size={20} className="text-white" />
              <p className="font-medium">Coding</p>
            </div>

            <div className=" flex items-center justify-center gap-2">
              <i class="fa-solid fa-drumstick-bite text-[19px] dark:text-[#fff]  text-btnbg"></i>
              <p className=" font-Robbi dark:text-dtext1">Eating</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <i class="fa-solid fa-baseball-bat-ball text-[19px] dark:text-[#fff]  text-btnbg"></i>
              <p className=" font-Robbi dark:text-dtext1">Playing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
