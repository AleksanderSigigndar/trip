import React from 'react'
import Header from '../../../component/header/Header'
import Search from '../luxurySearch/luxurySearch'
import Info from '../luxuruInfo/luxuryInfo'
import s from './luxuryMain.module.css'

const luxuryMain = () => {
  return (
    <div className={s.Main}>
      <div className={s.Container}>
        <Header />
        <Search />
        <Info />
      </div>
    </div>
  )
}

export default luxuryMain
