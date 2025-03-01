import React from "react";
import Icon from '../../../component/image/icon_search.png';
import SearchComponent from '../luxuryList/luxuryList.jsx';
import s from "./luxurySearch.module.css";
const Search = () => {
  return (
    <div className={s.Search}>
      <div className={s.Title}>Люксовые пакеты</div>
      <div className={s.Main}>
        <div className={s.Info}>
          <div className={s.Tours}>
            <div className={s.Name}>Туры люкс</div>
            <div className={s.List}><SearchComponent/></div>
          </div>
          <div className={s.When}>
            <div className={s.Name}>Когда</div>
            <div className={s.List}>14 Дек. 2022 - 28 Дек. 2022</div>
          </div>
          <div className={s.Type}>
            <div className={s.Name}>Кол-во чел.</div>
            <div className={s.List}>2 человека</div>
          </div>
          <div className={s.Pick}>
          <div className={s.Find}>
            <img src={Icon} className={s.Icon}/>
            <span className={s.Span}>Поиск</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
