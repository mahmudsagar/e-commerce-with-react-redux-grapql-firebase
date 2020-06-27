import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

import Logo from '../../assets/logo.png'
import {auth} from "../../firebase/utils";

function Header(props) {
    const {currentUser} = props
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="callToAction">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={()=> auth.signOut()}>Log Out</span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

Header.defaultProps = {
    currentUser: null
}

export default Header
