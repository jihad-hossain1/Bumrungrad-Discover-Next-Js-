import BookingModal from "./_comp/bookingModal";
import Disclaimer from "./_comp/disclaimer";
import Landing from "./_comp/landing";

export default function Home() {
    return (
        <main>
            <Landing />
            <Disclaimer />
            <BookingModal />
        </main>
    );
}
