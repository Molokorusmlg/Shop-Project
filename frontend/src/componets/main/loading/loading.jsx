import "./loading.scss";
import cn from "classnames";

function Loading({ isLoadng }) {
  const LoadingClass = cn("loading active__loading", {
    "loading-complete": !isLoadng,
  });

  return (
    <div className={LoadingClass}>
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

export default Loading;
