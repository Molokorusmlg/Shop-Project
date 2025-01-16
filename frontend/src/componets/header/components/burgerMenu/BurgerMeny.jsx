import style from "./style.module.scss";
import HeaderLink from "../headerLink/headerLink";
import PropTypes from "prop-types";
import cn from "classnames";

function BurgerMeny({ isBurgerOpen }) {
  return (
    <div
      className={cn(style.header__burger__menu__shadow, {
        [style.shadow__close]: isBurgerOpen,
      })}
    >
      <div
        className={cn(style.header__burger__menu, {
          [style.burger__close]: isBurgerOpen,
        })}
      >
        <HeaderLink namePath="/main" text="Главная" />
        <HeaderLink namePath="/allvideo" text="Достопремечатеьности" />
      </div>
    </div>
  );
}

BurgerMeny.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,
};

export default BurgerMeny;
