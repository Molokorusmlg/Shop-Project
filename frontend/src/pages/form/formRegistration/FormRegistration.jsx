import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cn from "classnames";
import style from "../style.module.scss";

function RegistartionForm() {
  const navigate = useNavigate();

  const postUser = async (data) => {
    const response = await fetch(
      "https://6750125869dc1669ec198aa9.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ ...data }),
      }
    );
    if (!response.ok) return;

    navigate("/main");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postUser(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form__inputs}>
        <div className={style.form__block__input}>
          {errors.firstName && (
            <label
              htmlFor="firstName"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.firstName.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Имя"
            id="firstName"
            {...register("firstName", {
              required: "*First name is required",
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.lastName && (
            <label
              htmlFor="lastName"
              className={`${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.lastName.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Фамилия"
            id="lastName"
            {...register("lastName", {
              required: "*Last name is required",
            })}
          />
        </div>
        <div className={style.form__block__input}>
          {errors.email && (
            <label
              htmlFor="email"
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
            id="email"
            {...register("email", {
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
              htmlFor="password"
              className={` ${style.form__error} ${
                errors.firstName ? style.visible : ""
              }`}
            >
              {errors.password.message}
            </label>
          )}
          <input
            className={style.form__input}
            placeholder="Пароль"
            id="password"
            type="password"
            {...register("password", {
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
      <button onClick={reset} className={style.form__button} type="reset">
        Clear
      </button>
    </form>
  );
}
export default RegistartionForm;
