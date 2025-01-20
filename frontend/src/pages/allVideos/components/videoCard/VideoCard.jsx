import style from "./style.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function VideoCard({ id, img, title, username, avatar }) {
  return (
    <Link to={`/videos/${id}`} className={style.card}>
      <div className={style.card__img}>
        <img className={style.card__img} src={img} alt="video_prev" />
      </div>

      <div className={style.card__info}>
        <h1 className={style.card__info__title}>{title}</h1>
        <div className={style.card__info__profile}>
          <img
            src={avatar}
            alt="user avatar"
            className={style.card__info__avatar}
          />
          <h1 className={style.card__info__text}>{username}</h1>
        </div>
      </div>
    </Link>
  );
}

VideoCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default VideoCard;
