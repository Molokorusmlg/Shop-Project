import Header from "../../componets/header/header";
import HomeBackground from "./components/homeBackground/homeBackground";
import CityTitle from "./components/CityTitle/CityTitle";
import InfoAboutCity from "./components/infoAboutCity/InfoAboutCity";
import CityMap from "./components/cityMap/CityMap";
import Footer from "../../componets/footer/Footer";
import style from "./style.module.scss";

function HomePage() {
  return (
    <main id="top">
      <Header />
      <section className={style.section__title}>
        <HomeBackground />
        <CityTitle />
      </section>
      <section id="infoSection" className={style.section__info}>
        <InfoAboutCity />
      </section>
      <section className={style.section__map}>
        <CityMap />
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;
