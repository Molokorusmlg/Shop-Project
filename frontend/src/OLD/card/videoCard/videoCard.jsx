import "./videoCard.scss";

function VideoCard({ videoLink }) {
  return (
    <div
      style={{
        position: "relative",
        height: "70%",
        width: "65%",
        borderRadius: "7px",
      }}
    >
      <iframe
        src="https://kinescope.io/embed/g4DwPwPwmuVZjnvZfnHYpQ"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
        frameBorder="0"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          borderRadius: "13px",
        }}
      ></iframe>
    </div>
  );
}

export default VideoCard;
