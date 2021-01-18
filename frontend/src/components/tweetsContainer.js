import React from 'react'
import Tweet from './tweet'

function TweetsContainer(props) {
    if (props.tweets.length !== 0) {
        return props.tweets.map(tweet => {
            return <Tweet tweetId={tweet.id_str} />
        })
    } else {
        return null
    }
}

export default TweetsContainer