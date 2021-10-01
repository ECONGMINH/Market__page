import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import './rps.scss';
import logo from '../assets/img/header/logo.png'
import iconCollection from '../assets/img/header/iconCollection.png'
Header.propTypes = {
    
};

function Header(props) {
    return (
        <header>
            <div className="grid">
                <div className="header">
                    <div className="header__layout">
                    <div className="btn-list__mb">
                        <img className="icon__mb-tbl" src={iconCollection}/>
                    </div>
                        <a href="" className="header__layout-logo">
                            <img src={logo} alt="" />
                        </a>

                        <ul className="header__layout__menu">
                            <li className="header__layout__menu-item"><a href="">Introduction</a></li>
                            <li className="header__layout__menu-item"><a href="">solution</a></li>
                            <li className="header__layout__menu-item"><a href="">Rate plan</a></li>
                            <li className="header__layout__menu-item"><a href="">login</a></li>
                            <li className="header__layout__menu-item"><a href="">Apply for free use</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </header>
    );
}

export default Header;