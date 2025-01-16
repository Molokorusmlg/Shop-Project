import style from "./style.module.scss";
import OtherVideoLink from "../otherVideoLink/OtherVideoLink";
import TestImg from "../../../../assets/img/1905year.jpg";

function OtherVideos() {
  return (
    <div className={style.othervideos}>
      <OtherVideoLink
        id={1}
        title={"KOCMOC UNLEASHED // GRAND FINALE (official full level)"}
        img={TestImg}
        username={"Vernam"}
      />
      <OtherVideoLink id={2} title={"test2"} img={TestImg} username={"test2"} />
    </div>
  );
}

export default OtherVideos;
