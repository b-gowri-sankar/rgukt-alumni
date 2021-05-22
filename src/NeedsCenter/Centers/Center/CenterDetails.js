import React from 'react';
import classes from './CenterDetails.module.css'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const CenterDetails = (props) => {
    // const id = props.match.params.id;
    console.log(props);
    const { center } = props;
    console.log(center)
    if (center) {
        return (
            <div className={classes.CenterDetails}>
                <div className={classes.Center_card}>
                    <h4>  {props.center.title}</h4>
                    <p> {props.center.location} </p>
                    <p>The Company: {props.center.companyName}</p>
                </div>
                <div className={classes.Center_description}>
                    <p>{props.center.description}</p>
                    <p><strong>The no.of openings:</strong>{props.center.openings}</p>
                    {/* <p><strong>Last Date to Apply: </strong>29/07/2001</p> */}
                    <a href={props.center.link}>Click Here to apply</a>
                </div>
            </div>
        )
    }
    else {
        return (
        // here you can use spinner
        <div className={classes.Center_card}>
            <h4>It is still Loading ....</h4>
        </div>
        )
        
    }
    
}

const mapStateToProps = (state, ownProps ) => {
    const id = ownProps.match.params.id;
    const centers = state.firestore.data.centers;
    const center = centers ? centers[id] : null;
    // console.log(centers)
    // console.log(id)
    return {
        center: center
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'centers'}
    ])
)(CenterDetails)