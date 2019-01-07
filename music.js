var x = 0;
var songs = ["es1.mp3", "g1.mp3", "g2.mp3", "g3.mp3", "g4.mp3", "g5.mp3", "g6.mp3"];

vid = document.getElementById("dzw");

vid.addEventListener('ended', function() {

    document.getElementById("dzw").src = songs[x];
    x++;

    if (x >= songs.length) {
        x = 0;
    }
    //vid=document.getElementById("dzw");

});

/*function next() {

    vid.src = songs[x];
    x++;
    if (x >= songs.length) {
         x = 0;
    }
}

function previous() {

    vid.src = songs[x];
    x--;
    if (x < 0) {
        x = 7
    }
}*/
function benekWkraczaDoAkcji () {
    if (vid.muted) cygan2();
    else cygan1();
}
function cygan1() {
    //document.getElementById("dzw");
   // vid=document.getElementById("dzw");
    vid.muted = true;
}
        
function cygan2() {
    //document.getElementById("dzw");
    //vid=document.getElementById("dzw");
    vid.muted = false;
}