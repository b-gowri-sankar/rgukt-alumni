import classes from './QueryReplyList.module.css';
import React from 'react';
import SameFieldDocuments from '../../Images/hooks/SameFieldDocuments'

const QueryReplyList = (props) => {

    const { docs } = SameFieldDocuments("replies", props.id)
    
    console.log(docs)
    
    return (
        <ul className={classes.QueryReplyList}>
            {docs && docs.map((doc) => (
                <li
                    className={classes.QueryReplyList__item}
                    key={doc.id}>
                    {doc.description} posted by 
                    <span>
                          {doc.authorFirstName} {doc.authorLastName}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default QueryReplyList;