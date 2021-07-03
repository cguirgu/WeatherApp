const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// When we call geocode, we will pass in the address and also the function that we
// want to perform once we have the latitude and longitude; typically 2 arguments are passed
// in the callback function (an error or the data if things went well)
geocode("boston", (error, data) => {
  console.log("Error:", error)
  console.log("Data:", data)
})

// The forecast function should has three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
forecast(37.8367, -122.4233, (error, data) => {
  console.log("Error", error)
  console.log("Data", data)
})
