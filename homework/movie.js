const movieSearched = process.argv[3];
console.log(movieSearched);
const request = require("request");
module.exports = function movieSearch() {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieSearched + "&y=&plot=short&apikey=4a3f8017"

    request(queryUrl, function (error, response, body){
        if (!error && response.statusCode === 200){
            var data = JSON.parse(body)
            var queryPull = "Title: " + data.Title + " " + 
                            "Year: " + data.Year + " " + 
                            "IMDB Rating: " + data.Ratings[0].Value + " " +
                            "Rotten Tomatoes Rating: " + data.Ratings[1].Value + " " +
                            "Origin Country: " + data.Country + " " +
                            "Language: " + data.Language + " " +
                            "Plot: " + data.Plot + " " +
                            "Actors: " + data.Actors + " "
                            console.log(queryPull);
                        } else{
                            console.log("error")
                        }
    })
}