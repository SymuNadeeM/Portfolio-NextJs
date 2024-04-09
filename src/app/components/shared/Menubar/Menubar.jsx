import Link from "next/link";
import { LuUser2 } from "react-icons/lu";

const Menubar = () => {
  return (
    <div className="text-right">
      <div className="p-7.5 rounded-2xl bg-black inline-block ">
        <nav>
          <ul>
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <LuUser2 className="text-2xl mb-3" />
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
