import React from 'react';
import Banner from './Banner/Banner'
// import PostsEvents from './PostsEvents/PostsEvents';
// import NeedsCenter from './NeedsCenter/NeedsCenter';

const homePage = () => {
    console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            {/* <PostsEvents />
            <NeedsCenter /> */}
        </div>
    )
}

export default homePage;