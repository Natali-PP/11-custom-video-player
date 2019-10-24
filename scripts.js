const playButton = document.querySelector('.player__button.toggle');
const volumeButton = document.querySelector('input[name="volume"]');
const backButton = document.querySelector('button[data-skip="-5"]');
const forwardButton = document.querySelector('button[data-skip="5"]');
const speedButton = document.querySelector('input[name="playbackRate"]');
const viewer= document.querySelector('.viewer');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const fullscreenButton = document.querySelector('.full-screen');

const video = document.querySelector('.player__video');

// play-pause the video
function playPause(){
    if (video.paused){
        video.play();
        playButton.textContent='❚ ❚';
    } else {
        video.pause();
        playButton.textContent= '►';
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

//playbackrate - changing speed
function changeSpeed(){
    video.playbackRate = this.value;
}

//bar progress update
function handleProgress(){
    const percent = ((video.currentTime)/(video.duration))*100;
    progressBar.style.flexBasis=`${percent}%`;
}

// cambiar la posicion del setTime al hacer click a la progress bar

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

}

//fullscreen
function fullscreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
}


video.addEventListener('timeupdate', handleProgress);
viewer.addEventListener('click', playPause);
playButton.addEventListener('click', playPause);

volumeButton.addEventListener('change', setVolume);
volumeButton.addEventListener('mousemove', setVolume);

backButton.addEventListener('click', skipTime);
forwardButton.addEventListener('click', skipTime);

speedButton.addEventListener('change', changeSpeed);
speedButton.addEventListener('mousemove', changeSpeed);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreenButton.addEventListener('click', fullscreen);
