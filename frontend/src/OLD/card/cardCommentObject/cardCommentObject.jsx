import "./cardCommentObject.scss";
import ControlImg from "../../../assets/img/MenuVertical.svg";

function CardCommentObject({ avatar, userName, comment }) {
  return (
    <div className="comment">
      <div className="comment__user">
        <img className="comment__user__avatar" src={avatar} alt={userName} />
        <p className="comment__user__name">{userName}</p>
      </div>
      <div className="comment__text">
        <p className="comment__text__paragraph">{comment}</p>
      </div>
      <div className="comment__control">
        <img
          src={ControlImg}
          alt="menuButton"
          className="comment__contrl__img"
        />
      </div>
    </div>
  );
}

export default CardCommentObject;
