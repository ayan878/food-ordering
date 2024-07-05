import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNav";
import MainNav from "./MainNav";
import logo from "@/assets/logo.png"

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold  tracking-tight text-orange-500 flex items-center"
        ><img src={logo} alt="" className="w-8 md:w-14"/>
          tastyTrials
        </Link>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
