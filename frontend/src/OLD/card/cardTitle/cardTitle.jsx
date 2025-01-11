import "./cardTitle.scss";

function CardTitle({ title }) {
  return (
    <div className="video__card__title">
      <h1 className="video__card__title__text">{title}</h1>
    </div>
  );
}

export default CardTitle;
