import React from 'react';
import Profile from './Profile/Profile'
// import { fire } from '../config/fbConfig'
import useFirestored from '../Images/hooks/useFirestored';
import classes from './Profiles.module.css'

const Profiles = () => {
    const { docs } = useFirestored('profiles');
    console.log(docs)
    return (
        <div className={classes.Profiles}>
            <div>
                <p>Profiles</p>
            </div>
            <div className={classes.Profiles__profile}>
            { docs && docs.map((doc) => (
                <Profile doc={doc}/>
            ))}
            </div>
        </div>
    )
}

export default Profiles;