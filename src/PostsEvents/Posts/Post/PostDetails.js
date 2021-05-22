import classes from './PostDetails.module.css'
import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const PostDetails=(props)=>{
    console.log('we are in the postdetails')
    const { post } = props;
    console.log(post)
    if (post) {
        return (
            <div className={classes.PostDetails}>
                <h1>{ post.title}</h1>
                <p>Posted Date:</p>
                <p>{post.content}</p>
            </div>
        )
    }
    else {
        return (
        // here you can use spinner
        <div className={classes.PostDetails}>
            <h4>It is still Loading ....</h4>
        </div>
        )
        
    }
}

const mapStateToProps = (state, ownProps ) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    // console.log(centers)
    // console.log(id)
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'}
    ])
)(PostDetails)
