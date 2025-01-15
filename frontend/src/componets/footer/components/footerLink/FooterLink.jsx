import style from "./style.module.scss";
import PropTypes from "prop-types";

function FooterLink({ text, img }) {
  return (
    <div className={style.footer__links}>
      <img className={style.footer__links__img} src={img} alt="icon" />
      <div className={style.footer__links__text}>
        <p className={style.footer__links__text__paragraph}>{text}</p>
        <div className={style.footer__links__text__line}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

FooterLink.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default FooterLink;
