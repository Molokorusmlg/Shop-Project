import SearchIcon from "../../../../assets/img/Search.svg";
import style from "./style.module.scss";
import PropTypes from "prop-types";

function SearchInput({ setSearchRequest }) {
  // const handleSearch = (e) => {
  //   setSearchRequest(e.target.value);
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchRequest(e.target.value);
    }
  };

  return (
    <div className={style.all__video__search}>
      <div className={style.all__video__search__block}>
        <input
          className={style.all__video__search__block__input}
          type="search"
          placeholder="Поиск"
          id="search"
          onKeyPress={handleKeyPress}
        />
        <div className={style.all__video__search__block__icon__block}>
          <img
            className={style.all__video__search__block__icon}
            src={SearchIcon}
            alt="search-icon"
            onClick={() =>
              setSearchRequest(document.getElementById("search").value)
            }
          />
        </div>
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  setSearchRequest: PropTypes.func.isRequired,
};

export default SearchInput;
