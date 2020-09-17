const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

console.log(process.argv[2])

geocode(process.argv[2], (error, data) => {
    if (error) {
        return console.log('geocode error: ', error)
    } 
    forecast(data.latitude,data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('forecast error: ', error)
        }

        console.log('location: ', data.location)
        console.log('temperature: ', forecastData.data.temperature)
    })
})
