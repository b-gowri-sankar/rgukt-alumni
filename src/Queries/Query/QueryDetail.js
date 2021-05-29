import React from 'react';
import classes from './Query.module.css';
import UniqueDocument from '../../Images/hooks/UniqueDocument';
import QueryReply from './QueryReply/QueryReply'

const QueryDetails = (props) => {
    console.log(props.match.params.id)

    const { doc } = UniqueDocument('queries', props.match.params.id);
    // console.log('This is documetns', doc.description)

    if (doc) {
        return (
            <div>
            <div className={classes.Card}>
                <div className={classes.Description}>
                    {doc.description}
                </div>
                <div className={classes.Author}>
                    <p className={classes.Author__title}>Posted By {doc.authorFirstName} {doc.authorLastName} </p>  
                </div>
            </div>
            <div>
                <QueryReply />
                </div>
                </div>
        )
    }
    else {
        return (
            <h1> It is still loading ....</h1>
        )
    }
    
}

export default QueryDetails;