import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
    return (
        <>
            <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="rguraa1"
                        options={{ height: 600, width:510}}
                    />
        </>
    )
}

export default TwitterFeed;
