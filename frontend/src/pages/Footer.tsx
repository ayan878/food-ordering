import Logo from "../assets/logo.png"
function Footer() {
  return (
    <div className="bg-orange-500 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl to-white font-bold tracking-tight flex items-center"><img src={Logo} className="w-8"/>
          tastyTrials
        </span>
        <span className="text-white tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Services</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
