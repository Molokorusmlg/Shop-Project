import style from "./style.module.scss";
import Header from "../../componets/header/header";
import VideoPlayer from "./componets/videoPlayer/VideoPlayer";
import VideoInfoBlock from "./componets/videoInfoBlock/VideoInfoBlock";
import OtherVideos from "./componets/otherVideos/OtherVideos";
import { data, useParams } from "react-router-dom";
import CommentsBlock from "./componets/commentsBlock/CommentsBlock";
import { API_URL } from "../../constants";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import Loading from "../../componets/loading/Loading";

function Videos() {
  const [isLoading, setIsLoading] = useState(true);
  const [requestData, setRequestData] = useState([]);

  const { id } = useParams();

  const fetchVideoInfo = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}${id}`);
    const data = await response.json();
    setRequestData(data);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchVideoInfo();
  }, [id]);

  return (
    <main>
      <Header />
      <section className={style.video}>
        <VideoPlayer src={requestData.linkVideo || ""} />
        <VideoInfoBlock
          title={requestData.title || ""}
          avatar={requestData.avatar || ""}
          username={requestData.username || ""}
          likes={requestData.likes || 0}
          description={requestData.description || ""}
          img1={requestData.img1 || ""}
          img2={requestData.img2 || ""}
          img3={requestData.img3 || ""}
          id={id}
        />
        <OtherVideos ignoreid={id} />
        <CommentsBlock id={id} />
      </section>
      <Loading isLoading={isLoading} />
    </main>
  );
}

export default Videos;
