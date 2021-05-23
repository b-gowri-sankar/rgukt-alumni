import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Post from '../PostsEvents/Posts/Post/Post'

const PostNotify = (props) => {
    const posts = props.post;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    return (
        <div>
            <h4>Posts</h4>
            { posts && posts.map((post) => (
                <Link to={'/post/'+post.id}>
                    <Post post={post} id={post.id} />
                    </Link>
            ))}
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

