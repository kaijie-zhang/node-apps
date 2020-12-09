const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', '')
app.use(express.static(publicDirectoryPath))

app.get('/weather',  (req, res) => {
    res.send({
        forecast: '37deg',
        location: 'Frankfurt'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})