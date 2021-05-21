import React from 'react';
import classes from './Need.module.css'

const Need = (props) => {
    return (
        <div className={classes.Need}>
            <div className={classes.Need__description}>
                Hello All, I am a graduate student at Brown University and looking for internships in the US for 2021 summer in Machine learning/Data science. Any help/leads/referrals would be very very helpful.    
            </div>
            <div className={classes.Need__author}>
                <p> Peeyush Kumar Agarwal</p>
                <button className={classes.Need__button}>Replay</button>      
            </div>
        </div>
    )
}
export default Need;