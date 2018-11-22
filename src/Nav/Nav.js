import React from 'react';
import './Nav.css';
import logo from '../assets/logo.svg';
import Social from '../Social/Social';


const Nav = ({ title, menuitems }) => (
    <div>
        <img className={"logo"} src={logo} alt=""/>
        <div className="header">
            <Social />
            <h1>{title}</h1>
            
        </div>


        {/* <nav>
            <ul>
                {menuitems.map(item => <li key={item.toString()}>
                    <h3>
                        <a href={'/'} >{item}</a>
                    </h3>
                </li>)}
            </ul>
        </nav> */}
    </div>
)

export default Nav