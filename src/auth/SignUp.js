import React, { Component } from 'react'
import classes from './SignUp.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions'
import Button from '../UI/GoogleButton/button'
import { Link } from 'react-router-dom'


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state)
    }
    render() {
        const auth = this.props.auth;
        const authError = this.props.authError;
        if (auth.uid)
            return <Redirect to='/'/>
        return (
            <div className={classes.Container}>
                <div className={classes.image}>
                    <img src='./images/signup.svg' alt='the profile of the student' />
                </div>
                <div className={classes.WebsiteName}>
                    <h5 className={classes.WebsiteTitle}><Link to='/'>RGUKTRAA</Link></h5>
                <Button/>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                        <h5 className={classes.Label}>
                            Or <br />
                        Create Account Amigo,
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='email' id='email' onChange={this.handleChange}  placeholder="email"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='password' id='password' onChange={ this.handleChange} placeholder="password"/>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}} type='text' id='firstName' onChange={ this.handleChange} placeholder="FirstName"/>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='text' id='lastName' onChange={ this.handleChange} placeholder="LastName"/>
                    </div>
                    <div className={classes.authError}>
                        {authError ? <p> {authError}</p>:null}
                        </div>
                    <p className={classes.accountText}>Already Have An Account ? <span className={classes.clickHere}><Link to='/signin'>Click Here</Link></span></p>
                    <button className={classes.button}>Sign Up</button>
                    </form>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
