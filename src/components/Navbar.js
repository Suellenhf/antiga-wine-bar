import React, { useState } from "react";
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import img from '../img/nav_logo.png'
import Menu from '../components/pages/Menu'

function Navbar() {
    const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={img} alt="antiga-wine-logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/antiga' className='nav-links' onClick={closeMobileMenu}>
                            Antiga
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu-vinhos' className='nav-links' onClick={closeMobileMenu}>
                            Menu Vinhos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactos' className='nav-links' onClick={closeMobileMenu}>
                            Contactos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

// continuar dos 21min do video, onde ia começar a implementar as ul do menu de navegação

export default Navbar;