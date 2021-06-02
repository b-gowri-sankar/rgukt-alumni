import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Post from '../../PostsEvents/Posts/Post/Post'
import classes from './PostNotify.module.css'

const PostNotify = (props) => {
    const posts = props.post;
    return (
        <div>
            <h4 className={classes.internship__title}>Posts</h4>
            { posts && posts.map((post) => (
                <Link to={'/post/'+post.id}>
                    <Post post={post} id={post.id} />
                    </Link>
            ))}
            <Link to='/posts'>
            <div className={classes.Post}>
                <p className={classes.Date}>View More</p>
            </div>
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        // center: state.center.projects for demo purposes
        post: state.firestore.ordered.posts,
        auth: state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts', limit:2, orderBy: ['createdAt', 'desc']}
    ])
)(PostNotify)

