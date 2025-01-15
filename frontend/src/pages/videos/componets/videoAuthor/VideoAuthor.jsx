import style from "./style.module.scss";
import UserIcon from "../../../../assets/img/telegram.png";

function VideoAuthor() {
  return (
    <div className={style.video__info__author}>
      <div className={style.video__info__author__avatar}>
        <img
          className={style.video__info__author__avatar__img}
          src={UserIcon}
          alt="Автор"
        />
        <p className={style.video__info__author__avatar__name}>Vernam</p>
      </div>
    </div>
  );
}

export default VideoAuthor;
