import React from 'react'
import { googleProvider, githubProvider } from '../../config/authMethods'
import { connect } from 'react-redux'
import { googleSignIn } from '../../store/actions/authActions'
import classes from './button.module.css'

const button = (props) => {

    const handleOnClick = (provider) => {
        props.googleSignIn(provider)
    }
    return (
        <>
            <button onClick={() => handleOnClick(googleProvider)} className={classes.button}>
                <img src='./images/google_logo.svg' alt='logo' />
                <span>SignIn With Google </span>
            </button>
            <button onClick={() => handleOnClick(githubProvider)} className={classes.button}>
                <img src='./images/github.svg' alt='github logo' />
                <span>SignIn With gitHub </span>
            </button>
        </>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        googleSignIn: ( provider ) => dispatch(googleSignIn(provider))
    }
}

export default connect(null,mapStateToDispatch)(button)
