import React from 'react'
import Header from '../../../component/header/Header'
import Search from '../luxurySearch/luxurySearch'
import s from './luxuryMain.module.css'

const luxuryMain = () => {
  return (
    <div className={s.Main}>
      <div className={s.Container}>
        <Header />
        <Search />
      </div>
    </div>
  )
}

export default luxuryMain
