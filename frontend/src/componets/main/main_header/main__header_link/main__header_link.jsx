import { Link } from "react-router-dom";

function MainHeaderLink({ text }) {
  return (
    <div className="main__header_nav_link_block">
      <Link className="main__header_nav_link">{text}</Link>
      <div className="main__header_nav_link_line">
        <span></span>
      </div>
    </div>
  );
}

export default MainHeaderLink;
