import classes from './input.module.css';
import React from 'react';

const Input = (props) => {
    return (
        <div className={classes.input__data}>
            <input type='text' placeholder='name'/>
            <label>Name</label>
        </div>
    )
}

export default Input;