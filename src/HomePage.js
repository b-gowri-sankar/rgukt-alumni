import React from 'react';
import Banner from './Banner/Banner'
import Notifications from './Notifications/Notifications'

const homePage = () => {
    console.log("we are in the homepage")
    return (
        <div>
            <Banner />
            <Notifications />
        </div>
    )
}

export default homePage;