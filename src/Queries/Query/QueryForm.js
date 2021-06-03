import React, { Component } from 'react';
import classes from './QueryForm.module.css';
import { createQuery } from '../../store/actions/queryActions'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'

class QueryForm extends Component {
    state = {
        description: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createQuery(this.state)
        this.props.history.push('/queries')
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
                        Ask Query
                    </h5>
                    <div className={classes.inputfield}>
                        <textarea id='description' placeholder='description' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>                   
                    <button className={classes.button}>Ask Query</button>
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
       createQuery:(Query)=> dispatch(createQuery(Query))
   } 
}

export default connect(mapStateToProps,mapDispatchToProps)(QueryForm);
