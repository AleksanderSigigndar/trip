import React from 'react'
import Header from '../../../component/header/Header'
import Search from '../luxurySearch/luxurySearch'
import Info from '../luxuruInfo/luxuryInfo'
import Insp from '../../../component/inspiration/Insp'
import Footer from '../../../component/footer/Footer'
import s from './luxuryMain.module.css'

const luxuryMain = () => {
  return (
    <div className={s.Main}>
      <div className={s.Container}>
        <Header />
        <Search />
        <Info />
        <div className={s.Insp}>
        <Insp />
        </div>
        <div className={s.Foot}>
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default luxuryMain