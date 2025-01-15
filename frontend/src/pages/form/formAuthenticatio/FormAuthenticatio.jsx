import { useForm } from "react-hook-form";
import style from "../style.module.scss";

function AuthenticatioForm() {
  const resetData = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getUser(data);
  };

  const getUser = (data) => {
    console.log(123, data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form__inputs}>
        <div className={style.form__block__input}>
          {errors.email && (
            <label
              htmlFor="emailsign"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.email.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Почта"
            id="emailsign"
            {...register("emailsign", {
              required: "*Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "*Invalid email address",
              },
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.password && (
            <label
              htmlFor="passwordsign"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.password.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Пароль"
            id="passwordsign"
            type="password"
            {...register("passwordsign", {
              required: "*Password is required",
              minLength: {
                value: 8,
                message: "*Password must be at least 8 characters",
              },
            })}
          />
        </div>
      </div>
      <button className={style.form__button} type="submit">
        Sumbit
      </button>
      <button onClick={resetData} className={style.form__button} type="reset">
        Clear
      </button>
    </form>
  );
}
export default AuthenticatioForm;
