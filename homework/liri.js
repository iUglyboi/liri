require("dotenv").config();

const fs = require('fs');
const searcher = process.argv[2];
const command = process.argv[3];
const spotifySearch = require("./spotify.js");
const bands = require("./bands.js");
const movieSearch = require("./movie.js")
// const whatItsays = require("./says.js")

console.log('the command', command);
    switch(searcher){
        case "concert-this":
            bands(command);
            console.log("These are the bands in your town!", command)
            break;

        case "spotify-this-song":
            spotifySearch(command);
            console.log('this is the song you commanded!', command)
            break;
        case "movie-this":
            movieSearch(command);
            console.log("This is the movie you commanded!", command)
            break;
        case "do-what-it-says":
            console.log("Please do what it says")
            whatItsays();
            break;
        default: console.log(
            " "
            + "in order to search you have to use one of these commands after you use the words 'node liri.js' in order to search" + " "
            + "concert-this" + " " + 
            + "spotify-this-song" + " " + "(insert song title here)" + " " 
            + "movie-this" + " " + "(insert any movie here)" + " "
            + "do-what-it-says" + " " )
        
    }

function whatItsays(){
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error){
            return console.log("There is a error")
        }
        console.log('the data', data);
        // var infoArray = data.split(",");
        // wild = infoArray[0];
        // yeet = infoArray[1];
        // main(wild,yeet)

    });


}
