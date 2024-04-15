import Image from "next/image";
import logo from "../../../assets/wingLogo.png";


const Navbar = () => {
  return (
    <nav className="container_fluid">
      <div className="px-[15px]">
        {/* large screen */}
        <div className="p-5 flex items-center justify-between">
          {/* logo */}
          <div className="w-[200px] h-[55px]">
            <Image
              src={logo}
              alt="logo"
              className="w-full h-full  object-fill"
            />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
