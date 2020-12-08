const request =require('request')

// const url = 'http://api.weatherstack.com/current?access_key=5a3d49817ac2b5d85dbfae2bf0a7bb8b&query=37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     } else{
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out.')
//         console.log('It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }


// })


// //Geocoding

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=\
// pk.eyJ1Ijoia2FpamllemhhbmciLCJhIjoiY2tpZzg3cHM2MHJhaDJybng3emo1czVsMSJ9.zNZG2I9vplmfb7MznptiLg&limit=1'
// request({url: url2, json: true }, (error, response) => {
//     if (error){
//         console.log('Unable to connect to geocoding service')
//     } else if (response.body.features.length===0){
//         console.log('Unable to find location')
//     } else {
//         const coordinates = response.body.features[0].center
//         console.log('Result: ' + response.body.features[0].place_name + '. Latitude is: ' + coordinates[0] +
//         ' . Longitude is: ' + coordinates[1])
//     }

// })



geocode ('12w23423hat', (error, data)=> {
    console.log('Error', error)
    console.log('Data', data)
})