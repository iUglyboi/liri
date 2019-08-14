// const movieSearched = process.argv[3];
// console.log(movieSearched);
const axios = require('axios')
const APIKEY = '4a3f8017';

http://www.omdbapi.com/?apikey=[yourkey]&

module.exports = function movieSearch(movie) {
const url = `http://www.omdbapi.com/?t=${movie}&apikey=${APIKEY}`;
   axios.get(url)
    .then(function (response){
    
       
            // var data = JSON.parse(response)
            var queryPull = "Title: " + response.data.Title + " " + 
                            "Year: " + response.data.Year + " " + 
                            "IMDB Rating: " + response.data.Ratings[0].Value + " " +
                            "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + " " +
                            "Origin Country: " + response.data.Country + " " +
                            "Language: " + response.data.Language + " " +
                            "Plot: " + response.data.Plot + " " +
                            "Actors: " + response.data.Actors + " "
                            console.log(queryPull);
                       
    }).catch(function(error) {
        console.log(error);
      });
}