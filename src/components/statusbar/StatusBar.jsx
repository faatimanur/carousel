import React from 'react';
import cellular from '../../assets/Cellular.svg';
import wifi from '../../assets/Wifi.svg';
import battery from '../../assets/battery.svg';
import './StatusBar.scss'


const StatusBar = () => {
  return (
    <div className='bar'>
        <h1>9:41</h1>
        <ul>
            <li>
                <img src={cellular} alt="cellular" />
            </li>
            <li>
                <img src={wifi} alt="wifi" />
            </li>
            <li>
                <img src={battery} alt="battery" />
            </li>
        </ul>
    </div>
  )
}

export default StatusBar