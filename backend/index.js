const Twitter = require('twitter')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
require('dotenv/config')

const twitterApiKey = process.env.twitterApiKey
const twitterApiKeySecret = process.env.twitterApiKeySecret
const twitterAccessToken = process.env.twitterAccessToken
const twitterAccessTokenSecret = process.env.twitterAccessTokenSecret
const mapQuestApiKey = process.env.mapQuestConsumerKey

const app = express()
const twitterClient = new Twitter({
    consumer_key: twitterApiKey,
    consumer_secret: twitterApiKeySecret,
    access_token_key: twitterAccessToken,
    access_token_secret: twitterAccessTokenSecret
})

app.use(express.json())
app.use(cors())

app.get('/:location/:distance', (req, res) => {
    fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=${mapQuestApiKey}&location=${req.params.location}`)
        .then(response => { return response.json() })
        .then(data => {
            let lat = data.results[0].locations[0].latLng.lat
            let lng = data.results[0].locations[0].latLng.lng
            twitterClient.get('search/tweets', { geocode: `${lat},${lng},${req.params.distance}km` }, (error, tweets) => {
                if (error) throw error
                res.send(tweets.statuses)
            })
        })
})

const port = process.env.PORT || 4000
app.listen(port)