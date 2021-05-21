import React from 'react';
import Centers from './Centers/Centers'
import classes from './NeedsCenter.module.css';

const needsCenter = () => {
    return (
        <div className={classes.NeedsCenter}>
            <div>
            <h1>This is Needs</h1>
            </div>
            <div>
                <Centers />
            </div>
        </div>
    );
}

export default needsCenter