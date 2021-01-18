import React, { useState } from 'react'
import SearchBar from './searchBar'
import TweetsContainer from './tweetsContainer'

function Wrapper() {
    const [tweets, setTweets] = useState([])

    return <div className='wrapper'>
        <h1 style={{
            textAlign: 'left',
            paddingLeft: '225px',
            fontFamily: 'Times New Roman',
            fontSize: '48px'
        }}>The Daily Chirp</h1>
        <SearchBar setTweets={setTweets} />
        <div style={{
            paddingLeft: '225px'
        }}>
            <TweetsContainer tweets={tweets} />
        </div>
    </div>
}

export default Wrapper