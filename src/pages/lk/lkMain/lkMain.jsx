import React from 'react'
import ScrollToTop from '../../../useScrollToTop/useScrollToTop'
import Header from '../../../component/header/Header'
import Content from '../lkContent/lkContent'
import Footer from '../../../component/footer/Footer'
import s from './lkMain.module.css'

const lkMain = () => {
  ScrollToTop();
  return (
    <div className={s.Main}>
      <div className={s.Container}>
        <Header />
        <Content />
        <div className={s.Foot}>
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default lkMain