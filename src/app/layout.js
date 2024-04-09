import "../app/style/globals.css";
import SideBar from "./components/shared/ASide/SideBar";
import Menubar from "./components/shared/Menubar/Menubar";
import Navbar from "./components/shared/Navbar/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Generated by Symun",
};

export default function RootLayout({ children }) {
  return (
    <div className="pt-[50px] pb-20 w-full h-screen bg-cover bg-no-repeat">
      <Navbar />
      <div className="container_fluid">
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-1">
          <SideBar />
          </div>
          <main className="col-span-2">
             <Menubar />
            {children}
            </main>
        </div>
      </div>
    </div>
  );
}
