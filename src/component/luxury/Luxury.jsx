import React from "react";
import s from "./Luxury.module.css";
import { Link } from 'react-router-dom';

const Luxury = () => {
  return (
    <div className={s.Luxury}>
      <div className={s.columnF}>
        <div className={s.Column1}>
          <div className={s.Title}>
            <div className={s.titleText}>Люксовые Комплексы</div>
            <Link className={s.buttLink} to="/Luxury"><div className={s.titleButt}></div></Link>
          </div>
          <div className={s.newPic}>
            <div className={s.Text}>
              Новые<br/>Комплексы<br/>2025 года
              </div>
          </div>
        </div>
      </div>
      <div className={s.columnS}>
        <div className={s.Column2}>
          <div className={s.winterPic}>
            <div className={s.Text}>
            Лучшие <br/> Зимние Комплексы
              </div>
            </div>
          <div className={s.healthPic}>
          <div className={s.Text}>
          Твоё здоровье <br/>- важно!!!
            </div>
          </div>
        </div>
      </div>
      <div className={s.columnT }>
        <div className={s.Column3}>
          <div className={s.extraordinaryPic}>
            <div className={s.Text}>
            Самые Необыкновенные <br/> Места в мире
              </div>
            </div>
          <div className={s.crowdPic}>
            <div className={s.Text}>
            Отдых <br />Вдали от <br /> Суеты
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
