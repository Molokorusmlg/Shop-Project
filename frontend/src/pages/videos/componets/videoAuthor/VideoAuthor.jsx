import style from "./style.module.scss";
import PropTypes from "prop-types";
import UserIcon from "../../../../assets/img/User.svg";

function VideoAuthor({ avatar, username }) {
  return (
    <div className={style.video__info__author}>
      <div className={style.video__info__author__avatar}>
        <img
          className={style.video__info__author__avatar__img}
          src={avatar}
          alt="Автор"
        />
        <p className={style.video__info__author__avatar__name}>{username}</p>
      </div>
    </div>
  );
}

VideoAuthor.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default VideoAuthor;
