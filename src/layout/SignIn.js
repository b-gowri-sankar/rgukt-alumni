import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './signIn.module.css';


const signIn= (props) => {
    return (
        <ul>
            <li className={classes.post}><NavLink to='/signup'>Sign Up</NavLink></li>
            <li className={classes.log}><NavLink to='/signin'>Sign In</NavLink></li>
        
        </ul>
    )
}

export default signIn;