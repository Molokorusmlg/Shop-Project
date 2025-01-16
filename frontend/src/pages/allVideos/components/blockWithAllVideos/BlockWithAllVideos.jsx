import style from "./style.module.scss";
import VideoCard from "../videoCard/VideoCard";

function BlockWithAllVideos() {
  return (
    <div className={style.video__list}>
      <VideoCard id={1} />
    </div>
  );
}

export default BlockWithAllVideos;
