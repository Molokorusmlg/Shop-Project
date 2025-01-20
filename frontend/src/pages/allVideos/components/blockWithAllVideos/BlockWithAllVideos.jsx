import style from "./style.module.scss";
import VideoCard from "../videoCard/VideoCard";
import PropTypes from "prop-types";

function BlockWithAllVideos({ videoList }) {
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
    </div>
  );
}

BlockWithAllVideos.propTypes = {
  videoList: PropTypes.array.isRequired,
};

export default BlockWithAllVideos;
