import {React, useState} from "react";
import s from "./Insp.module.css";

const Insp = () => {
  const [inputEmail, setInputEmail] = useState('');

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  
  const handleClearClick = () => {
    setInputEmail(''); // Очищаем значение input
  };
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
          <input className={s.emailInput} value={inputEmail} placeholder='Адрес электронной почты' onChange={handleInputEmail}></input>
          <div className={s.emailBtn} onClick={handleClearClick}></div>
        </div>
      </div>
    </div>
  );
};

export default Insp;
