import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import "./headerLink.scss";
import { useEffect, useState } from "react";

function HeaderLink({ namePath, text }) {
  const [selected, setSelected] = useState(false);
  const isCorrectPathhName = namePath === window.location.pathname;

  useEffect(() => {
    if (!isCorrectPathhName) return;

    setSelected(true);
  }, [namePath]);

  const linkClass = cn("main__header__nav__link__line", {
    link__selected: selected,
  });

  return (
    <div className="main__header__nav__link__block">
      <Link to={namePath} className="main__header__nav__link">
        {text}
      </Link>
      <div className={linkClass}>
        <span></span>
      </div>
    </div>
  );
}

HeaderLink.propTypes = {
  namePath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderLink;
