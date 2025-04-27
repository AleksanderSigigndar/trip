import React from 'react'
import s from './lkContent.module.css'

const lkContent = () => {
  return (
    <div className={s.lkContent}>
        <div className={s.Title}>
            Личный кабинет
        </div>
        <div className={s.Main}>
            <div className={s.mainBlock}>
                <div className={s.Row}>
                  <div className={s.Order}>Name</div>
                  <div className={s.Text}>Alexander Glushkov</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Email adress</div>
                  <div className={s.Text}>ww@gmail.com</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Phone number</div>
                  <div className={s.Text}>+7 999 999-99-99</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Date of birth</div>
                  <div className={s.Text}>01.04.2006</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Nationality</div>
                  <div className={s.Text}>Russian</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Gender</div>
                  <div className={s.Text}>Man</div>
                  <div className={s.Edit}>Edit</div>
                </div>
                <div className={s.Row}>
                  <div className={s.Order}>Address</div>
                  <div className={s.Text}>NSK</div>
                  <div className={s.Edit}>Edit</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default lkContent
