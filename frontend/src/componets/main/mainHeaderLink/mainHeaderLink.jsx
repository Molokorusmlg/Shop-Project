import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import "./mainHeaderLink.scss";

function MainHeaderLink({ text, selected }) {
  const linkClass = cn("main__header_nav_link_line", {
    link__selected: selected,
  });

  return (
    <div className="main__header_nav_link_block">
      <Link className="main__header_nav_link">{text}</Link>
      <div className={linkClass}>
        <span></span>
      </div>
    </div>
  );
}

MainHeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MainHeaderLink;
