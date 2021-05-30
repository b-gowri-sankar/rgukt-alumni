import React from 'react';
import SameFieldDocuments from '../../Images/hooks/SameFieldDocuments'

const QueryReplyList = (props) => {

    const { docs } = SameFieldDocuments("replies", props.id)
    
    console.log(docs)
    
    return (
        <ul>
            {docs && docs.map((doc) => (
                <li key={doc.id}> {doc.description} </li>
            ))}
        </ul>
    )
}

export default QueryReplyList;