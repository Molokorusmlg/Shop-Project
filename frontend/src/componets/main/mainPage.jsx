import MainHeader from "./main_header/mainHeader";
import Catalog from "./catalog/catalog.jsx";
import FilterBlock from "./catalog/filters/filters.jsx";

function MainPage() {
  return (
    <div className="main">
      <MainHeader />
      <Catalog />
      <FilterBlock />
    </div>
  );
}

export default MainPage;
