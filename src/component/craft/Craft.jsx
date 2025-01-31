import React from "react";
import s from "./Craft.module.css";

const Craft = () => {
  return (
    <div className={s.Craft}>
      <div className={s.Logo}></div>
      <div className={s.Title}>
        <div className={s.titleText}>We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.</div>
        <div className={s.titleBtn}></div>
      </div>
    </div>
  );
};

export default Craft;
