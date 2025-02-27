import React from 'react';
import s from './Search.module.css';
import Icon from '../image/icon_search.png';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className={s.Search}>
      <div className={s.Text}>
        Найди своё путешествие!
      </div>
      <div className={s.Info}>
        <div className={s.iconDestination}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Место назначения</div>
            <div className={s.List}>Куда вы хотите отправиться?</div>
        </div>
        <div className={s.iconTrevelType}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Тип путеш.</div>
            <div className={s.List}>Приключение</div>
        </div>
        <div className={s.iconWhen}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Дата</div>
            <div className={s.List}>14 Дек. 2022</div>
        </div>
        <div className={s.iconTrevellers}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Кол-во чел.</div>
            <div className={s.List}>2 Человека</div>
        </div>
        <Link className={s.buttLink} to="/Luxury" className={s.Find}> <img src={Icon} className={s.Icon}/><span className={s.Span}>Поиск</span></Link>
      </div>
    </div>
  )
}

export default Search
