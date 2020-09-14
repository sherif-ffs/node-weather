const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=428a5730d31ad6107b849a0e0a40b8e9&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log('data: ', data.current)
})