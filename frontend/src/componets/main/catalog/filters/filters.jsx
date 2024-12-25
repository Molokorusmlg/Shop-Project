import "./filters.scss";
import arrow from "../../../../assets/img/arrowBackWhite.svg";
import { useState } from "react";

function FilterBlock() {
  const [isFilterClose, setIsFilterClose] = useState("filter__close");
  const [isArrowClose, setIsArrowClose] = useState("arrow__close");

  const FilterMeny = () => {
    if (isFilterClose == "filter__close") {
      setIsFilterClose("");
      setIsArrowClose("");
    } else {
      setIsFilterClose("filter__close");
      setIsArrowClose("arrow__close");
    }
  };

  return (
    <div className={"filter " + isFilterClose}>
      <div className="filter__arrow__block">
        <img
          onClick={FilterMeny}
          className={"filter__arrow__img " + isArrowClose}
          src={arrow}
          alt="close arrow filter block"
        />
      </div>
      <div className="filter__logo">
        <h3 className="filter__logo_text">Neon Shop</h3>
      </div>

      <div className="filter__search">
        <label htmlFor="" className="filter__search__label">
          Search
        </label>
        <input
          type="text"
          className="filter__search__input"
          placeholder="Search..."
        />
      </div>

      <div className="filter__buttons__block">
        <button className="filter__buttons__button" type="button">
          Одежда
        </button>
        <button className="filter__buttons__button" type="button">
          Техника
        </button>
        <button className="filter__buttons__button" type="button">
          Продукты
        </button>
        <button className="filter__buttons__button" type="button">
          Косметика
        </button>
      </div>

      <div className="filter__faq">
        <button type="button" className="filter__faq__button">
          FAQ
        </button>
      </div>
    </div>
  );
}

export default FilterBlock;
