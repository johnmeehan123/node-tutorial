const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/d3fd38b734d31c5c2006e84f5a747a6b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather,
}