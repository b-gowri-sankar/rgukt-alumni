import React, { Component } from 'react'
import classes from './SignIn.module.css'
import { connect } from 'react-redux'
import { signIn} from '../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password:'',
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
                    <div>
                        {authError ? <p>{authError}</p>: null}
                    </div>
                    <button className={classes.button}> Log In</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }

}

const mapStateToDispatch =(dispatch)=>{
    return {
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(SignIn)
