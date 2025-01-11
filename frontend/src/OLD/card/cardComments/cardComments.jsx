import { useState, useEffect } from "react";
import "./cardComments.scss";
import CardCommentObject from "../cardCommentObject/cardCommentObject";

function CardComments({ VideoId }) {
  const [commets, setCommets] = useState([]);

  const getCommetsForThisPage = async () => {
    try {
      const COMMENTS_URL = new URL(
        `https://675ebc5f1f7ad24269967ed4.mockapi.io/Comments/?ProductId=${VideoId}`
      );

      const response = await fetch(COMMENTS_URL);
      if (!response.ok) {
        throw new Error("404");
      }
      const responseJson = await response.json();
      setCommets(responseJson);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  useEffect(() => {
    getCommetsForThisPage();
  }, [VideoId]);

  return (
    <div className="comments__block">
      {commets.map((comment, key) => {
        return (
          <CardCommentObject
            avatar={comment.avatar}
            userName={comment.UserName}
            comment={comment.Comment}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default CardComments;

// добавить костыль, чтоб mockapi когда есть ProductId = 4 и ProductId = 14, выдавало только нужный Product id
