import React from 'react'
import Header from '../../../component/header/Header'
import Search from '../luxurySearch/luxurySearch'
import pig from '../../img/resize.jpeg'
import s from './luxuryMain.module.css'

const luxuryMain = () => {
  return (
    <div className={s.Main}>
      <div className={s.Container}>
        <Header />
        <Search />
        <img src={pig}/>
        <img src={pig}/>
        <img src={pig}/>
        <img src={pig}/>
        <img src={pig}/>
      </div>
    </div>
  )
}

export default luxuryMain
