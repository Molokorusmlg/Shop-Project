import style from "./style.module.scss";
import Comment from "../comment/Comment";

import TestImg from "../../../../assets/img/telegram.png";

function CommentsBlock() {
  return (
    <div className={style.comments}>
      <Comment
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum at voluptate qui, id ipsum necessitatibus dolore recusandae cumque similique sapiente molestiae blanditiis, doloribus cum obcaecati ducimus fugit nihil totam. Saepe temporibus quidem, veniam nostrum deserunt repellat facere quae delectus eligendi odio maiores doloremque tempore consequuntur dolorem placeat exercitationem aperiam?"
        }
        username={"Vernam"}
        avatar={TestImg}
      />
      <Comment text={"lorem ipsum"} username={"Vernam"} avatar={TestImg} />
    </div>
  );
}

export default CommentsBlock;
