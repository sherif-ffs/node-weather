const path = require('path')
const express = require('express')
const hbs = require('hbs')
const image = '../public/img/me.png'

const app = express()

// define paths for express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve 
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
        name: 'Sherif',
        img: image
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'Sherif'
    })
})

app.get('/weather', (req, res) => {
    console.log('req.query.search: ', req.query.search)
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        forecast: 'forecast',
        location: 'location',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    res.send({
        products: []
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})