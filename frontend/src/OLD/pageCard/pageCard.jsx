import "./pageCard.scss";
import { useEffect, useState } from "react";
import ProductCard from "../main/productCard/productCard";
import "../main/productCard/productCard.scss";

function PageCard() {
  const PRODUCTS_URL = "https://675ebc5f1f7ad24269967ed4.mockapi.io/Products";

  let cardId = window.location.pathname;
  cardId = cardId.slice(5);

  const [card, setCard] = useState({});

  const getCurentCards = () => {
    fetch(PRODUCTS_URL + cardId, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  useEffect(() => {
    getCurentCards();
  }, []);

  return (
    <div className="page">
      <h1 className="page__title">Карточка товара {card.title}</h1>
      <ProductCard
        img={card.img}
        title={card.title}
        description={card.description}
        id={card.id}
        gradient={true}
      />
      <span className="page__block"></span>
    </div>
  );
}

export default PageCard;
