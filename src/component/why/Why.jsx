import React from 'react'
import s from './Why.module.css'

const Why = () => {
  return (
    <div className={s.Why}>
      <div className={s.Block}>
        <div className={s.mainText}>Why Lux Trips</div>
        <div className={s.Discribe}>As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine. </div>
      </div>
      <div className={s.Block}>
        <div className={s.Special}>Exclusive knowledge to provide the best of the best to clients</div>
        <div className={s.Discribe}>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </div>
      </div>
    </div>
  )
}

export default Why
