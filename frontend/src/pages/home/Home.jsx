import Header from "../../componets/header/header";
import HomeBackground from "./components/homeBackground/homeBackground";
import arrowDown from "../../assets/img/arrowBackWhite.svg";
import style from "./style.module.scss";

function HomePage() {
  return (
    <main>
      <Header />
      <section className={style.section__title}>
        <HomeBackground />
        <div className={style.index__title}>
          <h1 className={style.index__title__text}>Екатеринбург</h1>
          <img
            className={style.index__title__img}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
