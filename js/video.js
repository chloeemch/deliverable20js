let videoElement;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Find the video element by its ID or any other suitable method.
	videoElement = document.getElementById('player1');
	// // Turn off autoplay
	videoElement.autoplay = false;
	// // Turn off looping
	videoElement.loop = false;
});

function updateVolume() {
	const volumeElement = document.getElementById("volume")
	volumeElement.innerText = `${Math.round(videoElement.volume * 100)}%`;
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	videoElement.play();
	updateVolume()
});

// Pause
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	if (videoElement && !videoElement.paused) {
		videoElement.pause();
	  }
	});

// Slow down
const slowDownButton = document.getElementById('slower');

let currentPlaybackRate = 1.0;

slowDownButton.addEventListener('click', function() {
	console.log("Slow Video");
  if (videoElement) {
    currentPlaybackRate -= 0.1;

    videoElement.playbackRate = currentPlaybackRate;

    console.log(`New video speed: ${currentPlaybackRate.toFixed(2)}`);
  }
});

// Speed up
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
  videoElement.playbackRate += (videoElement.playbackRate * 0.1);
  console.log(`New speed: ${videoElement.playbackRate}`);
});

// Skip ahead
document.getElementById('skip').addEventListener("click", function() {
	videoElement.currentTime += 10;
	if (videoElement.currentTime > videoElement.duration) {
	  videoElement.currentTime = 0;
	}
	console.log(`Current location: ${videoElement.currentTime}`);
  });

// Mute button
const muteButton = document.getElementById('mute');

let isMuted = false;

muteButton.addEventListener('click', function() {
  if (videoElement) {
    isMuted = !isMuted;

    videoElement.muted = isMuted;

    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
  }
});

// Volume Slider
volumeSlider = document.getElementById("slider")
volumeSlider.addEventListener("input", function() {
  videoElement.volume = volumeSlider.value / 100;
  updateVolume();
});

// Old School
document.getElementById("vintage").addEventListener("click", function() {
	videoElement.classList.add('oldSchool');
  });
  
// Original
  document.getElementById("orig").addEventListener("click", function() {
	videoElement.classList.remove('oldSchool');
  });