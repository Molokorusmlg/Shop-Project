import { Link } from "react-router-dom";
import "./productCard.scss";

function ProductCard({ img, title, description, id, gradient }) {
  return (
    <div className="card">
      {gradient === true ? (
        <div className="card__background">
          <span></span>
        </div>
      ) : (
        <></>
      )}
      <img className="card__img" src={img} alt={description} />
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <Link to={id} className="card__button">
        Buy
      </Link>
    </div>
  );
}

export default ProductCard;
