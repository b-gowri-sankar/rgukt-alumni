import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SignedIn.module.css';
import {connect} from 'react-redux';
import { signOut } from '../store/actions/authActions'

const SignedInLinks = (props) => {
    console.log("this is signed page",props)
    return (
        <ul className={classes.SignedIn}>
            <li className={classes.post}><NavLink to='/createintern'>New Post</NavLink></li>
            <li className={classes.log}><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
            <li className={classes.profile}><NavLink to='/'>{ props.profile.initials}</NavLink></li>
        
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        profile:state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: ()=>dispatch(signOut())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);