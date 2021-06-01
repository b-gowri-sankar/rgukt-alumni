import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Center from '../NeedsCenter/Centers/Center/Center'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import classes from './PostNotify.module.css'



const CenterNotify = (props) => {
    // console.log("Notfiy", props.center)
    
    const centers = props.center;
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>
    return (
        <div className={classes.Container}>
            <h4 className={classes.internship__title}>Internships</h4>
            <div>
            {centers && centers.map(
                    center => (
                    <Link to={'/internship/' + center.id}>
                        <Center center={center} key={ center.id }/>
                    </Link>
                ))}
            </div>
            <Link to='/internships'>
            <div className={classes.Post}>
                <p className={classes.Date}>View More</p>
            </div>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log("notification chamber",state.firestore.data.centers)
    return {
        center: state.firestore.ordered.centers,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'centers', limit: 2, orderBy: ['createdAt', 'desc']}
    ])
)(CenterNotify)
