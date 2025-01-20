import style from "./style.module.scss";
import PropTypes from "prop-types";
function VideoTitle({ title }) {
  return (
    <div className={style.video__title}>
      <p className={style.video__title__text}>{title}</p>
    </div>
  );
}

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VideoTitle;
