import React, { Component } from 'react'
import classes from '../../../NeedsCenter/Centers/Center/CreateCenter.module.css'
import { createPost } from '../../../store/actions/postActions'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'


class CreatePost extends Component {
    state = {
        title: '',
        content :'',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
         })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createPost(this.state)
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
                        Create Post
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='text' id='title' onChange={this.handleChange}  placeholder="title"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <textarea id='content' placeholder='content' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>
                    
                    <button className={classes.button}> Create Post</button>
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
       createPost:(post)=> dispatch(createPost(post))
   } 
} 

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
