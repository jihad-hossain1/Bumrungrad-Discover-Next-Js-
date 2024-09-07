import BookingModal from "./_comp/bookingModal";
import ClinicCenters from "./_comp/clinicalCenter";
import Disclaimer from "./_comp/disclaimer";
import HomeContact from "./_comp/homeContact";
import Landing from "./_comp/landing";
import MiddleBar from "./_comp/middlebar";
import News from "./_comp/news";
import HomePackages from "./_comp/ourpackage";

export default function Home() {
  return (
    <main>
      <Landing />
      <Disclaimer />
      <BookingModal />
      <HomePackages />
      <ClinicCenters />
      <News />
      <HomeContact />
      <div className="fixed bottom-0 md:bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
    </main>
  );
}
