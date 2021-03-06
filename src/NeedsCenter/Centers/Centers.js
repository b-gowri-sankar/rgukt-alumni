import React from 'react';
import Center from './Center/Center';
import classes from './Centers.module.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const Centers = (props) => {
    const centers = props.center;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    return (
        <div className={classes.Centers}>
            <div className={classes.Centers__right}>
                <p className={classes.Centers__title}>All Internships</p>
            </div>
            <div className={classes.Centers__left}>
                {centers && centers.map(
                    center => (
                    <Link to={'/internship/' + center.id}>
                        <Center center={center} key={ center.id }/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        // center: state.center.projects for demo purposes
        center: state.firestore.ordered.centers,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'centers', orderBy: ['createdAt', 'desc']}
    ])
)(Centers)