const request = require('request')

const forecast = (latitude, longitude, callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=af3f7f81309a0e609895495c2febeb34&query='+latitude+','+longitude+'&units=f'
    console.log(url)
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('There is a problem in the connection' , undefined)
        } else if(body.error) {
            callback('Unable to find the location. Try another search' , undefined)
        } else {
            callback(undefined , body.current.weather_descriptions[0]+' it is currently '+body.current.temperature+' but it feels like '+body.current.feelslike)
        }

    })
}

module.exports = forecast
