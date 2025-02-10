import React from "react";
import s from "./luxurySearch.module.css";

const Search = () => {
  return (
    <div className={s.Search}>
      <div className={s.Title}>Luxury packages</div>
      <div className={s.Main}>
        <div className={s.Info}>
          <div className={s.Tours}>
            <div className={s.Name}>Luxury Tours</div>
            <div className={s.List}>Romantic Winter Destinations</div>
          </div>
          <div className={s.When}>
            <div className={s.Name}>When</div>
            <div className={s.List}>14 Dec 2022 - 28 Dec 2022</div>
          </div>
          <div className={s.Type}>
            <div className={s.Name}>Travellers</div>
            <div className={s.List}>2 persons</div>
          </div>
          <div className={s.Pick}>
            <div className={s.pickChoice}>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className={s.pickChoice}>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
