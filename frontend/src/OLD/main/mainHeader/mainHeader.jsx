import ReactImg from "../../../assets/react.svg";
import "./mainHeader.scss";
import MainHeaderLink from "../mainHeaderLink/mainHeaderLink.jsx";

function MainHeader() {
  return (
    <div className="main__header">
      <h1 className="main__header_title">Neon Style</h1>

      <nav className="main__header_nav">
        <MainHeaderLink namePath={"/main"} text="Videos" />
        <MainHeaderLink namePath={"/likes"} text="Likes" />
        <MainHeaderLink namePath={"/views"} text="Most viewed" />
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
