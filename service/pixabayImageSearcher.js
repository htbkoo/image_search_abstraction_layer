/**
 * Created by Hey on 17 Jul 2017
 */
var rp = require('request-promise-native');

var PIXABAY_HOST_URL = 'https://pixabay.com/api/';

module.exports = {
    "search": function (query) {
        var options = {
            uri: PIXABAY_HOST_URL,
            qs: {
                key: process.env.PIXABAY_API_KEY,
                q: query
            },
            json: true // Automatically parses the JSON string in the response
        };

        return rp.get(options);
    }
};