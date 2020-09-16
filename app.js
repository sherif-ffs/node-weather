const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=428a5730d31ad6107b849a0e0a40b8e9&query=40.7178,-74.0431&units=f'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')

//     } else if (response.body.error) {
//         console.log('unable to find location')
//     }
//     else {
//         const data = response.body.current
//         const currentTemp = data.temperature
//         const chanceOfRain = data.precip
//         console.log(`It is currently ${currentTemp} degrees, there is a ${chanceOfRain}% of rain`)    }
// })

geocode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})