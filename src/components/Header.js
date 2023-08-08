import {LOGO_LINK}from '../Utilis/constant';
import { useState } from 'react';
const Header=()=>{
const [loginstate,setLogin]=useState('login');
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_LINK}/>
            </div>
            <div className="nav-items">
                <ul className="nav-item">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
               


            </div>
            <button onClick={()=>{setLogin(
                'logout'
            )}}>{loginstate}</button>

        </div>
    )
}
export default Header;