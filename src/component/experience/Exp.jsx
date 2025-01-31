import React from 'react'
import s from './Exp.module.css'
import Card from '../card/Card.jsx'

const Exp = () => {
    return (
        <div className={s.Exp}>
            <div className={s.Back}></div>
            <div className={s.mainText}>Top Rated Experiences</div>
            <div className={s.Contain}>
                <div className={s.List}>
                    <div className={s.World}>World</div>
                    <div className={s.Africa}>Africa</div>
                    <div className={s.Asia}>Asia</div>
                    <div className={s.Europe}>Europe</div>
                    <div className={s.northAmerica}>North America</div>
                    <div className={s.southAmerica}>South America</div>
                    <div className={s.Antarctica}>Antarctica</div>
                    <div className={s.Australia}>Australia</div>
                </div>
                <div className={s.Slik}>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Exp
