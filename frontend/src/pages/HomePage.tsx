import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 mx-4 flex flex-col gap-5 text-center -mt-24 ">
        <h1 className="font-bold text-5xl tracking-tight text-orange-600">
          Tuck into takeway today
        </h1>
        <span className="text-xl">Food is just click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center tracking-tight gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Download the tastyTrials App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
