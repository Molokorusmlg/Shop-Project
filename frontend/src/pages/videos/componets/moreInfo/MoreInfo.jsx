import style from "./style.module.scss";
import TestFoto from "../../../../assets/img/1905year.jpg";
import cn from "classnames";

function MoreInfo() {
  return (
    <div className={style.info__more}>
      <div className={style.info__more__title}>
        <h1>Космос это ...</h1>
      </div>
      <div className={style.info__more__block}>
        <div className={style.info__more__text}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            iste, fugit fugiat officiis temporibus ex aliquam, pariatur rerum
            quidem, ipsum exercitationem doloribus deleniti porro culpa. Et
            ullam, itaque porro corporis saepe magni maiores ducimus assumenda
            qui dolore quae quibusdam totam optio ratione, voluptate at eos
            magnam sunt commodi. Officiis perferendis aspernatur nulla unde nam
            nostrum minus aliquid? Neque mollitia possimus suscipit perferendis
            vitae, necessitatibus deserunt quas quasi velit debitis voluptatum
            laborum aperiam aspernatur ipsum facilis nihil magni adipisci
            aliquam? Exercitationem iusto qui natus rem laudantium quisquam
            corrupti provident repudiandae, odit ex nostrum asperiores ratione?
            Perspiciatis commodi maxime blanditiis qui dignissimos!
          </p>
        </div>
        <div className={style.info__more__imges}>
          <img
            className={style.info__more__imges__img}
            src={TestFoto}
            alt="img-building"
          />
          <img
            className={style.info__more__imges__img}
            src={TestFoto}
            alt="img-building"
          />
          <img
            className={cn(style.info__more__imges__img, {
              [style.img__open]: false,
            })}
            src={TestFoto}
            alt="img-building"
          />
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
