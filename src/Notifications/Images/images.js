import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import classes from './images.module.css';
import Carousel from 'react-elastic-carousel'
import Spinner from '../../UI/spinner/spinner';

const images = (props) => {

    const { images } = props;
    console.log(images)
    if (images) {
        
        return (
            <main className={classes.grid}>
                <Carousel>
                {images && images.map((image) => (
                    <article className={classes.article} key={image.id}>
                        <img className={classes.image} src={image.url} alt="Sample" />
                    </article>
                ))}
                </Carousel>
            </main>
        )
    }
    else {
        return <Spinner />
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
        {collection:'images', limit:10, orderBy: ['createdAt', 'desc']}
    ])
)(images)