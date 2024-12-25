import { Link } from "react-router-dom";
import ReactImg from "../../../assets/react.svg";
import "./mainHeader.scss";
import MainHeaderLink from "./main__header_link/main__header_link.jsx";

function MainHeader() {
  return (
    <div className="main__header">
      <h1 className="main__header_title">Neon Style</h1>

      <nav className="main__header_nav">
        <MainHeaderLink text="Shop" />
        <MainHeaderLink text="Cart" />
        <MainHeaderLink text="Sale" />
      </nav>

      <div className="main__header_search">
        <input
          id="serch_input"
          type="text"
          className="main__header_search_input"
          placeholder="Search..."
        />
      </div>

      <div className="main__header_profile">
        <img src={ReactImg} alt="" className="main__header_profile_img" />
        <p className="main__header_profile_user">Username</p>
      </div>
    </div>
  );
}

export default MainHeader;
