import React, { useState } from 'react'
import './Navbar.scss'
import Pizza from '../../assets/Pizza.svg'
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className='wrapper container'>
        <div className="wrapper-item">
            <img src={Pizza} alt="pizza" />
            <h1>Куда пицца</h1>
        </div>
        <div className="wrapper-item">
            <Hamburger toggled={isOpen} toggle={setOpen} color='#000000'/>
        </div>
    </div>
  )
}

export default Navbar