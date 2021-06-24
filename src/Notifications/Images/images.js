import React from 'react';
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import classes from './images.module.css';
// import Carousel from 'react-elastic-carousel'
import Spinner from '../../UI/spinner/spinner';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';

import { Link } from 'react-router-dom'

const images = (props) => {

    const { images } = props;
    console.log("this is images",images)
    if (images) {
        
        return (
            // <main className={classes.grid}>
            //     {images && images.map((image) => (
            //         <article className={classes.article} key={image.id}>
            //             <img className={classes.image} src={image.url} alt="Sample" />
            //         </article>
            //     ))}
            // </main>
            <div className={classes.imgGrid}>
                <div className={classes.firstrow}>
                    <img src={images[0].url} alt='sample' />
                </div>
                <div className={classes.row}>
                    <div>
                        <img src={images[1].url} alt='sample' />
                    </div>
                    <div>
                        <img src={images[2].url} alt='sample' />
                    </div>
                </div>
                <div className={classes.row}>
                    <div>
                        <img src={images[3].url} alt='sample' />
                    </div>
                    <div className={classes.ViewMore}>
                        <PermMediaOutlinedIcon />
                        <Link to='/images'>
                            <span>View Gallery </span>
                        </Link>     
                    </div>
                </div>
            </div>
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
        {collection:'images', limit:4, orderBy: ['createdAt', 'desc']}
    ])
)(images)