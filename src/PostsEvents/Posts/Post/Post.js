import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    console.log(props)
    return (
        <div className={classes.Post}>
            <p className={classes.Date}>date</p>
            <p className={classes.Title}>{props.post.title}</p>
        </div>
  );
};

export default Post;