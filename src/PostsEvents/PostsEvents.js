import React, { Component } from 'react';
import Posts from './Posts/Posts';
import Events from './Events/Events';
import classes from './PostsEvents.module.css';

export default class PostsEvents extends Component {
    render() {
        return (
            <div className={classes.PostsEvents}>
                    <Posts />
                    <Events />
            </div>
        )
    }
}
