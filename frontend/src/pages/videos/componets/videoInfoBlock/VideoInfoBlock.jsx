import style from "./style.module.scss";
import VideoTitle from "../videoTitle/VideotTtle";
import VideoAuthor from "../videoAuthor/VideoAuthor";
import LikeBlock from "../likesBlock/LikeBlock";
import MoreInfo from "../moreInfo/MoreInfo";
import ButtonImg from "../../../../assets/img/arrowBackWhite.svg";
import { useState, useCallback } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

function VideoInfoBlock({
  id,
  title,
  avatar,
  username,
  likes,
  description,
  img1,
  img2,
  img3,
}) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const showDescription = useCallback(() => {
    setIsDescriptionOpen((prev) => !prev);
  });

  return (
    <div
      className={cn(style.video__info, {
        [style.video__info__open]: isDescriptionOpen,
      })}
    >
      <VideoTitle title={title || ""} />
      <div className={style.video__info__additional}>
        <VideoAuthor avatar={avatar || ""} username={username || ""} />
        <LikeBlock likes={likes || 0} id={id} />
      </div>
      <MoreInfo
        title={title}
        description={description}
        img1={img1}
        img2={img2}
        img3={img3}
      />
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

VideoInfoBlock.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
};

export default VideoInfoBlock;
