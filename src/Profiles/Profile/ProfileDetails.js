import React from 'react';
import UniqueDocument from '../../Images/hooks/UniqueDocument'

const ProfileDetails = (props) => {

    const { doc } = UniqueDocument('profiles', props.match.params.id);
    console.log(doc)
    if(doc)
    {return (
        <div>
            <img width="100" height="100" src={ doc.avatar } alt={doc.id} />
            <p>{doc.name}</p>
            <p>{doc.branch}</p>
            <p>{doc.company}</p>
            <p>{doc.biography}</p>
        </div>
    )
    }
    else {
        return (
            <h1> It is still loading ....</h1>
        )
    }
}

export default ProfileDetails;