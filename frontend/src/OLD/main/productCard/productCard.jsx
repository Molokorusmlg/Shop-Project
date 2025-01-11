import "./productCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ img, title, description, id }) {
  return (
    <Link to={`/card/${id}`} className="card">
      <div className="card__photo">
        <img className="card__img" src={img} alt={description} />
      </div>
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
    </Link>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
