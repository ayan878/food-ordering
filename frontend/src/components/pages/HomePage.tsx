import landingImage from "@/assets/landing.png"
import appDownloadImage from "@/assets/appDownload.png";

const Homepage = () => {
    return (
      <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md flex flex-col gap-5 py-8 text-center -mt-16">
          <h1 className="text-5xl tracking-tight text-orange-600 font-bold text-center ">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* <input type="search" className="rounded-full " placeholder="Search..." /> */}
          <img src={landingImage} alt="landingImage" />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold tracking-tighter text-3xl ">
              Order take away even faster!
            </span>
            < span>
              Download the tastyTrials for faster ordering and personalinalised recommendations
            </span>
            <img src={appDownloadImage}/>
          </div>
        </div>
      </div>
    );
};
export default Homepage;