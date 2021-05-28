import classes from './Query.module.css';
import React from 'react';


const Query = () => {
    
    return (
        <div className={classes.Card}>
            <div className={classes.Description}>
                Hello All, I am a graduate student at Brown University and looking for internships in the US for 2021 summer in Machine learning/Data science. Any help/leads/referrals would be very very helpful.    
            </div>
            <div className={classes.Author}>
                <p className={classes.Author__title}> Peeyush Kumar Agarwal</p>
                <button className={classes.Reply__button} >Replay</button>      
                  </div>
                  </div>
    )

}

export default Query;