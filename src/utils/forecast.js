const request = require('request')

const forecast = (latitude, longitude, callback) =>{

    
    const url = 'https://data.climacell.co/v4/timelines?location='+latitude+','+longitude+'&fields=temperature&fields=visibility&fields=humidity&fields=windSpeed&fields=sunsetTime&fields=sunriseTime&timesteps=1d&units=metric&apikey=tUyTSmINHfXIsMjVQqGmoMFMFhWdwM3p'
    console.log(url)
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('There is a problem in the connection' , undefined)
        } else if(body.message) {
            callback('Unable to find the location. Try another search'+body.type , undefined)
        } else {
            callback(undefined , body.data.timelines[0].intervals[0].values.temperature+' it is currently '+body.data.timelines[0].intervals[0].values.temperature+' visibility =  '+body.data.timelines[0].intervals[0].values.visibility+' humidity = '+body.data.timelines[0].intervals[0].values.humidity+' windSpeed = '+body.data.timelines[0].intervals[0].values.windSpeed)
        }

    })
}

module.exports = forecast
