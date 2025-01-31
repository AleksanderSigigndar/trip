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
        <div className={s.List}>Luxury packages</div>
        <div className={s.List}>Book with us</div>
        <div onClick={openModel} className={s.callMeBack}></div>
        <div className={s.List}>Why Lux Trips</div>
        <div className={s.List}>Contact</div>
        {isOpenModel &&(
        <div className={s.modalOverlay}>
          <div className={s.Modal}>
            <div className={s.modalTitle}>
              <div className={s.modalLogo}></div>
            </div>
            <div className={s.modalInputs}>
              <div className={s.modalText}>Enter your name</div>
              <input placeholder='Enter your name' type='text' className={s.Fio}/>
              <div className={s.modalText}>Enter your phone number</div>
              <input placeholder='+7 (999) 999-99-99' type='text' className={s.Num}/>
              <div onClick={closeModel} className={s.modalSend}></div>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default Footer
