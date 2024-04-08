
const Navbar = () => {
  return (
    <nav className='container_fluid'>
        <div className='px-[15px]'>
          {/* large screen */}
          <div className='p-5 flex items-center justify-between'>
              {/* logo */}
              <div className=" text-white">
                SYMUN
              </div>
              <div className=" text-white">
                 light
              </div>
          </div>
          {/* small screen */}

        </div>
    </nav>
  );
};

export default Navbar;