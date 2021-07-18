import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="logo-contact">
        <div className="logo-name">
            RGURAA
        </div>
        <div className="icons">
            <span>contact us on </span>
            <span className="icon">
                <a href="#">
                    <i className="fab fa-facebook-f fa-sm"></i>
                </a>
            </span>
            <span className="icon">
                <a href="#">
                    <i className="fab fa-twitter fa-sm"></i>
                </a>
            </span>
            <span className="icon">
                <a href="#">
                    <i className="fab fa-linkedin-in fa-sm"></i>
                </a>
            </span>
            <span className="icon">
                <a href="#">
                    <i className="fab fa-instagram fa-sm"></i>
                </a>
            </span>
            <span className="icon">
                <a href="#">
                    <i className="fas fa-envelope fa-sm"></i>
                </a>
            </span>
        </div>
    </div>
    )
}

export default Header
