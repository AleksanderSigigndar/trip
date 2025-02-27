import React from "react";
import s from "./Craft.module.css";

const Craft = () => {
  return (
    <div className={s.Craft}>
      <div className={s.Logo}></div>
      <div className={s.Title}>
        <div className={s.titleText}>Мы разрабатываем и планируем уникальные маршруты с учетом интересов клиентов и с особым вниманием к деталям.</div>
        <div className={s.titleBtn}></div>
      </div>
    </div>
  );
};

export default Craft;
