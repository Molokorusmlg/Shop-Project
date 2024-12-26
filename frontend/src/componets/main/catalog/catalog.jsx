import ProductCard from "../productCard/productCard";
import Loading from "../loading/loading";
import { data } from "react-router-dom";
import { useEffect, useState } from "react";
import "../productCard/productCard.scss";

function Catalog() {
  const PRODUCTS_URL = "https://675ebc5f1f7ad24269967ed4.mockapi.io/Products";
  const [cardList, setCardList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCards = async () => {
    try {
      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) {
        throw new Error("404");
      }
      const result = await response.json();
      setCardList(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCards();
    console.log(isLoading);
  }, []);

  return (
    <div className="catalog">
      <div className="catalog__cards">
        <Loading isLoadng={isLoading} />
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
