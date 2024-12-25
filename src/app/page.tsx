import Header from "./components/header";
import Welcome from "./components/welcome";
import Menu from "./components/menu";
import TravelSearch from "./components/travelSearch";
import Spo from "./components/spo";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Menu />
      <TravelSearch/>
      <Spo/>
      <Footer/>
    </div>
  );
}
