const request = require("request")

/**
 * Requests weather data from weatherstack api for a given latitude and longitude
 * @param {*} latitude latitude
 * @param {*} longitude longitude
 * @param {*} callback function called once we have the latitude and longitude
 */
const forecast = (latitude, longitude, callback) => {
	const weatherstackURL =
		"http://api.weatherstack.com/current?access_key=62ba8e98565a8d0fed54f9a8eb9efff2&query=" +
		latitude +
		"," +
		longitude +
		"&units=f"

	request({ url: weatherstackURL, json: true }, (error, response) => {
		if (error) {
			callback("Could not access weather data!")
		} else if (response.body.error) {
			callback("Could not find that location.")
		} else {
			const temp = response.body.current.temperature
			const feelsLike = response.body.current.feelslike
			const descr = response.body.current.weather_descriptions[0]
			callback(
				undefined,
				descr + "\nTemperature: " + temp + "\nFeels like: " + feelsLike
			)
		}
	})
}

module.exports = forecast
