import Image from "next/image";
import Link from "next/link";

const ProjectPageStructure = ({ ProjectData, halfLength }) => {
  return (
    <div className="md:px-3.5 w-full md:flex gap-5">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        {ProjectData.slice(0, halfLength).map((items) => (
          <div
            key={items.id}
            className="p-5 bg-grayBg border border-borderRe rounded-xl w-full h-fit"
          >
            <Link href={"#"} className="rounded-xl mb-4 block overflow-hidden">
              <div className="w-full h-[200px] sm:h-[255px]">
                <Image
                  src={items.image}
                  alt={items.name}
                  className="object-cover md:object-fill w-full h-full"
                />
              </div>
            </Link>
            <p className="text-xs capitalize">{items.title}</p>
            <Link href={"#"}>
              <h5 className="font-medium text-white hover:text-activeColor duration-300 leading-6 capitalize">
                {items.name}
              </h5>
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        {ProjectData.slice(halfLength).map((items) => (
          <div
            key={items.id}
            className="p-5 bg-grayBg border border-borderRe rounded-xl w-full h-fit"
          >
            <Link href={"#"} className="rounded-xl mb-4 block overflow-hidden">
              <div className="w-full h-[200px] sm:h-[240px]">
                <Image
                  src={items.image}
                  alt={items.name}
                  className="object-cover md:object-fill w-full h-full"
                />
              </div>
            </Link>
            <span className="text-xs capitalize">{items.title}</span>
            <Link href={"#"}>
              <h5 className="font-medium text-white hover:text-activeColor duration-300 leading-6 capitalize">
                {items.name}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPageStructure;
