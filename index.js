const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/tweets', (req, res) => {
    res.send('tweets')
})

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