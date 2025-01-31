import React from 'react'
import s from './Book.module.css'
const Book = () => {
  return (
    <div className={s.Book}>
        <div className={s.Logo}></div>
        <div className={s.logoText}>Book <br/>With Us</div>
        <div className={s.Content}>
      <div className={s.Column}>
        <div className={s.Cars}>Supercars</div>
        <div className={s.Villas}>Villas</div>
        <div className={s.Helicopter}>Private <br/>Helicopter</div>
      </div>
      <div className={s.Column}>
        <div className={s.Hotels}>Hotels</div>
        <div className={s.Yachts}>Yachts</div>
        <div className={s.Jet}>Private <br/>Jet</div>
      </div>
      </div>
    </div>
  )
}

export default Book