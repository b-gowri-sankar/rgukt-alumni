import React, { Component } from 'react'
import classes from './SignIn.module.css'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { googleProvider, githubProvider } from '../config/authMethods'
import Button from '../UI/GoogleButton/button'
// import socialMediaAuth from '../config/auth'

// import {googleSignIn } from '../store/actions/authActions'


class SignIn extends Component {
    state = {
        email: '',
        password: '',
        FirstName:'',
        LastName: '',
        initials:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.signIn(this.state)
    }

        
    render() {
        const { authError } = this.props;
        const auth = this.props.auth;
        if (auth.uid)
            return <Redirect to='/'/>
        return (
            <div className={classes.SuperContainer}>
            <div className={classes.Container}>
                <div className={classes.left}>
                    <img src='./images/login-card.svg' alt='student studying book' className={ classes.image}/>
                </div>
                <div className={classes.right}>
                
                <div className={classes.WebsiteName}>
                    <Link to='/'><h5>RGUKTRAA</h5></Link>
                </div>
                <div className={classes.Buttons}>
                    <Button />       
                </div>
                
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                            <span style={{color:'grey'}}>OR</span>   <br /><p></p>
                        Welcome, Login Please !!!
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='email' id='email' onChange={this.handleChange}  placeholder="email" required></input>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='password' id='password' required onChange={ this.handleChange} placeholder="password"/>
                    </div>
                    <div>
                        {authError ? <p>{authError}</p>: null}
                    </div>
                    <button className={classes.button}> LogIn</button>
                     <p className={classes.accountText}>Don't Have An Account ? <Link to='/signup'>Click Here</Link></p>       
                </form>
                </div>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }

}

const mapStateToDispatch =(dispatch)=>{
    return {
        signIn: (creds) => dispatch(signIn(creds)),
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(SignIn)
