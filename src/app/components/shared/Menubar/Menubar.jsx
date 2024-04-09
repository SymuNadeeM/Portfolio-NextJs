import Link from "next/link";
import { FaAddressBook } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { LuUser2 } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

const Menubar = () => {
  return (
    <div className="text-right">
      <div className="p-7.5 rounded-2xl bg-black inline-block ">
        <nav>
          <ul className="flex items-center gap-3">
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <LuUser2 className="text-2xl mb-3" />
                About
              </Link>
            </li>
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <FaAddressBook className="text-2xl mb-3" />
                Resume
              </Link>
            </li>
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <MdWorkOutline className="text-2xl mb-3" />
                Works
              </Link>
            </li>
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <ImBlogger2 className="text-2xl mb-3" />
                Blogs
              </Link>
            </li>
            <li className="menubar">
              <Link href={"#"} className="flex flex-col items-center">
                <RiContactsBookLine className="text-2xl mb-3" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
