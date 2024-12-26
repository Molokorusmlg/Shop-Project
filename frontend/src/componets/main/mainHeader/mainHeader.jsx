import ReactImg from "../../../assets/react.svg";
import "./mainHeader.scss";
import MainHeaderLink from "../mainHeaderLink/mainHeaderLink.jsx";

function MainHeader() {
  return (
    <div className="main__header">
      <h1 className="main__header_title">Neon Style</h1>

      <nav className="main__header_nav">
        <MainHeaderLink text="Videos" selected={true} />
        <MainHeaderLink text="Likes" selected={false} />
        <MainHeaderLink text="Most viewed" selected={false} />
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
