import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


const Posts = (props) => {
    const posts = props.post;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    return (
        <div className={classes.PostCard}>
            <div>
                <p className={classes.PostsTitle}> News and Updates</p>
            </div>
            <div className={classes.Posts}>
            { posts && posts.map((post) => (
                <Link to={'/post/'+post.id}>
                    <Post post={post} id={post.id} />
                    </Link>
            ))}
            </div>
                {/* <Post />
                <Post />
                <Post />      */}
        </div>
    );
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
        {collection:'posts', orderBy: ['createdAt', 'desc']}
    ])
)(Posts)
