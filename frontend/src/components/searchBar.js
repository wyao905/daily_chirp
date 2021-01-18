import React, { useState } from 'react'

function SearchBar(props) {
    const [location, setLocation] = useState('')
    const [distance, setDistance] = useState('10')

    const handleLocationChange = (e) => {
        setLocation(e.target.value.split(' ').join('+'))
    }

    const handleDistanceChange = (e) => {
        setDistance(e.target.value)
    }

    const handleClick = () => {
        fetch(`http://localhost:4000/${location}/${distance}`)
            .then(res => { return res.json() })
            .then(tweets => {
                props.setTweets([...tweets])
            })
    }

    return <div style={{
        margin: '12px',
        padding: '0 213px 18px 213px',
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <input style={{ width: '348px' }} className='input' type='text' placeholder='Address' onChange={handleLocationChange} />
        <input style={{ width: '96px' }} className='input' type='number' placeholder="Distance (km)" onChange={handleDistanceChange} />
        <button style={{ width: '60px' }} id='search-button' onClick={handleClick}>Search</button>
    </div>
}

export default SearchBar