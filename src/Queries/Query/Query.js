import classes from './Query.module.css';
import React from 'react';


const Query = ({ docs }) => {
    
    console.log(docs)

    return (
        <div className={classes.Card}>
            <div className={classes.Description}>
               { docs.description}    
            </div>
            <div className={classes.Author}>
                <p className={classes.Author__title}>Posted By {docs.authorFirstName} { docs.authorLastName }</p>
                <button className={classes.Reply__button} >Replay</button>      
                  </div>
                  </div>
    )

}

export default Query;