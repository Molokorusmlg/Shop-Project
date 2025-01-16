import style from "./style.module.scss";
import Header from "../../componets/header/header";
import VideoPlayer from "./componets/videoPlayer/VideoPlayer";
import VideoInfoBlock from "./componets/videoInfoBlock/VideoInfoBlock";
import OtherVideos from "./componets/otherVideos/OtherVideos";
import { useParams } from "react-router-dom";
import CommentsBlock from "./componets/commentsBlock/CommentsBlock";

function Videos() {
  const { id } = useParams();

  console.log(id);

  return (
    <main>
      <Header />
      <section className={style.video}>
        <VideoPlayer />
        <VideoInfoBlock />
        <OtherVideos />
        <CommentsBlock />
      </section>
    </main>
  );
}

export default Videos;
