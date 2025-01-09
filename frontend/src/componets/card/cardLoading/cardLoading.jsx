import "./cardLoading.scss";
import cn from "classnames";

function CardLoading({ isLoading }) {
  const cardLoadingClass = cn("loading active__loading", {
    "loading-complete": !isLoading,
  });

  return (
    <div className={cardLoadingClass}>
      <div className="loading__circle">
        <div className="cube first">
          <span></span>
        </div>
        <div className="cube second">
          <span></span>
        </div>
        <div className="cube third">
          <span></span>
        </div>
        <div className="cube four">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default CardLoading;
