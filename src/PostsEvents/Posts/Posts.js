import React from 'react'
import classes from './Posts.module.css'
import Post from './Post/Post';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Link} from 'react-router-dom'

const Posts = (props) => {
    const posts = props.post;
    return (
        <div className={classes.PostCard}>
            <p className={classes.PostsTitle}> News and Updates</p>
            { posts && posts.map((post) => (
                <Link to={'/post/'+post.id}>
                    <Post post={post} id={post.id} />
                    </Link>
            ))}
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
        post:state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'}
    ])
)(Posts)
