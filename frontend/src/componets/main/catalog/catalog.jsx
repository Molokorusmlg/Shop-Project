import ProductCard from "./productCard/productCard";
import { data } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productCard/productCard.scss";

function Catalog() {
  const PRODUCTS_URL = "https://675ebc5f1f7ad24269967ed4.mockapi.io/Products";
  const [cardList, setCardList] = useState([]);

  const getAllCards = () => {
    fetch(PRODUCTS_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCardList(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
    return cardList;
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="catalog">
      <div className="catalog_grid">
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
    </div>
  );
}

export default Catalog;
