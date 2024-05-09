import { menubarData } from "@/data/menubarData";
import Link from "next/link";

const Menubar = () => {
  return (
    <div className="text-right hidden xl:block">
      <div className="p-7.5 rounded-2xl bg-black inline-block">
        <nav>
          <ul className="flex items-center gap-3">
            {menubarData.map((menuItem, index) => (
              <li key={index} className="menubar">
                <Link
                  href={menuItem.link}
                  className="flex flex-col items-center"
                >
                  <menuItem.icon className="text-2xl mb-3" />
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
