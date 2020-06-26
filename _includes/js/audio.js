const player = {
    data: {
        audio: undefined,
        currentSeconds: 0,
        durationSeconds: 0,
        innerLoop: false,
        loaded: false,
        playing: false,
        previousVolume: 35,
        showVolume: false,
        volume: 100
    },
    computed: {
        convertTimeHHMMSS(secs) {
            return new Date(secs * 1000).toISOString().substr(11, 8)

        },

        percentComplete(currentSeconds, durationSeconds) {
            return parseInt((currentSeconds / durationSeconds) * 100);
        },
        muted() {
            return player.data.volume / 100 === 0;
        }
    },


}


player.data.audio = document.getElementById('mp3');
const btn = document.getElementById('play');
const tm = document.getElementById('time');
const range = document.getElementById('range');
const dur = document.getElementById('dur');
const status = document.getElementById('status');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

player.data.audio.onloadedmetadata = () => {
    range.max = player.data.audio.duration;
    dur.innerHTML = player.computed.convertTimeHHMMSS(player.data.audio.duration)

}


range.onchange = () => {
    player.data.audio.currentTime = range.value;

}



player.data.audio.ontimeupdate = () => {
    range.value = player.data.audio.currentTime;
    tm.innerHTML = player.computed.convertTimeHHMMSS(player.data.audio.currentTime)
}

player.data.audio.addEventListener("waiting", function (e) {

    status.innerHTML = "Waiting"
});



player.data.audio.addEventListener("canplaythrough", function (e) {

    status.innerHTML = "ready"
});


player.data.audio.addEventListener("error", function (e) {

    status.innerHTML = "Error"
});




btn.addEventListener("click", function () {

    if (player.data.playing == false) {
        player.data.playing = true;
        player.data.audio.play();
        this.classList.add("paused");
    }
    else {
        player.data.playing = false;
        player.data.audio.pause();
        this.classList.remove("paused");


    }

});


back.addEventListener("click", function () {
    if (player.data.audio.currentTime >= 30) {
        player.data.audio.currentTime -= 30.0;
    }
    else {
        player.data.audio.currentTime = 0;
    }
});


forward.addEventListener("click", function () {
    if (player.data.audio.currentTime += 30 <= player.data.audio.duration) {
        player.data.audio.currentTime += 30.0;
    }
    else {
        player.data.audio.currentTime = player.data.audio.duration;
    }
});
