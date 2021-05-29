import React from 'react';
import classes from './Query.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
// import UniqueDocument from '../../Images/hooks/UniqueDocument'

const QueryDetails = (props) => {
    console.log(props.match.params.id)

    // const { doc } = UniqueDocument('queries', props.match.params.id);
    // console.log('This is documetns', doc.description)

    const { query } = props;

    // console.log(query)

    if (query) {
        return (
            <div className={classes.Card}>
                <div className={classes.Description}>
                    {query.description}
                </div>
                <div className={classes.Author}>
                    <p className={classes.Author__title}>Posted By {query.authorFirstName} {query.authorLastName} </p>  
                </div>
            </div>
        )
    }
    else {
        return (
            <h1> It is Still Loading</h1>)
    }
    
}
const mapStateToProps = (state, ownProps ) => {
    const id = ownProps.match.params.id;
    // console.log(state)
    const queries = state.firestore.data.queries;
    // console.log(queries)
    const query = queries ? queries[id] : null;
    // console.log(query)
    // console.log(centers)
    // console.log(id)
    return {
        query: query,
        auth:state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'queries'}
    ])
)(QueryDetails)