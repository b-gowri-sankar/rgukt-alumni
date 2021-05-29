// import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';
import classes from './QueryReply.module.css';
import { connect } from 'react-redux'
import { createReply } from '../../../store/actions/replyActions';

class QueryReply extends Component {
    state = {
        description: '',
        id:this.props.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createReply(this.state);
        // this.props.signIn(this.state)
    }
    render() {
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
const mapDispatchToProps = (dispatch) => {
    return {
       createReply:(Query)=> dispatch(createReply(Query))
   } 
}

export default connect(null,mapDispatchToProps)(QueryReply);