import React from 'react'
import s from './Exp.module.css'
import Card from '../card/Card.jsx'

const Exp = () => {
    return (
        <div className={s.Exp}>
            <div className={s.Back}></div>
            <div className={s.mainText}>Лучшие впечатления</div>
            <div className={s.Contain}>
                <div className={s.List}>
                    <div className={s.World}>Мир</div>
                    <div className={s.Africa}>Африка</div>
                    <div className={s.Asia}>Азия</div>
                    <div className={s.Europe}>Европа</div>
                    <div className={s.northAmerica}>Сев. Америка</div>
                    <div className={s.southAmerica}>Юж. Америка</div>
                    <div className={s.Antarctica}>Антарктика</div>
                    <div className={s.Australia}>Австралия</div>
                </div>
                <div className={s.Slik}>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Exp
