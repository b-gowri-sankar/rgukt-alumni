import React from 'react';
import Profile from './Profile/Profile'
// import { fire } from '../config/fbConfig'
import useFirestored from '../Images/hooks/useFirestored';

const Profiles = () => {
    const { docs } = useFirestored('profiles');
    console.log(docs)
    return (
        <div>
            <div>
                <p>Profiles</p>
        </div>
        <div>
            { docs && docs.map((doc) => (
                <Profile doc={doc}/>
            ))}
            </div>
        </div>
    )
}

export default Profiles;