const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locQuery = process.argv[2]
if (!locQuery){
    return console.log('Location not provided')
}

geocode (locQuery, (error, geocodeData)=> {
    if (error){
        return console.log(error)
    }

    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(geocodeData.location)
        console.log(forecastData)
    })
    
})