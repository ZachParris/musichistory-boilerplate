"use strict";

let trackList = [];

$(document).ready(function() {
    defaultView();
    loadData();

function loadData(){
    $.ajax({
        url: "https://brilliant-inferno-7027.firebaseio.com/songs.json",
        type: "GET",
        success: displayTracks
    });
}

function displayTracks(songData) {
    // console.log("sd", songData);
    trackList = songData;
    $("#songList").html("");
    for (var song in songData) {
        var currentSong = songData[song];
        $("#songList").append(`<div id='${currentSong.id}' class='thisTrack'><h3>${currentSong.title}</h3><h5>${currentSong.artist}</h5><h5>${currentSong.album}</h5><button type="" id=${song} class="delButton">delete</button></div>`)
    }
};
//Event listeners for the add music link

$("#linkAdd").click(function(event) {
    event.preventDefault();
    $("#mainView").hide();
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

    var newTrack = {
        "title":$("#songName").val(),
        "artist":$("#artist").val(),
        "album":$("#album").val()
    }
    $.ajax({
        url: "https://brilliant-inferno-7027.firebaseio.com/songs.json",
        type: 'POST',
        data: JSON.stringify(newTrack)
    }).done(function(newId){
        trackList[newId.name] = newTrack;
    displayTracks(trackList);
    clearInputs();
    defaultView();
    })
})



function defaultView() {
    $("#mainView").show();
    $("#addSongs").hide();
};

var clearInputs = function() {
    $("#songName").val("");
    $("#artist").val("");
    $("#album").val("");
    $("#genre").val("");

};

//click event for the delete button that targets the songs ID
$("#songList").on("click", ".delButton", function() {
    let thisSongId = $(this).attr("id");
    console.log("dfds", thisSongId);
    deleteSong(thisSongId);

});

//using concatenation to target the songs Id and deletes it from firebase

function deleteSong(songId) {
    $.ajax({
        url: "https://brilliant-inferno-7027.firebaseio.com/songs/"+ songId+".json",
        method: "DELETE"
    }).done(function(){
        loadData();
    })
};
});
