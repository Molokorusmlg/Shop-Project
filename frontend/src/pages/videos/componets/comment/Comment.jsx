import style from "./style.module.scss";
import PropTypes from "prop-types";
function Comment({ text, avatar, username }) {
  return (
    <div className={style.comment}>
      <div className={style.comment__avatar}>
        <img
          className={style.comment__avatar__img}
          src={avatar}
          alt="user avatar"
        />
      </div>
      <div className={style.comment__text}>
        <h2 className={style.comment__text__username}>{username}</h2>
        <p className={style.comment__text__paragraph}>{text}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
};

export default Comment;
