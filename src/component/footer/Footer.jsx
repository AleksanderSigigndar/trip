import {React, useState} from 'react'
import s from './Footer.module.css'

const Footer = () => {
     const [isOpenModel, setIsOpenModel] = useState(false);
      const openModel = () => {
        setIsOpenModel(true);
      }
      const closeModel = () => {
        setIsOpenModel(false);
      }
  return (
    <div className={s.Footer}>
        <div className={s.List}>Люкс. пакеты</div>
        <div className={s.List}>Бронирование</div>
        <div onClick={openModel} className={s.callMeBack}></div>
        <div className={s.List}>Почему мы?</div>
        <div className={s.List}>Контакт</div>
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

export default Footer
