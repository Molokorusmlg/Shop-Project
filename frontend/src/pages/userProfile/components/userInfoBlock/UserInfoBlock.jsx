import style from "./style.module.scss";
import TestImg from "../../../../assets/img/telegram.png";
import PropTypes from "prop-types";

function UserInfoBlock({ name, surname, email, password }) {
  // name = "Иван";
  // surname = "Иванов";
  // email = "ivanov@mail.ru";
  // password = "123456";

  return (
    <div className={style.user__info}>
      <div className={style.user__info__tille__block}>
        <h1 className={style.user__info__title}>Ваш профиль</h1>
        <div className={style.user__info__title__line}>
          <span></span>
        </div>
      </div>

      <div className={style.user__info__avatar}>
        <img
          className={style.user__info__avatar__img}
          src={TestImg}
          alt="user avatar"
        />
        <form className={style.user__info__avatar__input__block}>
          <input
            type="text"
            className={style.user__info__avatar__input}
            value={name}
            name="name"
            placeholder="Имя"
          />
          <input
            name="surname"
            value={surname}
            type="text"
            className={style.user__info__avatar__input}
            placeholder="Фамилия"
          />
          <input
            name="email"
            value={email}
            type="email"
            className={style.user__info__avatar__input}
            placeholder="Почта"
          />
          <input
            type="text"
            className={style.user__info__avatar__input}
            name="link"
            placeholder="new avatar link photo"
          />
          <button className={style.user__info__avatar__button}>
            Загрузить
          </button>
        </form>
      </div>

      <form className={style.user__info__main}>
        <div>
          <label style={{ display: "none" }} htmlFor="username">
            Имя пользователя
          </label>
          <input
            style={{ display: "none" }}
            name="username"
            type="text"
            id="username"
            className={style.user__info__main__input}
            placeholder=""
            autoComplete="username"
          />
        </div>

        <label className={style.user__info__main__label} htmlFor="password">
          Пароль
        </label>
        <input
          name="password"
          type="password"
          id="password"
          value={password}
          className={style.user__info__main__input}
          placeholder="пароль"
          autoComplete="current-password"
        />

        <label className={style.user__info__main__label} htmlFor="newPassword">
          Новый пароль
        </label>
        <input
          name="newPassword"
          type="password"
          id="newPassword"
          value={password}
          className={style.user__info__main__input}
          placeholder="новый пароль"
          autoComplete="new-password"
        />
      </form>

      <div className={style.user__info__button}>
        <button className={style.user__info__button__save}>
          Сохранить изменеия
        </button>
      </div>
    </div>
  );
}

UserInfoBlock.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default UserInfoBlock;
