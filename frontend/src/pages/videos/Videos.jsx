import style from "./style.module.scss";
import Header from "../../componets/header/header";
import VideoPlayer from "./componets/videoPlayer/VideoPlayer";
import VideoInfoBlock from "./componets/videoInfoBlock/VideoInfoBlock";

function Videos() {
  return (
    <main>
      <Header />
      <section className={style.video}>
        <VideoPlayer />
        <VideoInfoBlock />
      </section>
    </main>
  );
}

export default Videos;
