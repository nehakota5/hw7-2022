
var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false; 
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)

});
// Play 
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video")
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	video.play()


});

// Pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video")
	video.pause()

});


// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down")
	video.playbackRate *= .9
	console.log("Speed is " + video.playbackRate)
	

});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up")
	video.playbackRate /= .9
	console.log("Speed is " + video.playbackRate)

});

// Skip
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Speed up")
	video.currentTime += 10
	console.log("Timestamp" + video.currentTime)
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("video current time is " + video.currentTime)

});




// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
	console.log("Unmute")
	video.muted = false
	this.innerHTML = "Mute"
	
	}

	else {
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
		}
		
});

// Volume Slider

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is " + video.volume)
	video.volume = this.value / 100
	console.log("The current volume is " + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

// Styled

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Add oldSchool Class");


});

// Original 

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Remove oldSchool Class");


});













// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

