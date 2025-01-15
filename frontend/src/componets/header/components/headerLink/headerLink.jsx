import PropTypes from "prop-types";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

function HeaderLink({ namePath, text }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isCorrectPathhName = namePath === window.location.pathname;
    setSelected(isCorrectPathhName);
  }, [namePath]);

  const linkClass = cn(style.main__header__nav__link__line, {
    [style.link__selected]: selected,
  });

  return (
    <div className={style.main__header__nav__link__block}>
      <Link to={namePath} className={style.main__header__nav__link}>
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
