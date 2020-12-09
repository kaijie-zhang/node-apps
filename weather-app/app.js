const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locQuery = process.argv[2]
if (!locQuery){
    return console.log('Location not provided')
}

geocode (locQuery, (error, {latitude, longitude, location} = {})=> {
    if (error){
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
    
})