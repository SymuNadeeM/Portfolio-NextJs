import SideBar from "../components/shared/ASide/SideBar";
import Menubar from "../components/shared/Menubar/Menubar";
import Navbar from "../components/shared/Navbar/Navbar";
import "../style/globals.css";


export const metadata = {
  title: "Md. Symun Majumdar",
  description: "Generated by Symun",
};

export default function RootLayout({ children }) {
  return (
    <div className="pt-[50px] pb-20">
      <Navbar />
      <div className="container_fluid pt-14">
        <div className="grid  xl:grid-cols-3 gap-7">
          <div className="xl:col-span-1">
            <SideBar />
          </div>
          <main className="xl:col-span-2">
            <Menubar />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
