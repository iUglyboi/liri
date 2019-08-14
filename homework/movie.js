// const movieSearched = process.argv[3];
// console.log(movieSearched);
const axios = require('axios')
const APIKEY = '4a3f8017';

http://www.omdbapi.com/?apikey=[yourkey]&

module.exports = function movieSearch(movie) {
const url = `http://www.omdbapi.com/?t=${movie}&apikey=${APIKEY}`;
   axios.get(url)
    .then(function (response){
        console.log('the response', response);
        if (!response){
            var data = JSON.parse(response)
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