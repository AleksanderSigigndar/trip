import React from 'react'
import s from './Book.module.css'
const Book = () => {
  return (
    <div className={s.Book}>
        <div className={s.Logo}></div>
        <div className={s.logoText}>Бронируй<br/>С Нами</div>
        <div className={s.Content}>
      <div className={s.Column}>
        <div className={s.Cars}>Суперкары</div>
        <div className={s.Villas}>Виллы</div>
        <div className={s.Helicopter}>Личные <br/>Вертолёты</div>
      </div>
      <div className={s.Column}>
        <div className={s.Hotels}>Отели</div>
        <div className={s.Yachts}>Яхты</div>
        <div className={s.Jet}>Личные <br/>Самолёты</div>
      </div>
      </div>
    </div>
  )
}

export default Book