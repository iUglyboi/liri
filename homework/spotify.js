require("dotenv").config();

require("fs")

// let userSearch = process.argv[3];

let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let whatItSays = require("./says.js");

module.exports = function spotifySearch(userSearch) {
    spotify.search({type: "track", query:userSearch, limit: 1}, function(err, data) {
        if (err) {
            console.log('the error', err);
        }
        console.log("Song: " + data.tracks.items[0].name)
        console.log("Artist: " + data.tracks.items[0].artists[0].name) 
        console.log("Preview link: " + data.tracks.items[0].preview_url);
    //     console.log("Song: " + data.tracks.items + " " +
    //   "Artist: " + data.tracks.items.artist + " " +
    //   "Album: " + data.tracks.items.album + " " +
    //   "Preview Link: " + data.tracks.items.external_urls)
    })
}
    //   else{
    //         return console.log ("There was a error in your search")
    //         }
        
    //     }};

    // function (response){
    //     if(!response){ 
    //         let spotifyArray = data.tracks.items

    //         for (i=0; i < spotifyArray; i++){
    //             console.log("Song: " + data.tracks.items[i].name + " " +
    //             "Artist: " + data.tracks.items[i].artist[0].name + " " +
    //             "Album: " + data.tracks.items[i].album.name + " " +
    //             "Preview Link: " + data.tracks.items[i].external_urls.spotify)
