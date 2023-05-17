import React from 'react'
import './../Header/Header.css'

function Header() {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="navbar__inner">
                    <div className="navbar__left"></div>
                    <div className="navbar__center">
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <a href="#">Home</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#">About</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#">Blog</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#">Contact</a>
                            </li>
                            <li className="navbar__item">
                                <a href="#">Courses</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul className='navbar__list-right'>
                            <li className="navbar__item-right">
                                <a href="#" className='link__right'><i class="bi bi-search"></i>Search</a>
                            </li>
                            <li className="navbar__item-right">
                                <a href="#" className='link__right'><i class="bi bi-cart-fill"></i>Cart</a>
                            </li>
                            <li className="navbar__item-right">
                                <a href="#" className='link__signIn'>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;