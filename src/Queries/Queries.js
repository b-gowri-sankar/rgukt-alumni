import React from 'react';
import Query from './Query/Query';
import useFirestore from '../Images/hooks/useFirestore'

const Queries = () => {

    const { docs } = useFirestore('queries');
    // console.log(docs)

    return (
        <div>
            {docs && docs.map((docs) => (
                <Query docs={ docs }/>
            ))}
        </div>
    )
}

export default Queries;
