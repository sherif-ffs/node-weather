const path = require('path')
const express = require('express')

const app = express()
console.log(path.join(__dirname, '../public'))

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath));


app.get('/help', (req, res) => {
    res.send({
        name: 'Sherif',
        age: 22
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'forecast',
        location: 'location'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})