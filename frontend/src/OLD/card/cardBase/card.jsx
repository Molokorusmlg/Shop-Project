import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../videoCard/videoCard";
import MainHeader from "../../main/mainHeader/mainHeader";
import VideoList from "../videoList/videoList";
import CardTitle from "../cardTitle/cardTitle";
import CardLoading from "../cardLoading/cardLoading";
import CardComments from "../cardComments/cardComments";
import "./card.scss";

function Card() {
  const { id } = useParams();

  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRequestSend, setIsRequestSend] = useState(false);
  const [page, setPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [video, setVideo] = useState(null);

  const getCurrentCard = async () => {
    try {
      const PRODUCTS_URL = new URL(
        `https://675ebc5f1f7ad24269967ed4.mockapi.io/Products/${id}`
      );

      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) {
        throw new Error("404");
      }
      const responseJson = await response.json();
      setVideo(responseJson);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const getListCards = async (currentPage) => {
    setIsRequestSend(true);
    try {
      const PRODUCTS_URL = new URL(
        "https://675ebc5f1f7ad24269967ed4.mockapi.io/Products"
      );
      PRODUCTS_URL.searchParams.append("limit", 5);
      PRODUCTS_URL.searchParams.append("page", currentPage);

      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) {
        throw new Error("404");
      }
      const responseJson = await response.json();
      setCardList((prev) => [...prev, ...responseJson]);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setIsLoading(false);
      setIsRequestSend(false);
    }
  };

  useEffect(() => {
    if (!isFirstRender) {
      getListCards(page);
    } else {
      setIsFirstRender(false);
    }
  }, [page, isFirstRender]);

  useEffect(() => {
    getCurrentCard();
  }, [id]);

  return (
    <div className="card__window">
      <CardLoading isLoading={isLoading} />
      <MainHeader />
      <VideoCard videoLink={id} />
      <VideoList cardList={cardList} />
      {video && <CardTitle title={video.title} />}
      <CardComments VideoId={id} />
    </div>
  );
}

export default Card;
