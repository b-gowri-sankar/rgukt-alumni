import React, { Component } from 'react'
// import classes from './SignIn.module.css'
import classes from '../../../auth/SignIn.module.css'
import { connect } from 'react-redux'
import { createEvent } from '../../../store/actions/eventActions'
import { Redirect } from 'react-router-dom'


class CreateEvent extends Component {
    state = {
        title: '',
        date: '',
        time: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createEvent(this.state)
    }
    render() {
        const auth = this.props.auth;
        if (!auth.uid)
            return <Redirect to='/signin'/>
        return (
            <div className={classes.Container}>
                <div className={classes.WebsiteName}>
                    <h5>RGUKTRAA</h5>
                </div>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                        Create Event
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='text' id='title' onChange={this.handleChange}  placeholder="title"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='date' id='date' onChange={ this.handleChange} placeholder="Date"/>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}} type='text' id='time' onChange={ this.handleChange} placeholder="time"/>
                    </div>
                    <div className={classes.inputfield}>
                        <textarea id='content' placeholder='content' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>
                    
                    <button className={classes.button}>Create Event</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       createEvent:(event)=> dispatch(createEvent(event))
   } 
} 

export default connect(mapStateToProps,mapDispatchToProps)(CreateEvent)
