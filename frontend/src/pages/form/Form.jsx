import style from "./style.module.scss";
import { useState } from "react";
import cn from "classnames";
import RegistartionForm from "./formRegistration/formRegistration";
import AuthenticatioForm from "./formAuthenticatio/formAuthenticatio";

const MyForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const authClass = isRegister ? "register" : "authenticatio";
  const isAuthClassRegister = authClass === "register";

  const signIn = () => setIsRegister(false);

  const signUp = () => setIsRegister(true);

  return (
    <div className={style.form__background}>
      <div className={style.switch__buttons}>
        <div
          className={cn(style.switch__buttons__block, {
            [style.button_selected]: !isRegister,
            [style.button_selected__no]: isRegister,
          })}
          onClick={signIn}
        >
          <p className={style.switch__buttons__button}>Вход</p>

          <div
            className={cn(style.switch__underline, {
              [style.form__selected__underline]: !isRegister,
              [style.form__selected__no]: isRegister,
            })}
          >
            <span></span>
          </div>
        </div>

        <div
          className={cn(style.switch__buttons__block, {
            [style.button_selected__no]: !isRegister,
            [style.button_selected]: isRegister,
          })}
          onClick={signUp}
        >
          <p className={style.switch__buttons__button}>Регистрация</p>
          <div
            className={cn(style.switch__underline, {
              [style.form__selected__underline]: isRegister,
              [style.form__selected__no]: !isRegister,
            })}
          >
            <span></span>
          </div>
        </div>
      </div>
      {isAuthClassRegister ? <RegistartionForm /> : <AuthenticatioForm />}
    </div>
  );
};

export default MyForm;
