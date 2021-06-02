const { locations: locationsMock } = require("./geocode.mock");
const URL = require("url").URL;

module.exports.geocodeRequest = (request, response) => {
    const { city } = request.query;
    const locationMock= locationsMock[city.toLowerCase()];
   response.send(locationMock);
};