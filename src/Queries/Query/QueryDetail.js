import React from 'react';
import classes from './QueryDetail.module.css';
import UniqueDocument from '../../Images/hooks/UniqueDocument';
import QueryReply from './QueryReply/QueryReply';
import QueryReplyList from './QueryReplyList';
import Spinner from '../../UI/spinner/spinner'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


const QueryDetails = (props) => {
    console.log(props.match.params.id)

    const { doc } = UniqueDocument('queries', props.match.params.id);
    const auth = props.auth;
    if (!auth.uid)
        return <Redirect to='/signin'/>


    if (doc) {
        return (
            <div className={classes.QueryDetails}>
                <div className={classes.Card}>
                    <div className={classes.Description}>
                        <h4> {doc.description} </h4>
                        
                    </div>
                    <div className={classes.Author}>
                        <p className={classes.Author__title}>Posted By {doc.authorFirstName} {doc.authorLastName} </p>  
                    </div>
                </div>
               
                <div>
                    <QueryReplyList id={ props.match.params.id }/>
                </div>
                <div>
                        <QueryReply id={ props.match.params.id}/>
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
  
  export default connect(mapStateToProps)(QueryDetails);