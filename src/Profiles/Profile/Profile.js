import React from 'react';
import classes from './Profile.module.css'
import { Link } from 'react-router-dom'

const Profile = (props) => {
    return (
        <Link to={'profile/'+props.doc.id}>
            <div className={classes.card}>
                <div className={ classes.profilesidebar}>
                    <img
                        className={classes.profileimage}
                        width="100"
                        height="100"
                        src={props.doc.avatar}
                        alt={props.doc.id} />
                </div>
                <div className={classes.profilemain}>
                    <h2 className={classes.profilename}>{ props.doc.name}</h2>
                    <p class={classes.profileposition}>{props.doc.branch}</p>
                    <p class={classes.profilebody}>{props.doc.company}</p>
                </div>
            </div>
        </Link>
    )
}

export default Profile;