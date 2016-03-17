 // Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.
var linkList = document.getElementById("linkList");
var mainView = document.getElementById("mainView");
var linkAdd = document.getElementById("linkAdd");
var addSongs = document.getElementById("addSongs");
var addToList = document.getElementById("addToList");
var songName = document.getElementById("songName");
var artist = document.getElementById("artist");
var album = document.getElementById("album");
// var userInput = {songName, artist, album};
// console.log("userInput", userInput);
var songs = ["Legs > by Z*ZTop on the album Eliminator", "The Logical Song > by Supertr@amp on the album Breakfast in America", "Another Brick in the Wall > by Pink Floyd on the album The Wall", "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction", "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"];

	//add songs ie songs[songs.length] = "Bone Machine - by Pixies on the album Surfer Rosa"; AND songs[songs.length] = "Work On Me - by Kings of Leon on the album Mechanical Bull"
// {Song name} by {Artist} on the album {Album}

songs.push("Bone Machine - by Pixies on the album Surfer Rosa");
songs.unshift("Work On Me - by Kings of Leon on the album Mechanical Bull");
for (var i = 0; i < songs.length; i++) {
	 
	 songs[i] = songs[i].replace(">", "-");
	 songs[i] = songs[i].replace("!", "");
	 songs[i] = songs[i].replace("*", "");
	 songs[i] = songs[i].replace("@", "");
	 songs[i] = songs[i].replace("(", "");

document.getElementById("songList").innerHTML += "<div>" + songs[i] + "</div>";
};
//add event listeners-- One to go to your "Add Music View" and then one to go back to the default, "Music List View" User should be able to add songs from Add Music View to the music list

window.addEventListener("load", function() {
	addSongs.classList.add("hidden");
});

linkList.addEventListener("click", function() {
	addSongs.classList.add("hidden");
	mainView.classList.remove("hidden");

});

linkAdd.addEventListener("click", function(){
	mainView.classList.add("hidden");
	addSongs.classList.remove("hidden");

});

addToList.addEventListener("click",function(){
	console.log("addToList", addToList);
	songList.innerHTML += songName.value + ` - by ` + artist.value + ` on the album ` + album.value + "<br>";
	mainView.classList.remove("hidden");
	addSongs.classList.add("hidden");
});


