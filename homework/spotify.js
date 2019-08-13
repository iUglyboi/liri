require('dovtenv').config();
require("fs")

let userSearch = process.argv[3];

let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let whatItSays = require("./says.js")

module.exports = function spotifySearch() {
    if (!userSearch) {userSearch = "Brothers"}
    spotify.search({type: "track, query: userSearch. limit: 1"}),
    function (error, data){
        if (error){
            return console.log ("There was a error in your search")
        } else{
            let spotifyArray = data.tracks.items;

            for (i=0; i < spotifyArray; i++){
                console.log("Song: " + data.tracks.items[i].name + " " +
                "Artist: " + data.tracks.items[i].artist[0].name + " " +
                "Album: " + data.tracks.items[i].album.name + " " +
                "Preview Link: " + data.tracks.items[i].external_urls.spotify)

            }
        }
    }
}