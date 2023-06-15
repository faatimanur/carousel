import React from 'react';
import './TimerComp.scss';
import locationImg from '../../assets/Location.svg'
import downImg from '../../assets/Down.svg'
import Timer from './timer/Timer';

const TimerComp = () => {
  return (
    <div className="parent">
        <div className='wrapper container'>
            <div className="wrapper-item item-1">
                <img src={locationImg} alt="location" />
                <p>Москва</p>
                <img src={downImg} alt="down" />
            </div>
            <div className='wrapper-item'>
                <p>Среднее время доставки*:</p>
                <Timer/>
            </div>
        </div>
    </div>
  )
}

export default TimerComp