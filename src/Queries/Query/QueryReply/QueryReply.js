// import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';
import classes from './QueryReply.module.css'

class QueryReply extends Component {
    state = {
        description: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.props.signIn(this.state)
    }
    render(){
        return (
            <div className={classes.Container}>
                    <form onSubmit={this.handleSubmit} className={classes.form}>
                        <div className={classes.inputfield}>
                            <textarea id='description' placeholder='Reply....' className={classes.text_area} onChange={this.handleChange}></textarea>
                        </div>                   
                        <button className={classes.button}>Post Answer</button>
                    </form>
                </div>
        )
    };
    
}

export default QueryReply;