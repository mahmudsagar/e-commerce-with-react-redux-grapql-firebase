import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

import Logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="callToAction">
                    <ul>
                        <li>
                            <Link to="/registration">
                                register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header
