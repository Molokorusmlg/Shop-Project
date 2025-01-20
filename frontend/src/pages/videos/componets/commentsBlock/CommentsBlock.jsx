import style from "./style.module.scss";
import Comment from "../comment/Comment";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../../../constants";

function CommentsBlock({ id }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  const fetchComments = useCallback(async () => {
    setError(false);
    try {
      const response = await fetch(`${API_URL}${id}/comments`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      setError(true);
    }
  });

  const createComment = useCallback(async () => {
    const username = document.getElementById("username").value;
    const text = document.getElementById("comment").value;
    const avatar = document.getElementById("avatar").value;

    try {
      const response = await fetch(`${API_URL}${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          text: text,
          avatar: avatar,
          videoId: id,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      fetchComments();
    } catch (error) {
      console.error("Error:", error);
    }
  }, [id, fetchComments]);

  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className={style.comments}>
      <div className={style.comments__write}>
        <form className={style.comments__write__form}>
          <input
            id="username"
            type="text"
            placeholder="username"
            className={style.comments__write__form__input}
            required
          />
          <input
            type="text"
            id="avatar"
            placeholder="avatar"
            className={style.comments__write__form__input}
            required
          />
          <textarea
            id="comment"
            className={style.comments__write__form__textarea}
            required
          />
          <button type="button" onClick={createComment}>
            send
          </button>
        </form>
      </div>

      {error ? (
        <p>No comments</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            text={comment.text}
            username={comment.username}
            avatar={comment.avatar}
            id={comment.id}
            videoId={id}
          />
        ))
      )}
    </div>
  );
}

CommentsBlock.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CommentsBlock;
