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
  const [isOpenReg, setIsOpenReg] = useState(false);
  const openReg = () => {
    setIsOpenReg(true);
    setIsOpenModel(false);
  }
  const closeReg = () => {
    setIsOpenReg(false);
  }
  
  return (
    <div className={s.Header}>
      <div className={s.Logo}></div>
      <div className={s.Buttons}>
        <div className={s.Butt}><Link className={s.buttLink} to="/">Дом</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Люкс. пакеты</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Lk">Личный кабинет</Link></div>
      </div>
      <button onClick={openModel} className={s.callMeBack}></button>
      {isOpenModel ? (
        <div className={s.modalOverlay}>
          <div className={s.Modal}>
            <div className={s.modalTitle}>
              <div className={s.modalLogo}></div>
            </div>
            <div className={s.modalInputs}>
              <div className={s.modalText}>Введите логин</div>
              <input placeholder='Логин' type='email' className={s.Fio}/>
              <div className={s.modalText}>Введите пароль</div>
              <input placeholder='Пароль' type='password' className={s.Num}/>
              <div className={s.Reg}>Если вы ещё не зарегистрированы, нажмите  <span className={s.Tap} onClick={openReg}>{'\u00A0'}сюда</span></div>
              <div onClick={closeModel} className={s.modalSend}></div>
            </div>
          </div>
        </div>
      ) : isOpenReg ? (
        <div className={s.modalOverlay}>
        <div className={s.Modal}>
          <div className={s.modalTitle}>
            <div className={s.modalLogo}></div>
          </div>
          <div className={s.modalInputs}>
            <div className={s.modalText}>Придумайте логин</div>
            <input placeholder='Логин' type='email' className={s.Fio}/>
            <div className={s.modalText}>Придумайте пароль</div>
            <input placeholder='Пароль' type='password' className={s.Num}/>
            <div onClick={closeReg} className={s.modalSend}></div>
          </div>
        </div>
      </div>
      ) : null}
    </div>
  )
}

export default Header;
