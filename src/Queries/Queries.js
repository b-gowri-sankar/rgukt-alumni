import React from 'react';
import Query from './Query/Query';
import useFirestore from '../Images/hooks/useFirestore';
import classes from './Queries.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const Queries = (props) => {
    const auth = props.auth;
    
    const { docs } = useFirestore('queries');
    // console.log(docs)
    if (!auth.uid)
            return <Redirect to='/signin'/>

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

const mapStateToProps = (state) => {
    return {
      auth:state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(Queries);
