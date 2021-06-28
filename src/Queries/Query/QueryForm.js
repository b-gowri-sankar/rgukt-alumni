import React, { Component } from 'react';
import classes from './QueryForm.module.css';
import { createQuery } from '../../store/actions/queryActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from '../../UI/CustomButton/Button'
import WebsiteTitle from '../../UI/WebsiteName/WebsiteTitle'

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
                <div>
                    <img src='./images/query.svg' alt='query' style={{ width:'100%', height:'100%' }}/>
                </div>
                <div className={classes.right}>
                    <WebsiteTitle>RGURAA</WebsiteTitle>
                
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label}>
                        Ask Query
                    </h5>
                    <div className={classes.inputfield}>
                        <textarea id='description' placeholder='description' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>                   
                    <Button>Ask Query</Button>
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
       createQuery:(Query)=> dispatch(createQuery(Query))
   } 
}

export default connect(mapStateToProps,mapDispatchToProps)(QueryForm);
