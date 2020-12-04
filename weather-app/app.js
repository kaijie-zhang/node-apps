const request =require('request')

const url = 'http://api.weatherstack.com/current?access_key=5a3d49817ac2b5d85dbfae2bf0a7bb8b&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})