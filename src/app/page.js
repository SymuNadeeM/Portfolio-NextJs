export default function Home() {
  return (
    <section>
      <div className="mt-10 p-13 bg-black rounded-[20px]">
        <div className="flex items-center gap-4 mb-3.5">
          <h2 className="text-3.5 capitalize inline-block text-white  font-bold">
            About
          </h2>
          <div className="w-[200px] h-[3px] bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
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
      </div>
    </section>
  );
}
