import React, { Component } from 'react'
// import classes from './SignIn.module.css'
import classes from '../../../NeedsCenter/Centers/Center/CreateCenter.module.css'
import { connect } from 'react-redux'
import { createEvent } from '../../../store/actions/eventActions'
import { Redirect } from 'react-router-dom'
import Button from '../../../UI/CustomButton/Button'
import WebsiteTitle from '../../../UI/WebsiteName/WebsiteTitle'


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
        this.props.createEvent(this.state);
        this.props.history.push('/events')

    }
    render() {
        const auth = this.props.auth;
        if (!auth.uid)
            return <Redirect to='/signin'/>
        return (
            <div className={classes.Container}>
                <div>
                    <img src='./images/events.svg' alt='event pic' style={{ width:'100%', height:'100%'} }/>
                </div>
                <div className={classes.WebsiteName}>
                <WebsiteTitle>
                        RGURAA
                    </WebsiteTitle>
                
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 style={{textAlign:'center', color:'gray', marginTop:'20px', marginBottom:'10px'}}>
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
                    
                    <Button>Create Event</Button>
                    </form>
                    </div>
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
