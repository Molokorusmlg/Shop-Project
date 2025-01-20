import style from "./style.module.scss";
import PropTypes from "prop-types";
import DeleteIcon from "../../../../assets/img/Delete.svg";
import { useCallback } from "react";
import { API_URL } from "../../../../constants";

function Comment({ text, avatar, username, id, videoId }) {
  const DeleteComment = useCallback(() => {
    fetch(`${API_URL}/${videoId}/comments/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

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
      <div className={style.comment__delete}>
        <img
          className={style.comment__delete__icon}
          src={DeleteIcon}
          alt="delete buton"
          onClick={DeleteComment}
        />
      </div>
    </div>
  );
}

Comment.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.string,
  videoId: PropTypes.string,
};

export default Comment;
