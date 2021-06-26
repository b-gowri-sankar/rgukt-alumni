import classes from './Query.module.css';
import React from 'react';

import { Link } from 'react-router-dom'


const Query = ({ docs }) => {
    
    // console.log(docs)

    return (
        <div className={classes.Card}>
            <div className={classes.Description}>
               { docs.description}    
            </div>
            <div className={classes.Author}>
                <p className={classes.Author__title}>Posted By {docs.authorFirstName} {docs.authorLastName}</p>
                <Link to={'query/'+docs.id}>
                    <button className={classes.Reply__button} >Replay</button>
                </Link>    
            </div>
        </div>
    )

}

export default Query;