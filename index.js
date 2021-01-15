const Twitter = require('twitter')
const express = require('express')
require('dotenv/config')

const apiKey = process.env.apiKey
const apiKeySecret = process.env.apiKeySecret
const accessToken = process.env.accessToken
const accessTokenSecret = process.env.accessTokenSecret
const bearerToken = process.env.bearerToken

const app = express()
const client = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiKeySecret,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret
    // bearer_token: bearerToken
})

app.use(express.json())

app.get('/', (req, res) => {
    client.get('search/tweets', { geocode: '34.0522,118.2437,10mi' }, (error, tweets) => {
        if (error) throw error
        res.send(tweets)
    })
})

// app.get('/tweets', (req, res) => {
//     res.send('tweets')
// })

// parameters
// app.get('/tweets/:id', (req, res) => {
//     res.send(req.params.id)
// })

// post
// app.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     res.send(course)
// })



const port = process.env.PORT || 3000
app.listen(port)