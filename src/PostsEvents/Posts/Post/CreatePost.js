import React, { Component } from 'react'
// import classes from '../../../NeedsCenter/Centers/Center/CreateCenter.module.css'
import { createPost } from '../../../store/actions/postActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import classes from './createPost.module.css'
import Button from '../../../UI/CustomButton/Button'
import WebsiteTitle from '../../../UI/WebsiteName/WebsiteTitle'


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
        this.props.history.push('/posts')

    }
    render() {
        const auth = this.props.auth;
        if (!auth.uid)
            return <Redirect to='/signin'/>
        return (
            <div className={classes.Container}>
                <div className={classes.image}>
                    <img src='./images/post.svg' alt='query pic' />
                </div>
                <div className={classes.right}>
                    <WebsiteTitle >RGURAA</WebsiteTitle>
                
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <h5 className={classes.Label} style={{textAlign:'center', color:'gray', marginTop:'40px', marginBottom:'29px'}}>
                        Welcome, Create A New Post
                    </h5>
                    <div className={classes.inputfield}>
                        <input className={classes.inputField} type='text' id='title' onChange={this.handleChange}  placeholder="title"/>
                        
                    </div>
                    <div className={classes.inputfield}>
                        <textarea id='content' placeholder='content' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>
                    
                    <Button> Create Post </Button>
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
       createPost:(post)=> dispatch(createPost(post))
   } 
} 

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)
