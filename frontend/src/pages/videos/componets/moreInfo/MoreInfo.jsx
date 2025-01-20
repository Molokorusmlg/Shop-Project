import style from "./style.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

function MoreInfo({ title, description, img1, img2, img3 }) {
  return (
    <div className={style.info__more}>
      <div className={style.info__more__title}>
        <h1>{title}</h1>
      </div>
      <div className={style.info__more__block}>
        <div className={style.info__more__text}>
          <p>{description}</p>
        </div>
        <div className={style.info__more__imges}>
          <img
            className={style.info__more__imges__img}
            src={img1}
            alt="img context"
          />
          <img
            className={style.info__more__imges__img}
            src={img2}
            alt="img context"
          />
          <img
            className={cn(style.info__more__imges__img, {
              [style.img__open]: false,
            })}
            src={img3}
            alt="img context"
          />
        </div>
      </div>
    </div>
  );
}

MoreInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
};

export default MoreInfo;
