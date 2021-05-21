import React, { Component } from 'react'
import classes from './SignIn.module.css'

class SignIn extends Component {
    state = {
        
    }
    handleChange = (e) => {
        console.log(e);
    }
    handleSubmit = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className={classes.Container}>
                <div className={classes.WebsiteName}>
                    <h5>RGUKTRAA</h5>
                </div>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                        Sign In
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='email' id='email' onChange={this.handleChange}  placeholder="email"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='password' id='password' onChange={ this.handleChange} placeholder="password"/>
                    </div>
                    
                    <button className={classes.button}> Log In</button>
                </form>
            </div>
        )
    }
}

export default SignIn
