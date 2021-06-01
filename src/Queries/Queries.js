import React from 'react';
import Query from './Query/Query';
import useFirestore from '../Images/hooks/useFirestore';
import classes from './Queries.module.css'

const Queries = () => {

    const { docs } = useFirestore('queries');
    // console.log(docs)

    return (
        <div className={classes.Queries}>
        <div className={classes.Queries__title}>
            <p>The Queries</p>
        </div>
        <div className={classes.Queries__list}>
            {docs && docs.map((docs) => (
                <Query docs={ docs }/>
            ))}
            </div>
            </div>
    )
}

export default Queries;
