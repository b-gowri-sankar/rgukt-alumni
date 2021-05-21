import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SignedIn.module.css';


const SignedInLinks = () => {
    return (
        <ul>
            <li className={classes.post}><NavLink to='/'>New Post</NavLink></li>
            <li className={classes.log}><NavLink to='/'>Log Out</NavLink></li>
            <li className={classes.profile}><NavLink to='/'>NN</NavLink></li>
        
        </ul>
    )
}

export default SignedInLinks;