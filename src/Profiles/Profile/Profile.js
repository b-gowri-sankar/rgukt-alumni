import React from 'react';

import { Link } from 'react-router-dom'

const Profile = (props) => {
    return (
        <Link to={'profile/'+props.doc.id}>
        <div>
            <p>{ props.doc.name}</p>
            <p>{props.doc.batch}</p>
            <p>{props.doc.company}</p>
            <img width="100" height="100" src={props.doc.avatar} alt={props.doc.id} />
            </div>
        </Link>
    )
}

export default Profile;