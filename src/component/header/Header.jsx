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
        <div className={s.Butt}><Link className={s.buttLink} to="/">Home</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Luxury packages</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Book with us</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Why Lux Trips</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Contact</Link></div>
        <div className={s.Butt}><Link className={s.buttLink} to="/Luxury">Client Area</Link></div>
      </div>
      <button onClick={openModel} className={s.callMeBack}></button>
      {isOpenModel  &&(
        <div className={s.modalOverlay}>
          <div className={s.Modal}>
            <div className={s.modalTitle}>
              <div className={s.modalLogo}></div>
            </div>
            <div className={s.modalInputs}>
              <div className={s.modalText}>Enter your Email</div>
              <input placeholder='Email' type='email' className={s.Fio}/>
              <div className={s.modalText}>Enter your password</div>
              <input placeholder='Password' type='password' className={s.Num}/>
              <div onClick={closeModel} className={s.modalSend}></div>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default Header;
