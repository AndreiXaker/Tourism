import Welcome from "./components/welcome";
import TravelSearch from "./components/travelForm/travelSearch";
import Image from "next/image";
import Countries from "./components/countries";
import CallbackPhone from "./components/callback";
import Footer from "./components/footer";
import TourvisorWidget from "./components/widgets/tourvision";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen relative">
      <Welcome /> {/* Фон */}
      <TravelSearch />
      <div className="relative flex items-center mt-28">
        <Image
          src="/tickets.svg"
          alt="Tickets"
          width={360}
          height={268}
          className="absolute left-0 rounded-lg "
        />
        <Image
          src="/123.svg"
          alt="Background"
          objectFit="cover"
          className="rounded-lg"
          width={1620}
          height={268}
        />
      </div>
          <div className="w-full text-left pl-56 mt-32">
            <Image
                src="/text.svg"
                alt="loading..."
                width={680}
                height={72}
                className= 'mt-32 '
                />
          </div>
      <Countries />
      <CallbackPhone />
      <Footer />
      

    </div>
  );
}
