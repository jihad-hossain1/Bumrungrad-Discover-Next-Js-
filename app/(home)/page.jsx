import BookingModal from "./_comp/bookingModal";
import Disclaimer from "./_comp/disclaimer";
import Landing from "./_comp/landing";
import MiddleBar from "./_comp/middlebar";

export default function Home() {
  return (
    <main>
      <Landing />
      <Disclaimer />
      <BookingModal />
      <div className="fixed bottom-0 md:bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
    </main>
  );
}
