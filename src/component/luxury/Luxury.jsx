import React from "react";
import s from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={s.Luxury}>
      <div className={s.columnF}>
        <div className={s.Column1}>
          <div className={s.Title}>
            <div className={s.titleText}>Luxury Packages</div>
            <div className={s.titleButt}></div>
          </div>
          <div className={s.newPic}>
            <div className={s.Text}>
              New<br/>destinations<br/>for 2022
              </div>
            <div className={s.newBtn}></div>
          </div>
        </div>
      </div>
      <div className={s.columnS}>
        <div className={s.Column2}>
          <div className={s.winterPic}>
            <div className={s.Text}>
            Best <br/> Winter Destinations
              </div>
            <div className={s.winterBtn}></div>
            </div>
          <div className={s.healthPic}>
          <div className={s.Text}>
          Your health <br/>is matter
            </div>
            <div className={s.healthBtn}></div>
          </div>
        </div>
      </div>
      <div className={s.columnT }>
        <div className={s.Column3}>
          <div className={s.extraordinaryPic}>
            <div className={s.Text}>
            The world's most <br/> extraordinary <br/> places
              </div>
            <div className={s.extraordinaryBtn}></div>
            </div>
          <div className={s.crowdPic}>
            <div className={s.Text}>
            Experiences <br />Away From <br /> Crowd
              </div>
            <div className={s.crowdBtn}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
