
const axios = require('axios');
const moment = require('moment');

module.exports = function bands(band) {
    const url = "https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp"
    axios.get(url)
    .then(function (response){
        // console.log(response)
        if (!response){
            const data = JSON.parse(response);
            const event = data[0];
            const date = moment(data.datatime).format("MMM-Do-YY");
            const results = "Band: " + singer + " " +
                            "City: " + event.venue.city + " " +
                            "Venue: " + event.venue.name + " " + 
                            "Date: " + date;

                            return console.log(results)
                        

            } else{
                console.log("error")
                return
            }
    })

}