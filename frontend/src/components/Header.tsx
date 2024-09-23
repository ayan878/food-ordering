import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-4 ">
      <div className="container px-4 md:px-0 mx-auto  flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 flex items-center"
        >
          <img src={Logo} className="w-8" />
          tastyTrials
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
