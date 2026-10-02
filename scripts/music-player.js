const songs = [{
    name: 'The Other Promise',
    artist: 'Yoko Shimomura',
    path: './The Other Promise_spotdown.org.mp3',
    cover: './images/track_cover.jpg'
}];

let currentMusic = 0;

const music = document.querySelector('#audio');
music.volume = 0.1;

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.music-artist');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

const setMusic = (i) => {
    seekBar.value = 0; // set range slide value to 0;
    seekBar.max = 0;
    musicDuration.innerHTML = '00:00';
    let song = songs[i];
    currentMusic = i;

    songName.textContent = song.name;
    artistName.textContent = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.textContent = '00:00';
    music.addEventListener('loadedmetadata', () => {
        seekBar.max = music.duration;
        musicDuration.textContent = formatTime(music.duration);
    }, { once: true });
    music.src = song.path;
}

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play().catch((error) => {
            console.error('Unable to play audio:', error);
        });
    } else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

music.addEventListener('ended', () => {
    forwardBtn.click();
});

// forward and backward button
forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})

const playMusic = () => {
    music.play().catch((error) => {
        console.error('Unable to play audio:', error);
    });
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500)