const playButton = document.querySelector('.player__button.toggle');
const volumeButton = document.querySelector('input[name="volume"]');
const backButton = document.querySelector('button[data-skip="-5"]');
const forwardButton = document.querySelector('button[data-skip="5"]');

const video = document.querySelector('.player__video');

// play-pause the video
function playPause(){
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
};

//change volumne

function setVolume(){
    let volumen = this.value;
    video.volume = volumen;
};

// go backwards and foward 

function skipTime(){
    let skipValue = parseFloat(this.dataset.skip);
    video.currentTime = video.currentTime + skipValue;
    
};

playButton.addEventListener('click', playPause);

volumeButton.addEventListener('change', setVolume);
volumeButton.addEventListener('input', setVolume);

backButton.addEventListener('click', skipTime);
forwardButton.addEventListener('click', skipTime);
