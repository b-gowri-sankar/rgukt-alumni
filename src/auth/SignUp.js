import React, { Component } from 'react'
import classes from './SignIn.module.css'

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
        console.log(this.state)
    }
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.WebsiteName}>
                    <h5>RGUKTRAA</h5>
                </div>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                        Sign Up
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
                    
                    <button className={classes.button}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp
