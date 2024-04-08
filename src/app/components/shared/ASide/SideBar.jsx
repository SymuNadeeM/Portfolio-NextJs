import Link from 'next/link';

const SideBar = () => {
  return (
    <>
      <div className="bg-[#fff] dark:bg-blackbg p-4 rounded-xl shadow flex flex-col items-center justify-center ">
        <div className=" mt-4 flex items-center justify-center">
          {/* <img
            src={proimg}
            alt=""
            className=" w-[257px] h-[257px] rounded-xl shadow-lg"
          /> */}
        </div>

        <div className="mt-[40px]  text-center">
          <div className=" space-y-3">
            <h2 className=" text-2xl font-bold font-jose text-[#181D31] dark:text-[#ffff]">
              Md. Symun Majumdar
            </h2>
            <p className=" text-text1 dark:text-dtext1  text-sm font-normal  font-Robbi">
              Front-End Developer
            </p>
            {/* social media */}
            <div className=" flex items-center justify-center gap-2 ">
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 flex items-center justify-center rounded-md text-[#538dd7] hover:dark:bg-btnbg hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link href={"#"}>
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] flex items-center justify-center rounded-md text-[#00acee] dark:bg-black3 hover:dark:bg-btnbg hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link href={"#"}>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#C13584] hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link href={"#"}>
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </div>
              <div className="w-[40px] h-[40px] bg-[#EEEEEE] dark:bg-black3 hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#0072b1] hover:bg-btnbg duration-200 hover:text-[#fff]">
                <Link href={"#"}>
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* details */}
          <div className="my-[25px] p-4  flex flex-col  items-start bg-[#EEEEEE]  rounded-lg dark:bg-black3 ">
            <div className="my-3 flex items-center justify-center gap-2">
              <div className="w-[40px] h-[40px] bg-[#fff] dark:bg-black flex items-center justify-center rounded-md text-[#538dd7] hover:bg-btnbg hover:dark:bg-btnbg duration-200 hover:text-[#fff] shadow">
                <i class="fa-solid fa-mobile-screen"></i>
              </div>
              <div className=" flex flex-col items-start">
                <p className=" text-text1 dark:text-dtext1 text-xs font-Robbi">
                  Phone
                </p>
                <p className=" text-text2 dark:text-[#fff] font-Robbi text-sm hover:text-btnbg duration-200">
                  +88 0153 751 5034
                </p>
              </div>
            </div>

            <div className="my-3 flex items-center justify-center gap-2">
              <div className="w-[40px] h-[40px] bg-[#fff] dark:bg-black hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#A6D1E6] hover:bg-btnbg duration-200 hover:text-[#fff] shadow">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className=" flex flex-col items-start">
                <p className=" text-text1 dark:text-dtext1 text-xs font-Robbi">
                  Location
                </p>
                <p className=" text-text2 dark:text-[#fff] font-Robbi text-sm hover:text-btnbg duration-200">
                  Hatirpool Dhaka
                </p>
              </div>
            </div>
            <div className="my-3 flex items-center justify-center gap-2">
              <div className="w-[40px] h-[40px] dark:bg-black hover:dark:bg-btnbg bg-[#fff] flex items-center justify-center rounded-md text-[#FA2FB5] hover:bg-btnbg duration-200 hover:text-[#fff] shadow-md">
                <i class="fa-solid fa-envelope-open-text"></i>
              </div>
              <div className=" flex flex-col items-start">
                <p className=" text-text1 dark:text-dtext1 text-xs font-Robbi">
                  Email
                </p>
                <p className=" text-text2 dark:text-[#fff] font-Robbi text-sm hover:text-btnbg duration-200">
                  msymunnadeem@gmail.com
                </p>
              </div>
            </div>
            <div className="my-3 flex items-center justify-center gap-2">
              <div className="w-[40px] h-[40px] bg-[#fff] dark:bg-black hover:dark:bg-btnbg flex items-center justify-center rounded-md text-[#810CA8] hover:bg-btnbg duration-200 hover:text-[#fff] shadow-md">
                <i class="fa-regular fa-calendar-days"></i>
              </div>
              <div className=" flex flex-col items-start">
                <p className=" text-text1 dark:text-dtext1 text-xs font-Robbi">
                  Birthaday
                </p>
                <p className=" text-text2 dark:text-[#fff] font-Robbi text-sm ">
                  June 12, 1998
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center  justify-center text-center">
            <div className="w-1/2 bg-btnbg dark:bg-green2  hover:bg-green2 dark:hover:bg-btnbg duration-300 px-4 py-2 text-[#fff] font-jose rounded-full">
               <Link href={"#"} >Download CV</Link>
                
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;