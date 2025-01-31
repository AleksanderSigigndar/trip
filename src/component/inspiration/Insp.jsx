import React from "react";
import s from "./Insp.module.css";

const Insp = () => {
  return (
    <div className={s.Insp}>
      <div className={s.Container}>
        <div className={s.Title}>
          <div className={s.titleMain}>
            Get weekly <br/> inspiration and<br/> expert advice
          </div>
          <div className={s.titleDiscribe}>
            Sign up for our Weekly Newsletter dasda
          </div>
        </div>
        <input type="date" />
        <div className={s.Email}>
          <input className={s.emailInput} placeholder='Email adress'></input>
          <div className={s.emailBtn}></div>
        </div>
      </div>
    </div>
  );
};

export default Insp;
