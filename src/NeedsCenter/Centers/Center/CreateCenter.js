import React, { Component } from 'react';
import classes from './CreateCenter.module.css';

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
                    
                    <button className={classes.button}>Create Intership</button>
                </form>
            </div>
        )
    }
}

export default CreateProject;
