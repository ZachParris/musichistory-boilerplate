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
      };

    function defaultView() {
        $("#mainView").show();
        $("#moreTracks").show();
        $("#addSongs").hide();
    };

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








