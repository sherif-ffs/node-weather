const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(40.7178,-74.0431, (error, data) => {
    console.log('Error: ', error)
    console.log('current temperature: ', data.temperature)
    console.log('chance of rain: ', data.precip)
})

geocode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})