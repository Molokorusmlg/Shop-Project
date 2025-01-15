import style from "./style.module.scss";
import VideoCard from "../videoCard/VideoCard";

function BlockWithAllVideos() {
  return (
    <div className={style.video__list}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default BlockWithAllVideos;
