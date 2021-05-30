import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <p>{ props.doc.name}</p>
            <p>{props.doc.batch}</p>
            <p>{props.doc.company}</p>
            <img width="100" height="100" src={props.doc.avatar} alt={props.doc.id} />
        </div>
    )
}

export default Profile;