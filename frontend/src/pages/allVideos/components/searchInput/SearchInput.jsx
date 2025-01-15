import SearchIcon from "../../../../assets/img/Search.svg";
import style from "./style.module.scss";

function SearchInput() {
  return (
    <div className={style.all__video__search}>
      <div className={style.all__video__search__block}>
        <input
          className={style.all__video__search__block__input}
          type="search"
          placeholder="Поиск"
        />
        <div className={style.all__video__search__block__icon__block}>
          <img
            className={style.all__video__search__block__icon}
            src={SearchIcon}
            alt="search-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
