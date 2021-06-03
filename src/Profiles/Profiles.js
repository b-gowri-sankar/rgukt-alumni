import React from 'react';
import Profile from './Profile/Profile'
// import { fire } from '../config/fbConfig'
import useFirestored from '../Images/hooks/useFirestored';
import classes from './Profiles.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
const Profiles = (props) => {
    const { docs } = useFirestored('profiles');
    // console.log(docs)
    const auth = props.auth;
    if (!auth.uid)
            return <Redirect to='/signin'/>

    return (
        <div className={classes.Profiles}>
            <div>
                <p>Profiles</p>
            </div>
            <div className={classes.Profiles__profile}>
            { docs && docs.map((doc) => (
                <Profile doc={doc} key={doc.id}/>
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
  
  export default connect(mapStateToProps)(Profiles);