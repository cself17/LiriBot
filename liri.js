require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var option = process.argv[3]


switch(command) {
	case "spotify-this-song":
		return spotifyThisSong(option);
	case "concert-this":
		return concertThis(option);
	case "movie-this":
		return movieThis(option)
	case "do-what-it-says":
		return doThis(option)
	default:
		console.log(command + " is not a command")
}

function spotifyThisSong(songName) {
	spotify.search({ type: 'track', query: songName }, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
	 
	console.log(data.tracks.items[0]); 
	});
	// return console.log("I will spotify this song", songName)
}

function concertThis(artistOrBand) {
	return console.log("I will concert this artist", artistOrBand)
}

function movieThis(movieName) {
	return console.log("I will movie this", movieName)
}

function doThis(doThis) {
	return console.log("I will do this", doThis)
}

