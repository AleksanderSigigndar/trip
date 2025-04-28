import {React, useState} from "react";
import s from "./Contact.module.css";

const Contact = () => {
  const [inputPhone, setInputPhone] = useState('');

  const handleInputPhone = (e) => {
    setInputPhone(e.target.value);
    };
    
    const [inputPassword, setInputPassword] = useState('');
    const handleInputPassword = (e) => {
      setInputPassword(e.target.value);
    };

    const handleClearClick = () => {
      setInputPhone(''); // Очищаем значение input
      setInputPassword(''); // Очищаем значение input
    };

  return (
    <div className={s.Contact} id="section1">
      <div className={s.Container}>
        <div className={s.Title}>Контакт</div>
        <div className={s.Inputs}>
          <input value={inputPhone} className={s.Name} placeholder='Имя' onChange={handleInputPhone}/>
          <input value={inputPassword} className={s.Phone} placeholder='Номер телефона' onChange={handleInputPassword}/>
        </div>
        <div className={s.Btn} onClick={handleClearClick}></div>
      </div>
    </div>
  );
};

export default Contact;
