"use strict";

let trackList = [];

$(document).ready(function() {

    defaultView();

    $.ajax({
        url: "songList.json",
        success: pushTracks
    });

    $("#moreBtn").click(function() {
        $.ajax({
            url: "songList2.json",
            success: pushTracks

        });
        $("#moreBtn").hide();
    })

    //Event listeners for the add music link

    $("#linkAdd").click(function(event) {
            event.preventDefault();
            $("#mainView").hide();
            $("#moreTracks").hide();
            $("#addSongs").show();
            clearInputs();
    });

    //Event listeners for the list music link
    
    $("#linkList").click(function() {
        $("#mainView").show();
        $("addSongs").hide();
        defaultView();
    });

    //Event listeners for the add user input button

    $("#addToList").click(function() {
        $("mainView").show();
        $("addSongs").hide();
        let newSong = {songName: $("#songName").val(),
        artist: $("#artist").val(),
        album: $("#album").val(),
        genre: $("#genre").val()
    };
    console.log(newSong );
    trackList.push(newSong);
        clearInputs();
        defaultView();
        displayTracks();
    })
    

      function displayTracks() {
          $("#songList").html("");
          trackList.forEach(function(i) {
              $("#songList").append(`<div id='${i.id}' class='thisTrack'><h3>${i.songName}</h3><h5>${i.artist}</h5><h5>${i.album}</h5><h5>${i.genre}</h5><button type="" class="delButton">delete</button></div>`)
          })
          pushTracks();
      }

    function defaultView() {
        $("#mainView").show();
        $("#moreTracks").show();
        $("#addSongs").hide();
    }

    var clearInputs = function() {
        $("#songName").val("");
        $("#artist").val("");
        $("#album").val("");
        $("#genre").val("");

  };


    function pushTracks(data) {
        // console.log(data);
        data.songs.forEach(function(i, index) {
            i.id = index;
            // i.id = trackList.length++;
            trackList.push(i)
        })
        displayTracks();
    }

    $("#songList").on("click", ".delButton", function(e){
        console.log(e.target.parentNode.id);
        let songIndex = e.target.parentNode.id * 1;
        trackList.splice(songIndex, 1);
        trackList.forEach(function(i, index) {
            i.id = index;
        })
        console.log(trackList);
        displayTracks();
    })


       
})



























// var linkList = document.getElementById("linkList");
// var songList = document.getElementById("songList");
// var linkAdd = document.getElementById("linkAdd");
// var addSongs = document.getElementById("addSongs");
// var addToList = document.getElementById("addToList");
// var songName = document.getElementById("songName");
// var artist = document.getElementById("artist");
// var album = document.getElementById("album");
// var genre = document.getElementById("genre");
// var displayBox = document.getElementById("displayBox");

// var trackArray = [];
// // console.log("songs", trackArray);

// function getTracks() {
//     var myRequest = new XMLHttpRequest();
//     myRequest.open('GET', true);
//     myRequest.addEventListener("load", defaultTracksOnLoad);
//     myRequest.send();
// }
// function defaultTracksOnLoad() {
//     var trackDisplay = JSON.parse(this.responseText);
//     displayDefaultTracks(trackDisplay.songs)
// }

// var getDefaultTracks = function(trackList) {
//     for (var i = 0; i < trackList.length; i++) {
//         trackList.push(songs[i].title);
//         trackList.push(songs[i].artist);
//         trackList.push(songs[i].album);
//         trackList.push(songs[i].genre);
//         trackArray.push(trackList);
//     };

//     getTracks("songList.json");
// }


// var listDefaultTracks = function(songs) {

//     for (var i = 0; i < songs.length; i++) {
//         var songTracks = document.getElementById(`songs${i}`);
//         var outputString = "";
//         outputString += `<div id="songListDiv">`
//         outputString += `<h1>${songTracks[i].songName}</h1>`;
//         outputString += `<h5>${songTracks[i].artist}</h5>`;
//         outputString += `<h5>${songTracks[i].album}</h5>`;
//         outputString += `<h5>${songTracks[i].genre}</h5>`;
//         outputString += `<button type="" class="deleteThisTrack">delete</button>`
//         outputString += `</div>`;
//     }
//         outputString += `<section><button id='moreSongs' class='showMore'>More</button></section>`
//     showList(outputString);
// };
   
// function showList() {
//   var getList = SongList.getSongList();
//     listDefaultTracks(getList);

//     addView.classList.add("hidden");
//     trackView.classList.add("visible");
//     trackView.classList.remove("hidden");

// // function showList(tracksString, songEl) {
// //     var outputSongs = document.getElementById(songEl);
// //     outputSongs.innerHTML = tracksString;

// //       deleteTrackButtons();
// //       listenForMoreSongsButton();
// // };

// }

// window.addEventListener("load", function() {
// 	addSongs.classList.add("hidden");
// });

// linkList.addEventListener("click", function() {
// 	addSongs.classList.add("hidden");
// 	mainView.classList.remove("hidden");

// });

// linkAdd.addEventListener("click", function(){
// 	mainView.classList.add("hidden");
// 	addSongs.classList.remove("hidden");

// });

// addToList.addEventListener("click",function(){
// 	songList.innerHTML += songName.value + ` - by ` + artist.value + ` on the album ` + album.value + "<br>";
// 	mainView.classList.remove("hidden");
// 	addSongs.classList.add("hidden");
// });



