import ProductCard from "../productCard/productCard";
import Loading from "../loading/loading";
import { useEffect, useState } from "react";
import "../productCard/productCard.scss";

function Catalog() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [cardList, setCardList] = useState([]);

  const getAllCards = async (currentPage) => {
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
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCards(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
