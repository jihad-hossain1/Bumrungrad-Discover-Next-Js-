import BookingModal from "./_comp/bookingModal";
import Disclaimer from "./_comp/Disclaimer1";
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
