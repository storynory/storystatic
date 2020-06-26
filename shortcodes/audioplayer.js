const player = function (slug) {

    const root = "https://omny.fm/shows/storynory/"
    const file = root + slug + ".mp3";

    return `<figure class="player">
    <div class="playbtn">
    <span id="back" class="wind left">⟲</span>
    <button class="center" name="audio_player" id="play"></button>
    <span id="forward" class="wind right">⟳</span>
    </div>
    <audio id="mp3" src="${file}"></audio>
    <input class="slider" type="range" id="range" min="0" max="100" value="0" />
    <label for="seek">seek</label>
    <span class="left" id="time">00.00.00</span> 
    <span id="status"></span> 
    <span class="right" id="dur">00.00.00</span>
    </figure>`





}

module.exports = player