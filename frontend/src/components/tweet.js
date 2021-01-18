import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

function Tweet(props) {
    return <TwitterTweetEmbed tweetId={props.tweetId} />
}

export default Tweet