const request = require('request')

/**
 * This will communicate with the mapbox api, which will then geocode a given address (aka provide its latitude and longitude).
 * @param {*} address address to be geocoded
 * @param {*} callback function called once we have the latitude and longitude
 */
 const geocode = (address, callback) => {
    const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hyaXN0aW5hZ3Vpcmd1aXMxIiwiYSI6ImNrcW15M2J6czBrd3Myb3Rpbmg1cnF0MjkifQ.1HyhFxFVYsyF-ZTYwCXI6A&limit=1'
    request({ url: mapboxURL, json:true}, (error, response) => {
        // low-level error (ex: network error)
        if (error) {
            //provides error message as first parameter and implicitly provides 'undefined' as second parameter
            callback('Unable to connect to location services.')
        }
        // if the features array is empty, then it could not locate any services
        else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search')
        } else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

