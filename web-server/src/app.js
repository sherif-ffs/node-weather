const path = require('path')
const express = require('express')
const image = '../public/img/me.png'
const app = express()
console.log(path.join(__dirname, '../public'))

// import '../public/img/me.png'
const publicDirectoryPath = path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Sherif'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        img: image
    })
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