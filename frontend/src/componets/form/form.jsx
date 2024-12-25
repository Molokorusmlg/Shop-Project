import "./form.scss";
import { useState } from "react";
import cn from "classnames";
import RegistartionForm from "./formRegistration/formRegistration";
import AuthenticatioForm from "./formAuthenticatio/formAuthenticatio";

const MyForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const authClass = isRegister ? "register" : "authenticatio";

  const signIn = () => {
    setIsRegister(false);
  };

  const signUp = () => {
    setIsRegister(true);
  };

  return (
    <div className="form__background">
      <div className="switch__buttons">
        <div
          className={cn("switch__buttons__block", {
            ["button_selected"]: !isRegister,
            ["button_selected-no"]: isRegister,
          })}
          onClick={signIn}
        >
          <p className="switch__buttons__button">Вход</p>

          <div
            className={cn("switch__underline", {
              ["form__selected-underline"]: !isRegister,
              ["form__selected-no"]: isRegister,
            })}
          >
            <span></span>
          </div>
        </div>

        <div
          className={cn("switch__buttons__block", {
            ["button_selected-no"]: !isRegister,
            ["button_selected"]: isRegister,
          })}
          onClick={signUp}
        >
          <p className="switch__buttons__button">Регистрация</p>
          <div
            className={cn("switch__underline", {
              ["form__selected-underline"]: isRegister,
              ["form__selected-no"]: !isRegister,
            })}
          >
            <span></span>
          </div>
        </div>
      </div>
      {authClass == "register" ? (
        <>
          <RegistartionForm />
        </>
      ) : (
        <>
          <AuthenticatioForm />
        </>
      )}
    </div>
  );
};

export default MyForm;
