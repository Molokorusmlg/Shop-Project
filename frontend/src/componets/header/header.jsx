import ReactImg from "../../assets/react.svg";
import "./header.scss";
import HeaderLink from "../headerLink/headerLink.jsx";

function Header() {
  return (
    <div className="main__header">
      <h2 className="main__header__title">Город бесов</h2>

      <nav className="main__header__nav">
        <HeaderLink namePath={"/main"} text="Главная" />
        <HeaderLink namePath={"/likes"} text="Достопремечательности" />
      </nav>

      <div className="main__header__profile">
        <img src={ReactImg} alt="" className="main__header__profile__img" />
        <p className="main__header__profile__user">Username</p>
      </div>
    </div>
  );
}

export default Header;
