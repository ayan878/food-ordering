import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold text-white tracking-tight flex items-center">
          <img src={logo} alt="" className="w-8 md:w-14" />
          tastyTrials.com
        </span>
        <span className="text-white tracking-tight flex gap-4 font-bold">
          <span> Privacy Policy</span>
          <span> Terms of Services</span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
