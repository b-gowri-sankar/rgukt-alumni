import React from 'react'
import { useState } from 'react';
import classes from './SingleSocialFeed.module.css'
import TwitterFeed from './SocialFeed/TwitterFeed';
import FacebookFeed from './SocialFeed/FacebookFee';
import InstagramFeed from './SocialFeed/InstagramFeed'

const SingleSocialField = () => {
    const [disFac, setDisFAc] = useState(true);
    const [disIns, setDisIns] = useState(false);
    const [disTwi, setDisTwi] = useState(false);
    
   const dispalyFeed = (name) => {
        switch (name) {
            case 'Facebook':
                setDisFAc(true);
                setDisIns(false);
                setDisTwi(false);
                break;
            case 'Twitter':
                setDisFAc(false);
                setDisIns(false);
                setDisTwi(true);
                break;
            case 'Instagram':
                setDisFAc(false);
                setDisIns(true);
                setDisTwi(false);
                break;
            default:
                setDisFAc(true);
                setDisIns(false);
                setDisTwi(false);
        }
    }

    return (
        <>  
            <button className={ classes.Button} onClick={()=>dispalyFeed('Facebook')}>Facebook</button>
            <button className={ classes.Button} onClick={()=>dispalyFeed('Twitter')}>Twitter</button>
            <button className={classes.Button} onClick={() => dispalyFeed('Instagram')}>Instagram</button>
            <>
                {disFac && <FacebookFeed />}
                {disIns && <InstagramFeed />}
                {disTwi && <TwitterFeed />}
            </>
        </>
    )
}

export default SingleSocialField;
