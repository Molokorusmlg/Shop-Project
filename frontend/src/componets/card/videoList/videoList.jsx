import "./videoList.scss";
import { useState, useEffect } from "react";
import ProductCard from "../../main/productCard/productCard";

function VideoList({ cardList }) {
  return (
    <div className="list">
      {cardList.map((card, key) => {
        let newCardDescription = card.description;
        if (card.description.length >= 35) {
          newCardDescription = card.description.slice(0, 35);
          newCardDescription += "...";
        }
        return (
          <ProductCard
            img={card.img}
            title={card.title}
            description={newCardDescription}
            id={card.id}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
