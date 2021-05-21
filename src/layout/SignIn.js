import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './signIn.module.css';


const signIn= (props) => {
    return (
        <ul>
            <li className={classes.post}><NavLink to='/'>Sign Up</NavLink></li>
            <li className={classes.log}><NavLink to='/'>Sign In</NavLink></li>
        
        </ul>
    )
}

export default signIn;