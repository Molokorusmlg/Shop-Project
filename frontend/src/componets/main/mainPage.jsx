import MainHeader from "./mainHeader/mainHeader.jsx";
import Catalog from "./catalog/catalog.jsx";
import FilterBlock from "./filters/filters.jsx";

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
