import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './style.css';

import img from '../../assets/img/nav_logo.png'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <header className={isMobileMenuOpen ? 'mobile-open' : ''}>
            <div className='header-wrapper'>

                <div className='header-actions'>
                    <Link to='/' className='header-logo'>
                        <img src={img} alt="antiga-wine-logo" />
                    </Link>

                    <div 
                        className='menu-icon'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
                    </div>
                </div>

                <nav className='navbar'>

                    <div className='menu-icon'>
                        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <div className='nav-link'>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='/antiga'>
                            Antiga
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='menu'>
                            Menu
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='/menu-vinhos'>
                            Menu Vinhos
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='/contactos'>
                            Contactos
                        </Link>
                    </div>
                </nav>

                <ul 
                    className='nav-links-mobile'
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/antiga' className='nav-links'>
                            Antiga
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='menu' className='nav-links'>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/menu-vinhos' className='nav-links'>
                            Menu Vinhos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactos' className='nav-links'>
                            Contactos
                        </Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}



export default Header;