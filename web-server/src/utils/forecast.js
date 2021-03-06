const request = require('request')


const forecast = (lat, lon, location, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=60bcc85c34713948f112e4decc8f7903&query=${location}`
    request({url: url, json: true}, (error, response) => {
        // console.log('url: ', url)
        if (error) {
            callback('unable to connect to weather serviceh', undefined)
    
        } else if (response.body.error) {
            console.log('response.body.error: ', response.body.error)
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
