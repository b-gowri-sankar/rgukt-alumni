import React from 'react';
import Profile from './Profile/Profile'
// import { fire } from '../config/fbConfig'
import useFirestored from '../Images/hooks/useFirestored';

const Profiles = () => {
    const { docs } = useFirestored('profiles');
    console.log(docs)
    return (
        <div>
            { docs && docs.map((doc) => (
                <Profile doc={doc}/>
            ))}
        </div>
    )
}

export default Profiles;