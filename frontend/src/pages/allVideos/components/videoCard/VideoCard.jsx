import style from "./style.module.scss";
import Test_Img from "../../../../assets/img/1905year.jpg";
import Test_User from "../../../../assets/img/telegram.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function VideoCard({ id }) {
  return (
    <Link to={`/videos/${id}`} className={style.card}>
      <div className={style.card__img}>
        <img
          className={style.card__img}
          src={
            "https://i.ytimg.com/vi/NDgTSUSu8-4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1ybAbBKZetsXEJBakt3JonTEKCg"
          }
          alt="video_prev"
        />
      </div>

      <div className={style.card__info}>
        <h1 className={style.card__info__title}>
          KOCMOC UNLEASHED // GRAND FINALE (official full level)
        </h1>
        <div className={style.card__info__profile}>
          <img
            src={Test_User}
            alt="user avatar"
            className={style.card__info__avatar}
          />
          <h1 className={style.card__info__text}>Vernam</h1>
        </div>
      </div>
    </Link>
  );
}

VideoCard.propTypes = {
  id: PropTypes.number,
};

export default VideoCard;
