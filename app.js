const request = require('request')

// url to access weatherstack api with access key, location (query), and conversion to farhenheit
const weatherstack = 'http://api.weatherstack.com/current?access_key=62ba8e98565a8d0fed54f9a8eb9efff2&query=37.8367,-122.4233&units=f'

// makes request from weatherstack given its url (above) and tells it to immediately
// parse it to JSON
request({ url : weatherstack, json: true}, (error, response) => {
    // if there is low-level error (like a network error), report to user
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) { // if there is an input error
        console.log('Unable to find location!')
    }else {
        const weather = response.body.current
    console.log(weather.weather_descriptions[0] + '. The weather is currently ' + weather.temperature + '. But it feels like ' + weather.feelslike + '.')
    } 
})

// Forward Geocoding (mapbox API)
const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=pk.eyJ1IjoiY2hyaXN0aW5hZ3Vpcmd1aXMxIiwiYSI6ImNrcW15M2J6czBrd3Myb3Rpbmg1cnF0MjkifQ.1HyhFxFVYsyF-ZTYwCXI6A&limit=1'

request({url: mapbox, json: true}, (error,response) => {
    if (error) {
        console.log('Unable to connect to geocoding!')
    } else if (request.body.features.length === 0){
        console.log('Can not find this location!')
    }else {
        const latlong = response.body.features[0].center
        console.log('For: '+ response.body.features[0].place_name + ', the latitude is: '+ latlong[0] + ' and the longitude is: '+ latlong[1])
    }
    
})
