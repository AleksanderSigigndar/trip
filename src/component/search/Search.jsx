import React from 'react';
import s from './Search.module.css';
import Icon from '../image/icon_search.png';

const Search = () => {
  return (
    <div className={s.Search}>
      <div className={s.Text}>
        Find Your Journey
      </div>
      <div className={s.Info}>
        <div className={s.iconDestination}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Destination</div>
            <div className={s.List}>Where are you going?</div>
        </div>
        <div className={s.iconTrevelType}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Travel type</div>
            <div className={s.List}>Adventure Travel</div>
        </div>
        <div className={s.iconWhen}></div>
        <div className={s.Choice}>
            <div className={s.Name}>When</div>
            <div className={s.List}>14 Dec 2022</div>
        </div>
        <div className={s.iconTrevellers}></div>
        <div className={s.Choice}>
            <div className={s.Name}>Travellers</div>
            <div className={s.List}>2 Persons</div>
        </div>
        <button className={s.Find}><img src={Icon} className={s.Icon}/><span className={s.Span}>FIND</span></button>
      </div>
    </div>
  )
}

export default Search
