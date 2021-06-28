import React, { Component } from 'react';
import classes from './CreateCenter.module.css';
import { createCenter } from '../../../store/actions/centerActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from '../../../UI/CustomButton/Button'
import WebsiteTitle from '../../../UI/WebsiteName/WebsiteTitle'
class CreateProject extends Component {
    state = {
        title: '',
        location: '',
        companyName: '',
        description: '',
        openings: '',
        link: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createCenter(this.state)
        this.props.history.push('/internships')
    }
    render() {
        const auth = this.props.auth;
        if (!auth.uid)
            return <Redirect to='/signin'/>
        return (
            <div className={classes.Container}>
                <div className={classes.image}>
                    <img src='./images/internship.svg' alt='internship pic' />
                </div>
                <div className={classes.right}>
                    <WebsiteTitle >RGURAA</WebsiteTitle>
                
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                        Upload Internship for Your Juniors or Students
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='text' id='title' onChange={this.handleChange}  placeholder="title"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='text' id='location' onChange={ this.handleChange} placeholder="location"/>
                    </div>
                    <div className={classes.inputfield}>
                        <textarea id='description' placeholder='description' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='text' id='companyName' onChange={ this.handleChange} placeholder="companyName"/>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}} type='text' id='openings' onChange={ this.handleChange} placeholder="Openings"/>
                    </div>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} style={{boxSizing:'border-box'}}type='text' id='link' onChange={ this.handleChange} placeholder="Link"/>
                    </div>
                    
                    <Button>Create Intership</Button>
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
       createCenter:(center)=> dispatch(createCenter(center))
   } 
} 

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);
