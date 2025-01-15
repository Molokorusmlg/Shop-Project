import { useState } from "react";
import style from "./style.module.scss";
import LikeSVG from "../../../../assets/img/Like.svg";
import LikeClickedSVG from "../../../../assets/img/LikeClicked.svg";
import cn from "classnames";

function LikeBlock() {
  const [isLikedLike, setIsLikedLike] = useState(false);
  const [isLikedDisLike, setIsLikedDisLike] = useState(false);

  const changeLikeImg = () => {
    if (isLikedDisLike) {
      setIsLikedDisLike((prev) => !prev);
      setIsLikedLike((prev) => !prev);
    } else {
      setIsLikedLike((prev) => !prev);
    }
  };

  const changeDisLikeImg = () => {
    if (isLikedLike) {
      setIsLikedDisLike((prev) => !prev);
      setIsLikedLike((prev) => !prev);
    } else {
      setIsLikedDisLike((prev) => !prev);
    }
  };

  return (
    <div className={style.info__likes}>
      <div className={style.info__likes__grade} onClick={changeLikeImg}>
        <img
          className={style.info__likes__img}
          src={isLikedLike ? LikeClickedSVG : LikeSVG}
          alt="like this video"
        />
        <p className={style.info__likes__couter}>192</p>
      </div>
      <div className={style.info__dislike} onClick={changeDisLikeImg}>
        <img
          className={cn(style.info__likes__img, {
            [style.reverse]: true,
          })}
          src={isLikedDisLike ? LikeClickedSVG : LikeSVG}
          alt="like this video"
        />
      </div>
    </div>
  );
}

export default LikeBlock;
