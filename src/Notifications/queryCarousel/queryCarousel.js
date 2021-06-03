import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import { Link } from 'react-router-dom'
import QueryNotify from '../../Queries/Query/Query'
import Carousel from 'react-elastic-carousel'
import Spinner from '../../UI/spinner/spinner'
import classes from './queryCaousel.module.css'

// import classes from './ProfileCarousel.module.css'


const QueryCarousel = (props) => {
    const { queries } = props;

    console.log('queries', queries)

    // const breakPoints = [
    //     { width: 500, itemsToShow:1},
    //     { width: 768, itemsToShow:1},
    //     { width: 1200, itemsToShow:2},
    //     { width: 1500, itemsToShow:2},

    // ]
    if(queries)

    {return (
        <div className={classes.queryCarousel}>
            <Carousel >
                {queries && queries.map((query) => {
                return <QueryNotify docs={query} key={ query.id }/>
                })}
            </Carousel>
        </div>
    )
    }
    else {
        return <Spinner />
    }
}

const mapStateToProps = (state) => {
    // console.log("notification chamber",state.firestore.data.centers)
    return {
        queries: state.firestore.ordered.queries,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'queries', limit: 10, orderBy: ['createdAt', 'desc']}
    ])
)(QueryCarousel)