require("dotenv").config();

const fs = requre('fs')
const searcher = process.argv[2];
const searched = process.argv[3];
const spotify = require("./spotify.js");
const bands = require("./bands.js");
const movie = require("./movie.js")
const whatItsays = require("./says.js")

runAll(command, search)
   
   
function runAll (command, search){
    switch(command){
        case "concert-this":
            bands(search);
            console.log("These are the bands in your town!", search)
            break;

        case "spotofy-this-song":
            spotify(search);
            console.log('this is the song you searched!', search)
            break;
        case "movie-this":
            movie(search);
            console.log("This is the movie you searched!", search)
        case "do-what-it-says":
            console.log("Please do what it says")
            whatItsays();
            break;
        default: console.log(
            " "
            + "in order to search you have to use one of these commands after you use the words 'node liri.js' in order to search" + ""
            + "concert-this" + " " + 
            + "spotify-this-song" + "(insert song title here)" + " " 
            + "movie-this" + "(insert any movie here)" + " "
            + "do-what-it-says" + " " )
        
    }
}

function whatItsays(){
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error){
            return console.log("There is a error")
        }
        var infoArray = data.split(",");
        wild = infoArray[0];
        yeet = infoArray[1];
        main(wild,yeet)

    }


}
