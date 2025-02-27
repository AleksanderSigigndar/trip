import {React, useState} from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const openModel = () => {
    setIsOpenModel(true);
  }
  const closeModel = () => {
    setIsOpenModel(false);
  }
  return (
    <div className={s.Header}>
      <div className={s.Logo}></div>
      <div className={s.Buttons}>
        <div className={s.Butt}><Link className={s.buttLink} to="/">Дом</Link></div>
        <div className={s.Butt}>Люкс. пакеты</div>
        <div className={s.Butt}>Бронирование</div>
        <div className={s.Butt}>Почему мы?</div>
        <div className={s.Butt}>Контакты</div>
        <div className={s.Butt}>Личный кабинет</div>
      </div>
      <button onClick={openModel} className={s.callMeBack}></button>
      {isOpenModel  &&(
        <div className={s.modalOverlay}>
          <div className={s.Modal}>
            <div className={s.modalTitle}>
              <div className={s.modalLogo}></div>
            </div>
            <div className={s.modalInputs}>
              <div className={s.modalText}>Введите адрес электронной почты</div>
              <input placeholder='Адрес электронной почты' type='email' className={s.Fio}/>
              <div className={s.modalText}>Введите пароль</div>
              <input placeholder='Пароль' type='password' className={s.Num}/>
              <div onClick={closeModel} className={s.modalSend}></div>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default Header;
