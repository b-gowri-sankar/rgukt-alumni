import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import classes from './images.module.css';

const images = (props) => {

    const { images } = props;
    console.log(images)
    if (images) {
        
        return (
            <main className={classes.grid}>
                {images && images.map((image) => (
                    <article>
                        <img src={image.url} alt="Sample" />
                    </article>
                ))}
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // center: state.center.projects for demo purposes
        images: state.firestore.ordered.images
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'images', limit:4, orderBy: ['createdAt', 'desc']}
    ])
)(images)