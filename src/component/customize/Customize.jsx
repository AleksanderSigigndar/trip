import React from "react";
import s from "./Customize.module.css";

const Customize = () => {
  return (
    <div className={s.Customize}>
      <div className={s.Title}>Customise <br/>your trip with us</div>
      <div className={s.Main}>
        <div className={s.mainList}></div>
        <div className={s.mainText}>
          <div className={s.Block}>
            <div className={s.blockTitle}>Describe your dream trip</div>
            <div className={s.blockDiscribe}>Let us know what your perfect vacation is. Destinations, preferences, and personal <br/> interests. </div>
          </div>
          <div className={s.Block}>
            <div className={s.blockTitle}>Get matched</div>
            <div className={s.blockDiscribe}>Our team will create perfect travel itinerary <br/> for you, based on your personalized needs <br/>and wishes.</div>
          </div>
          <div className={s.Block}>
            <div className={s.blockTitle}>Book your vacation</div>
            <div className={s.blockDiscribe}>Confirm your trip only when you are<br/> completely satisfied with the proposed<br/> travel plan. </div>
          </div>
        </div>
      </div>
      <div className={s.Btn}></div>
    </div>
  );
};

export default Customize;
