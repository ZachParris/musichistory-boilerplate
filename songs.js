// Each student must add one song to the beginning and the end of the array.

// Loop over the array and remove any words or characters that obviously don't belong.

// Students must find and replace the > character in each item with a - character.

// Must add each string to the DOM in index.html in the main content area.

var songs = ["Legs > by Z*ZTop on the album Eliminator", "The Logical Song > by Supertr@amp on the album Breakfast in America", "Another Brick in the Wall > by Pink Floyd on the album The Wall", "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction", "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"];
//remove: *@(!
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
console.log("songs", songs);
