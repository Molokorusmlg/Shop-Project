import style from "./style.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import TestImg from "../../../../assets/img/1905year.jpg";

function OtherVideoLink({ id, title, img, username }) {
  return (
    <Link to={`/videos/${id}`} className={style.minivideo}>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default OtherVideoLink;
