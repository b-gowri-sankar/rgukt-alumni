import React from 'react';
import classes from './CenterDetails.module.css'

const CenterDetails = (props) => {
    return (
        <div className={classes.CenterDetails}>
            <div className={classes.Center_card}>
                <h4>  Title of The Internship </h4>
                <p> Location </p>
                <p>The Company: The Company Name</p>
            </div>
            <div className={classes.Center_description}>
                <p>the company has something to say about this project. This project contains all the information about the data</p>
                <p><strong>The no.of openings:</strong> 10</p>
                <p><strong>Last Date to Apply: </strong>29/07/2001</p>
                <a href='https://www.google.com'>Click Here to apply</a>
            </div>
        </div>
    )
}

export default CenterDetails;