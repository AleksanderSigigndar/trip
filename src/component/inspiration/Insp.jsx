import React from "react";
import s from "./Insp.module.css";

const Insp = () => {
  return (
    <div className={s.Insp}>
      <div className={s.Container}>
        <div className={s.Title}>
          <div className={s.titleMain}>
          Получайте еженедельные<br/> вдохновление и<br/> советы экспертов
          </div>
          <div className={s.titleDiscribe}>
            Введите свою эл. почту, для получения рассылки
          </div>
        </div>
        <div className={s.Email}>
          <input className={s.emailInput} placeholder='Адрес электронной почты'></input>
          <div className={s.emailBtn}></div>
        </div>
      </div>
    </div>
  );
};

export default Insp;
