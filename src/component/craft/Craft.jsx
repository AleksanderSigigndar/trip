import {React, useRef} from "react";
import { HashLink } from 'react-router-hash-link';
import s from "./Craft.module.css";

const Craft = () => {
  return (
    <div className={s.Craft}>
      <div className={s.Logo}></div>
      <div className={s.Title}>
        <div className={s.titleText}>Мы разрабатываем и планируем уникальные маршруты с учетом интересов клиентов и с особым вниманием к деталям.</div>
        <HashLink to="/#section1"><div className={s.titleBtn}></div></HashLink>
      </div>
    </div>
  );
};

export default Craft;
