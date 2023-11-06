var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

// Find the video element by its ID or any other suitable method.
const videoElement = document.getElementById('player1');

// // Turn off autoplay
videoElement.autoplay = false;

// // Turn off looping
videoElement.loop = false;

