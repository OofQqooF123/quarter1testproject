const audio = document.getElementById("audio");
let isPlaying = false;
let isFirstMouseUp = true;

function saveAudioTime() {
    localStorage.setItem("audioTime", audio.currentTime);
}

const storedTime = localStorage.getItem("audioTime");
if (storedTime !== null) {
    audio.currentTime = parseFloat(storedTime);
}


window.addEventListener("beforeunload", function () {
    saveAudioTime();
});

document.addEventListener("mousemove", function () {
    if (isFirstMouseUp) {
        audio.play();
        isFirstMouseUp = false;
     }
});

document.addEventListener("mouseup", function () {
    if (isFirstMouseUp) {
        audio.play();
        isFirstMouseUp = false;
     }
});

window.addEventListener("load", function () {
    if (isFirstMouseUp) {
        audio.play();
        isFirstMouseUp = false;
     }
});
