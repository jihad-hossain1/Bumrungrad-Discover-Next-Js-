import BookingModal from "./_comp/bookingModal";
import ClinicCenters from "./_comp/clinicalCenter";
import Disclaimer from "./_comp/disclaimer";
import HomeContact from "./_comp/homeContact";
import JourneyBetter from "./_comp/journeyBetter";
import Landing from "./_comp/landing";
import MediExpress from "./_comp/mediExpress";
import MiddleBar from "./_comp/middlebar";
import News from "./_comp/news";
import HomePackages from "./_comp/ourpackage";
import RightHealthcare from "./_comp/rightHealthcare";

export default function Home() {
  return (
    <main>
      <Landing />
      <Disclaimer />
      <JourneyBetter/>
      <MediExpress/>
      <BookingModal />
      <ClinicCenters />
      <RightHealthcare/>
      <HomePackages />
      <News />
      <HomeContact />
      <div className="fixed bottom-0 md:bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
    </main>
  );
}
