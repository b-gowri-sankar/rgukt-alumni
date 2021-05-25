import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
    
    const handleClick = (e) => {
        setSelectedImg(null);
    }

    return (
        <div className={classes.backdrop} onClick={handleClick}>
            <img src={selectedImg} alt='enlared pic' />
        </div>
    );
}

export default Modal;