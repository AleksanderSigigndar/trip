import React from "react";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.Contact}>
      <div className={s.Container}>
        <div className={s.Title}>Contact</div>
        <div className={s.Inputs}>
          <input className={s.Name} placeholder='Name' />
          <input className={s.Phone} placeholder='Phone' />
        </div>
        <div className={s.Btn}></div>
      </div>
    </div>
  );
};

export default Contact;
