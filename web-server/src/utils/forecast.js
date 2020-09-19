const request = require('request')


const forecast = (lat,lon, callback) => {
const url = `http://api.weatherstack.com/current?access_key=428a5730d31ad6107b849a0e0a40b8e9&query=${lat},${lon}&units=f`
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to weather serviceh', undefined)
    
        } else if (response.body.error) {
            callback('unable to find location, try another search', undefined)
        }
        else {
            callback(undefined, {
                data: response.body.current,
                currentTemp: response.body.temperature,
                chanceOfRain: response.body.precip,
            })
           }
    })
}


module.exports = forecast
