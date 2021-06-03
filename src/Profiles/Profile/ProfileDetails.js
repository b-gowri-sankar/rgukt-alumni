import React from 'react';
import UniqueDocument from '../../Images/hooks/UniqueDocument'
import Spinner from '../../UI/spinner/spinner'
import classes from './ProfileDetails.module.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

const ProfileDetails = (props) => {

    const { doc } = UniqueDocument('profiles', props.match.params.id);
    // console.log(doc)
    const auth = props.auth;
    if (!auth.uid)
            return <Redirect to='/signin'/>
    if(doc)
    {return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <img src={ doc.avatar } alt={doc.id} width="100" />
                <h4>{doc.name}</h4>
                <p>{doc.branch}</p>
                <p>{doc.company}</p>
            </div>
            <div className={classes.right}>
        <       div className={classes.info}>
                    <h5 className={classes.header}>biography</h5>
                </div>
      	        {doc.biography}
            </div>
        </div>
    )
    }
    else {
        return (
            <Spinner />
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth:state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(ProfileDetails);