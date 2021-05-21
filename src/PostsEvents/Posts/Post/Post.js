import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.Post}>
            <p className={classes.Date}>date</p>
            <p className={classes.Title}>INDIA COVID HELP LINES</p>
        </div>
  );
};

export default Post;