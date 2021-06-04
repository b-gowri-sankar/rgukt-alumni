import React from 'react';
import classes from './Center.module.css';

const center = (props) => {
    console.log(props);
    return (
            <div className={classes.center}>
                <p className={classes.center__title}> { props.center.title}</p>
                <p className={classes.center__name}> {props.center.companyName}.</p>
                <p className={classes.center__location}> {props.center.location} </p>
            </div>

    )
}

export default center;