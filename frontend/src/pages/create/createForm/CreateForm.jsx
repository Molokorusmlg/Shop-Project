import style from "./style.module.scss";
import { useForm } from "react-hook-form";

function CreateForm() {
  const resetData = () => {
    reset();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={style.create__form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.create__form__title}>
        <h1 className={style.create__form__title__text}>Создать видео</h1>
        <div className={style.create__form__title__line}>
          <span></span>
        </div>
      </div>
      <div className={style.create__form__inputs}>
        <div className={style.create__form__input__block}>
          {errors.title && (
            <label
              htmlFor="title"
              className={`${style.create__form__error} ${
                errors.title ? style.visible : ""
              }`}
            >
              {errors.title.message}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Название"
            id="title"
            {...register("title", { required: "Title is required" })}
          />
        </div>
        <div className={style.create__form__input__block}>
          {errors.description && (
            <label
              htmlFor="description"
              className={`${style.create__form__error} ${
                errors.description ? style.visible : ""
              }`}
            >
              {errors.description.message}
            </label>
          )}
          <textarea
            className={style.create__form__textarea}
            placeholder="Описание"
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        <div className={style.create__form__input__block}>
          {errors.image && (
            <label
              htmlFor="image-1"
              className={`${style.create__form__error} ${
                errors.image ? style.visible : ""
              }`}
            >
              {errors.image.message}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Ссылка на изображение"
            id="image-1"
            {...register("image", { required: "Image is required" })}
          />
        </div>

        <div className={style.create__form__input__block}>
          {errors.image && (
            <label
              htmlFor="image-2"
              className={`${style.create__form__error} ${
                errors.image ? style.visible : ""
              }`}
            >
              {errors.image.message}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Ссылка на изображение 2"
            id="image-2"
            {...register("image", { required: "Image is required" })}
          />
        </div>

        <div className={style.create__form__input__block}>
          {errors.image && (
            <label
              htmlFor="image-3"
              className={`${style.create__form__error} ${
                errors.image ? style.visible : ""
              }`}
            >
              {errors.image.message}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Ссылка на изображение 3"
            id="image-3"
            {...register("image", { required: "Image is required" })}
          />
        </div>

        <div className={style.create__form__input__block}>
          {errors.video && (
            <label
              htmlFor="video"
              className={`${style.create__form__error} ${
                errors.video ? style.visible : ""
              }`}
            >
              {errors.video.message}
            </label>
          )}
          <input
            className={style.create__form__input}
            placeholder="Ссылка на видео"
            id="video"
            {...register("video", { required: "Video is required" })}
          />
        </div>
      </div>
      <div className={style.create__form__button__block}>
        <button className={style.form__button} type="submit">
          Создать
        </button>
        <button onClick={resetData} className={style.form__button} type="reset">
          Очистить
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
