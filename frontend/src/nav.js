import React from 'react';
import logo from './images/logo.jpeg'
import {Link     
} from 'react-router-dom';

import './App.css'


const Nav=()=>{
    return(
        <div>
            <nav>
            <ul className='nav'>
            <a  href='/'> <img className='im' src={logo} alt="" /></a>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Products</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/Signup'>Feedback</Link></li>

            </ul>
            </nav>
        </div>
    )
}

export default Nav;