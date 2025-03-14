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
                <div className={s.Row}></div>
                <div className={s.Row}></div>
                <div className={s.Row}></div>
                <div className={s.Row}></div>
                <div className={s.Row}></div>
                <div className={s.Row}></div>
                <div className={s.Row}></div>
            </div>
        </div>
    </div>
  )
}

export default lkContent
