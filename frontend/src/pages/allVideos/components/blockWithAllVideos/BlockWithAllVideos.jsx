import style from "./style.module.scss";
import VideoCard from "../videoCard/VideoCard";
import PropTypes from "prop-types";
import MiniLoader from "../../../../componets/footer/components/miniLoader/MiniLoader";

function BlockWithAllVideos({ videoList, isLoading }) {
  return (
    <div className={style.video__list}>
      {videoList.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id || 0}
          img={video.img1 || ""}
          title={video.title || ""}
          username={video.username || ""}
          avatar={video.avatar || ""}
        />
      ))}
      <div className={style.loader__container}>
        <MiniLoader isLoading={isLoading} />
      </div>
    </div>
  );
}

BlockWithAllVideos.propTypes = {
  videoList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BlockWithAllVideos;
