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
      <div className="card__photo">
        <img className="card__img" src={img} alt={description} />
      </div>
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
    </div>
  );
}

export default ProductCard;
