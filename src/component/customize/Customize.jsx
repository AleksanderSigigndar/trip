import React from "react";
import { HashLink } from 'react-router-hash-link';
import s from "./Customize.module.css";

const Customize = () => {
  return (
    <div className={s.Customize}>
      <div className={s.Title}>Кастомизируйте <br/>ваше путешествие с нами</div>
      <div className={s.Main}>
        <div className={s.mainList}></div>
        <div className={s.mainText}>
          <div className={s.Block}>
            <div className={s.blockTitle}>Опишите путешествие своей мечты</div>
            <div className={s.blockDiscribe}>Расскажите нам, каким должен быть ваш идеальный отпуск. Направления, предпочтения и личные интересы. </div>
          </div>
          <div className={s.Block}>
            <div className={s.blockTitle}>Получите соответствие</div>
            <div className={s.blockDiscribe}>Наша команда составит идеальный маршрут путешествия для вас, исходя из ваших индивидуальных потребностей и пожелания.</div>
          </div>
          <div className={s.Block}>
            <div className={s.blockTitle}>Забронируйте свой отпуск</div>
            <div className={s.blockDiscribe}>Подтверждайте поездку только тогда, когда вы полностью удовлетворены предложенным планом путешествия. </div>
          </div>
        </div>
      </div>
      <HashLink to="/#section1"><div className={s.Btn}></div></HashLink>
    </div>
  );
};

export default Customize;
