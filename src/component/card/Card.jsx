import { useState, useRef } from 'react'
import React from 'react'
import './Card.css'
import Arrow from '../image/arrow.svg'

const Card = () => {

   const CardComponents = [
    {
      title: 'Австрия',
      price: '1490',
      place: 'Зимний курорт',
      rating: 'f',
      id: '1',
    },
    {
      title: 'Перу',
      price: '2300',
      place: 'Мачу Пиччу',
      rating: 'a',
      id: '2',
    }, 
    { 
      title: 'Кроатиа', 
      price: '4500', 
      place: 'Хвар', 
      rating: 'a', 
      id: '3' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '4' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '5' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '6' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '7' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '8' 
    }, 
    { 
      title: 'Россия', 
      price: '4450', 
      place: 'Вади Муза', 
      rating: 'a', 
      id: '9' 
    }
   ]
   const [scrollX, setScrollX] = useState(0);
   const containerRef = useRef(null);
   const handleScroll = () => {
    if (scrollX === 0) {
      setScrollX(0);
    }
    else {
      setScrollX(scrollX-400);
    }
   }
   const handleScroll2 = () => {
    setScrollX(scrollX+400);
    if (scrollX === 2400) {
      setScrollX(2400);
    }
    else {
      setScrollX(scrollX+400);
    }
   }
   ;

  return (
    <div>
    <div style={{display:'flex', justifyContent:'space-around',transform:`translateX(-${scrollX}px)`, transition:'0.5s'}} className='cardContainer'>
      {CardComponents.map(card => (
        <div key={card.id} className='sobaka'>
        <div className={`cardBackground${card.id}`}>
          <div className='Space'></div>
          <div className='Content'>
          <div className='Info'>
          <div className='Place'><div className='Map'></div>{card.title}</div>
          <div className='Name'>{card.place}</div>
          <div className='Price'>
            <div className='From'>От</div>
            <div className='Cost'>
              <div>
              € 
              </div>
              <div>{card.price}</div>
              </div>
          </div>
          </div>
          <div className='Rate'>
          <div className='Rating'></div>
          </div>
          </div>
        </div>
        </div>
      ))}
    </div>
    <button className='arrowReverse' onClick={handleScroll} ><img className='arrowLeft' src={Arrow}/></button>
    <button className='Arrow' onClick={handleScroll2} ><img className='arrowRight' src={Arrow}/></button>
    </div>
  )
}

export default Card
