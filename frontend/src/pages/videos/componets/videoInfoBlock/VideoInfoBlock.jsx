import style from "./style.module.scss";
import VideoTitle from "../videoTitle/VideotTtle";
import VideoAuthor from "../videoAuthor/VideoAuthor";
import LikeBlock from "../likesBlock/LikeBlock";
import MoreInfo from "../moreInfo/MoreInfo";
import ButtonImg from "../../../../assets/img/arrowBackWhite.svg";
import { useState } from "react";
import cn from "classnames";

function VideoInfoBlock() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const showDescription = () => {
    setIsDescriptionOpen((prev) => !prev);
  };

  const descriptionClass = cn(style.video__info, {
    [style.video__info__open]: isDescriptionOpen,
  });

  return (
    <div className={descriptionClass}>
      <VideoTitle />
      <div className={style.video__info__additional}>
        <VideoAuthor />
        <LikeBlock />
      </div>
      <MoreInfo />
      <div className={style.info__more__button__block}>
        <div className={style.info__more__button} onClick={showDescription}>
          <img
            className={cn(style.info__more__button__img, {
              [style.info__more__button__img__reverse]: isDescriptionOpen,
            })}
            src={ButtonImg}
            alt="button close/open img"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoInfoBlock;
