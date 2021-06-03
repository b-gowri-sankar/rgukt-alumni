import React from 'react';
import classes from './Post.module.css';
import moment from 'moment'

const Post = (props) => {
    console.log("this is Post",props.post.createdAt)
    // console.log(props)
    return (
        <div className={classes.Post}>
            <p className={classes.Date}>{moment(props.post.createdAt.toDate()).calendar()} </p>
            <p className={classes.Title}>{props.post.title}</p>
        </div>
  );
};

export default Post;