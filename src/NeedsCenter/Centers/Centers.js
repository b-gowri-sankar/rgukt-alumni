import React from 'react';
import Center from './Center/Center';
import classes from './Centers.module.css';
import { connect } from 'react-redux';

const Centers = (props) => {
    const centers = props.center;
    return (
        <div className={classes.Centers}>
            <div>
                <p className={classes.Centers__title}>Internships</p>
            </div>
            <div>
                {centers && centers.map(
                    center => (
                        <Center center={center} key={ center.id }/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        center: state.center.projects 
    }
}

export default connect(mapStateToProps)(Centers);