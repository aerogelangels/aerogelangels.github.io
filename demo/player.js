const jhouse = document.getElementById('jhouse');
const el = document.getElementById('el');
const gegg = document.getElementById('gegg');
const ff = document.getElementById('ff');
const con = document.getElementById('con');
const sj = document.getElementById('sj');
const zing = document.getElementById('zing');
const ost1 = document.getElementById('ost1');
const mem = document.getElementById('mem');

const nowplaying = document.getElementById('nowplaying');

let on = false;
let currentSong = null;

function adjustVolume(level) {
    document.querySelectorAll('audio').forEach(thing => 
        {thing.volume = level;}
    )
}

function playAudio() {
    if (currentSong) {
        currentSong.pause();
    }
    document.querySelectorAll('.play').forEach(item => {
        item.classList.remove('active');
    })
    this.classList.add('active');
    switch (this.id) {
        case 'jhousebut':
            jhouse.currentTime = 0;
            jhouse.play();
            currentSong = jhouse;
            nowplaying.innerHTML = 'Now Playing: jitter_house.mp3'
            break;
        case 'elbut':
            el.currentTime = 0;
            el.play();
            currentSong = el;
            nowplaying.innerHTML = 'Now Playing: Epic_Leatbeater.mp3'
            break;
        case 'geggbut':
            gegg.currentTime = 0;
            gegg.play();
            currentSong = gegg;
            nowplaying.innerHTML = 'Now Playing: gaming_egg.mp3'
            break;
        case 'ffbut':
            ff.currentTime = 0;
            ff.play();
            currentSong = ff;
            nowplaying.innerHTML = 'Now Playing: Cool_fivefour.mp3'
            break;
        case 'conbut':
            con.currentTime = 0;
            con.play();
            currentSong = con;
            nowplaying.innerHTML = 'Now Playing: contemplation.mp3'
            break;
        case 'sjbut':
            sj.currentTime = 0;
            sj.play();
            currentSong = sj;
            nowplaying.innerHTML = 'Now Playing: song_up_in_jong_up.mp3'
            break;
        case 'zingbut':
            zing.currentTime = 0;
            zing.play();
            currentSong = zing;
            nowplaying.innerHTML = 'Now Playing: zingle.mp3'
            break;
        case 'ost1but':
            ost1.currentTime = 0;
            ost1.play();
            currentSong = ost1;
            nowplaying.innerHTML = 'Now Playing: OST1.mp3'
            break;
        case 'membut':
            mem.currentTime = 0;
            mem.play();
            currentSong = mem;
            nowplaying.innerHTML = 'Now Playing: memory.mp3'
            break;
    }
    document.getElementById('nowplaying').classList.remove('paused');
    on = true;
    document.getElementById('pause').classList.remove('hidden');
    document.getElementById('play').classList.add('hidden');
    currentSong.addEventListener('ended', () => {
        document.getElementById('play').classList.remove('hidden');
        document.getElementById('pause').classList.add('hidden');
        on = false;
    })
}

function togglePlay() {
    if (on) {
        currentSong.pause();
        document.getElementById('play').classList.remove('hidden');
        document.getElementById('pause').classList.add('hidden');
        document.getElementById('nowplaying').classList.add('paused');
    } else {
        currentSong.play();
        document.getElementById('play').classList.add('hidden');
        document.getElementById('pause').classList.remove('hidden');
        document.getElementById('nowplaying').classList.remove('paused');
    }
    on = !on;
}

function toggleActive() {
    document.querySelectorAll('.vol').forEach(item => {
        item.classList.remove('active');
    })
}

document.querySelectorAll('.play').forEach(name =>
    {name.addEventListener('click', playAudio)}
)

document.getElementById('lowvol').addEventListener('click', () => {adjustVolume(0.33);toggleActive();document.getElementById('lowvol').classList.add('active');});
document.getElementById('medvol').addEventListener('click', () => {adjustVolume(0.67);toggleActive();document.getElementById('medvol').classList.add('active');});
document.getElementById('highvol').addEventListener('click', () => {adjustVolume(1);toggleActive();document.getElementById('highvol').classList.add('active');});

document.getElementById('playcontainer').addEventListener('click', togglePlay)