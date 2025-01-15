import style from "./style.module.scss";
import PropTypes from "prop-types";

function RadioButtonsCity({ selectedValue, setSelectedValue }) {
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={style.radio__input}>
      <h1 className={style.title}>Значимые места:</h1>
      <label className={style.label}>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="value-1"
          checked={selectedValue === "value-1"}
          onChange={handleChange}
        />
        <p className={style.text}>Площадь 1905 года</p>
      </label>
      <label className={style.label}>
        <input
          type="radio"
          id="value-2"
          name="value-radio"
          value="value-2"
          checked={selectedValue === "value-2"}
          onChange={handleChange}
        />
        <p className={style.text}>Екатеринбург Сити</p>
      </label>
      <label className={style.label}>
        <input
          type="radio"
          id="value-3"
          name="value-radio"
          value="value-3"
          checked={selectedValue === "value-3"}
          onChange={handleChange}
        />
        <p className={style.text}>ТРЦ Гринвич</p>
      </label>
      <label className={style.label}>
        <input
          type="radio"
          id="value-4"
          name="value-radio"
          value="value-4"
          checked={selectedValue === "value-4"}
          onChange={handleChange}
        />
        <p className={style.text}>ТРЦ Пассаж</p>
      </label>
      <label className={style.label}>
        <input
          type="radio"
          id="value-5"
          name="value-radio"
          value="value-5"
          checked={selectedValue === "value-5"}
          onChange={handleChange}
        />
        <p className={style.text}>Храм на крови</p>
      </label>
    </div>
  );
}

RadioButtonsCity.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
};

export default RadioButtonsCity;
