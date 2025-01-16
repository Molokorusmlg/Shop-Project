import style from "./style.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import TestImg from "../../../../assets/img/1905year.jpg";

function OtherVideoLink({ id, title, img, username }) {
  return (
    <Link to={"/videos"} className={style.minivideo}>
      <div className={style.minivideo__img}>
        <img
          className={style.minivideo__img__photo}
          src={img}
          alt="video-preview"
        />
      </div>

      <div className={style.minivideo__info}>
        <p className={style.minivideo__info__title}>{title}</p>
        <p className={style.minivideo__info__username}>{username}</p>
      </div>
    </Link>
  );
}

OtherVideoLink.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  username: PropTypes.string,
};

export default OtherVideoLink;
