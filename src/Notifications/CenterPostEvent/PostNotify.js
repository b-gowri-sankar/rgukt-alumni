import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Post from './CenterPostEvents/Post'
import classes from './PostNotify.module.css'
// import LocalPostOfficeOutlinedIcon from '@material-ui/icons/LocalPostOfficeOutlined';

const PostNotify = (props) => {
    const posts = props.post;
    return (
        <div className={classes.PostNotify}>
            {/* <div>
                <LocalPostOfficeOutlinedIcon />
            Country/region
            </div> */}
            <div className={classes.Header}>
                {/* <LocalPostOfficeOutlinedIcon className={ classes.icon }/> */}
                <h4 className={classes.internship__title}>Posts</h4>
            </div>
            { posts && posts.map((post) => (
                <Link to={'/post/'+post.id}>
                    <Post post={post} id={post.id} key={post.id}/>
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
        {collection:'posts', limit:4, orderBy: ['createdAt', 'desc']}
    ])
)(PostNotify)

