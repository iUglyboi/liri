let singer = process.argv[3];
const request = require("request");
const moment = require('moment');

module.exports = function bands() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + singer + "/events?app_id=codingbootcamp";
    request(queryUrl, function (error, response, body){
        if (!error){
            const data = JSON.parse(body);
            const event = data[0];
            const date = moment(data.datatime).format("MMM Do YY");
            const results = "Band: " + singer + " " +
                            "City: " + event.venue.city + " " +
                            "Venue: " + event.venue.name + " " + 
                            "Date: " + date;

                            return console.log(results)
                        

            } else{
                console.log("error" + error)
                return
            }
    })

}