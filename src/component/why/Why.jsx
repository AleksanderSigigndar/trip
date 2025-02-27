import React from 'react'
import s from './Why.module.css'

const Why = () => {
  return (
    <div className={s.Why}>
      <div className={s.Block}>
        <div className={s.mainText}>Почему мы?</div>
        <div className={s.Discribe}>Как туристический дизайнер, мы знаем все тонкости путешествий: с кем работать, куда идти, когда бронировать и в каком ресторане подают самую настоящую кухню. </div>
      </div>
      <div className={s.Block}>
        <div className={s.Special}>Эксклюзивные знания, позволяющие предоставлять клиентам лучшее</div>
        <div className={s.Discribe}>Область нашей компетенции варьируется от бронирования роскошных курортов и вилл/шале на отдых, чартеров частных яхт и реактивных самолетов до эксклюзивных туров и индивидуального планирования путешествий.</div>
      </div>
    </div>
  )
}

export default Why
