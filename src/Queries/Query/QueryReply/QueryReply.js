import React from 'react';
import classes from './QueryReply.module.css'

const QueryReply = () => {
    return (
        <div className={classes.Container}>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <div className={classes.inputfield}>
                        <textarea id='description' placeholder='Reply....' className={classes.text_area} onChange={this.handleChange}></textarea>
                    </div>                   
                    <button className={classes.button}>Post Answer</button>
                </form>
            </div>
    )
}