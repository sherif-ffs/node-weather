const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hlcmlmLWZmcyIsImEiOiJjazgyNDhmc3owYWo3M2RtdDVucTVnb3UyIn0.XB25jUjTyiJ9d_Bugzfnbg`
    request({url: url,json: true},(error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }  else if (response.message === 'Not Found') {
            callback('unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode