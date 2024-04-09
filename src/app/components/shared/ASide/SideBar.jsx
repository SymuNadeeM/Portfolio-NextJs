import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../assets/Symun2.jpg";

const SideBar = () => {
  return (
    <div className=" px-3.5 py-7.5 bg-black rounded-[20px]">
      <div className="text-center">
        {/* image */}
        <div className="flex items-center justify-center">
          <div className="mb-5">
            <Image
              src={profile}
              width={210}
              height={210}
              alt="profile"
              className="rounded-[20px] object-fill"
            />
          </div>
        </div>
        <h4 className="text-xl xl:text-2xl leading-4 font-medium text-white mb-2">
          Md. Symun Majumdar
        </h4>
        <span className="px-5 py-2 rounded-md  font-medium bg-grayBackground text-grayText">
          Front-End Web Developer
        </span>
        <div className="mt-3.5 mb-7.5 flex items-center justify-center">
          <ul className="flex items-center gap-5">
            <li className="social-media text-fbColor">
              <Link href={"#"} className="link-social">
                <FaFacebookF className="text-2xl" />
              </Link>
            </li>
            <li className="social-media text-twitter">
              <Link href={"#"} className="link-social">
                <FaTwitter className="text-2xl" />
              </Link>
            </li>
            <li className="social-media text-instr">
              <Link href={"#"} className="link-social">
                <FaInstagram className="text-2xl" />
              </Link>
            </li>
            <li className="social-media text-linkEnd">
              <Link href={"#"} className="link-social">
                <FaLinkedinIn className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-7.5 px-3.5 py-5 rounded-2xl bg-grayBackground">
          <div className="py-2.5 flex items-center gap-[10px]">
            <div className="device-media text-mobile">
              <FaMobileAlt className="text-2xl" />
            </div>
            <div className="text-start">
              <span className="text-xs leading-[18px]">Phone</span>
              <p className="text-sm text-white">+123 456 7890</p>
            </div>
          </div>
          <div className="py-2.5 flex items-center gap-[10px] border-t border-borderColor">
            <div className="device-media text-mobile">
              <FaMobileAlt className="text-2xl" />
            </div>
            <div className="text-start">
              <span className="text-xs leading-[18px]">Phone</span>
              <p className="text-sm text-white">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
