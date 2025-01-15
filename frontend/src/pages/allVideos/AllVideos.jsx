import SearchInput from "./components/searchInput/SearchInput";
import Header from "../../componets/header/header";
import style from "./style.module.scss";
import BlockWithAllVideos from "./components/blockWithAllVideos/BlockWithAllVideos";
import SettingsBlock from "./components/settingsBlock/SettingsBlock";
import Footer from "../../componets/footer/Footer";

function AllVideos() {
  return (
    <main>
      <Header />
      <section className={style.all__video}>
        <SearchInput />
        <BlockWithAllVideos />
        <SettingsBlock />
      </section>
      <Footer />
    </main>
  );
}

export default AllVideos;
