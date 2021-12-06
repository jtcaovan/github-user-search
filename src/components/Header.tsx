import React from "react";
import './Header.scss'
import moon from '../assets/icon-moon.svg'

const Header = () => 
    <header>
        <h1>devfinder</h1>
        <div className='toggleContent'>
            <span className='toggleName'>DARK</span><img src={moon} alt=''/>
        </div>
    </header>
    
export default Header