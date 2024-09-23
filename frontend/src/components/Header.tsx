import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 flex"
        >
          <img src={Logo} className="w-8 h-10" />
          tastyTrials
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        {/* 
        <Button className="bg-orange-500 font-bold">Log In</Button> */}
      </div>
    </div>
  );
};
export default Header;
