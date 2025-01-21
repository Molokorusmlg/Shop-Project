import PropTypes from "prop-types";
import style from "./style.module.scss";

function VideoPlayer({ src }) {
  return (
    <div className={style.video__player__video}>
      <iframe
        src={src}
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          borderRadius: "13px",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
