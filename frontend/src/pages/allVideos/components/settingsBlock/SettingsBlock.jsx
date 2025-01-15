import style from "./style.module.scss";
import CloseImg from "../.././../../assets/img/arrowBackWhite.svg";
import cn from "classnames";
import { useState } from "react";

function SettingsBlock() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const changeOpenState = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(style.settings, {
        [style.settings__hide]: !isSettingsOpen,
      })}
    >
      <div className={style.settings__title}>
        <h1 className={style.settings__title__text}>Параметры</h1>
        <div className={style.settings__title__line}>
          <span></span>
        </div>
      </div>

      <div className={style.settings__type__block}>
        <h3 className={style.settings__type__title}>Тип статьи</h3>
        <div className={style.settings__type__line}>
          <span></span>
        </div>

        <label className={style.container}>
          <input type="checkbox" />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Здания</p>
        </label>

        <label className={style.container}>
          <input type="checkbox" />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Парки</p>
        </label>

        <label className={style.container}>
          <input type="checkbox" />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Жизнь</p>
        </label>

        <label className={style.container}>
          <input type="checkbox" />
          <div className={style.checkmark}></div>
          <p className={style.settings__label}>Храмы</p>
        </label>
      </div>

      <div className={style.settings__sort__block}>
        <h3 className={style.settings__sort__title}>Сортировка по</h3>
        <div className={style.settings__sort__line}>
          <span></span>
        </div>

        <div className={style.settings__sort__radio__button__container}>
          <div className={style.settings__sort__radio__button}>
            <input
              type="radio"
              className={style.settings__sort__radio__button__input}
              id="radio1"
              name="radio-group"
            />
            <label
              className={style.settings__sort__radio__button__label}
              htmlFor="radio1"
            >
              <span className={style.settings__sort__radio__button__custom} />
              Лайкам
            </label>
          </div>
          <div className={style.settings__sort__radio__button}>
            <input
              type="radio"
              className={style.settings__sort__radio__button__input}
              id="radio2"
              name="radio-group"
            />
            <label
              className={style.settings__sort__radio__button__label}
              htmlFor="radio2"
            >
              <span className={style.settings__sort__radio__button__custom} />
              Просмотры
            </label>
          </div>
          <div className={style.settings__sort__radio__button}>
            <input
              type="radio"
              className={style.settings__sort__radio__button__input}
              id="radio3"
              name="radio-group"
            />
            <label
              className={style.settings__sort__radio__button__label}
              htmlFor="radio3"
            >
              <span className={style.settings__sort__radio__button__custom} />
              Дата загрузки
            </label>
          </div>
        </div>
      </div>

      <div className={style.settings__button}>
        <p className={style.settings__button__text}>Применить</p>
      </div>

      <p className={style.settings__disclaimer}>
        2025 Дима Якорнов. Все права защищены. Текст, изображения, графика и
        другие материалы, представленные на этом сайте, являются
        интеллектуальной собственностью Димы Якорнова и защищены
        законодательством об авторских правах.
      </p>

      <div className={style.settings__close} onClick={changeOpenState}>
        <img
          className={cn(style.settings__close__button, {
            [style.settings__close__button__reverse]: !isSettingsOpen,
          })}
          src={CloseImg}
          alt="close button"
        />
      </div>
    </div>
  );
}

export default SettingsBlock;
