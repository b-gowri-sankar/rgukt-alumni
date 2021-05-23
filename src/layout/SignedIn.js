import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SignedIn.module.css';
import {connect} from 'react-redux';
import { signOut } from '../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul>
            <li className={classes.post}><NavLink to='/createintern'>New Post</NavLink></li>
            <li className={classes.log}><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
            <li className={classes.profile}><NavLink to='/'>NN</NavLink></li>
        
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: ()=>dispatch(signOut())
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks);