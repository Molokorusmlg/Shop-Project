import style from "./style.module.scss";
import Test_Img from "../../../../assets/img/1905year.jpg";
import Test_User from "../../../../assets/img/telegram.png";
import { Link } from "react-router-dom";

function VideoCard() {
  return (
    <Link to={"/videos"} className={style.card}>
      <div className={style.card__img}>
        <img className={style.card__img} src={Test_Img} alt="video_prev" />
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

export default VideoCard;
