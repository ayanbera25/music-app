const songs =[
    {
        name:"audio/Har-Har-Shambhu-Shiv-Mahadeva.mp3",
        imgSrc:"images/mahadev.jpg",
        title:"Har Har Shambhu",
        artist:"Jeetu Sharma"
    },
    {
        name:"audio/Mehbooba Mein Teri Mehbooba.mp3",
        imgSrc:"images/kgf2.jpg",
        title:"Mehbooba",
        artist:"Ananya Bhat, Ravi Basrur"
    },
    {
        name:"audio/Pasoori.mp3",
        imgSrc:"images/pasoori.jpg",
        title:"Pasoori",
        artist:"Shae Gill, Ali Sethi"
    },
]


const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.querySelector("#play");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const title=document.querySelector("#title");
const artist=document.querySelector("#artist");
let progress=document.querySelector("#progress");
let current_time=document.querySelector("#current_time");
let current_duration=document.querySelector("#duration");
// load song
loadSongs=(song)=>{
    title.textContent= song.title;
    artist.textContent=song.artist;
    img.src=song.imgSrc;
    music.src=song.name;
}

let songIndex=0;
loadSongs(songs[songIndex]);

let isPlaying=false;
// play functionality
const playMusic = ()=>{
    music.play();
    isPlaying=true;
    play.classList.replace("fa-play","fa-pause");
    play.title="pause";
};
// pause functionality
const pauseMusic = ()=>{
    music.pause();
    isPlaying=false;
    play.classList.replace("fa-pause","fa-play");
    play.title="play";
};
// clicking event of play button
play.addEventListener("click",()=>{
    if(isPlaying)
    pauseMusic();
    else
    playMusic();
});



const nextSong=()=>{
    songIndex=(songIndex+1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();

}
const prevSong=()=>{
    songIndex=(songIndex-1+songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

// progress js work

music.addEventListener("timeupdate",(event)=>{
    console.log(event);
    const {currentTime, duration} = event.currentTarget;
    let percent_CurrentTime=(100*currentTime)/duration;
    progress.style.width=`${percent_CurrentTime}%`;
    
    // music duration update

    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);

    let tot_duration=`${min_duration}:${sec_duration}`;
    if(duration)
    current_duration.textContent=tot_duration;

    // music current time update

    let min_currentTime=Math.floor(currentTime/60);
    let sec_currentTime=Math.floor(currentTime%60);

    if(sec_currentTime<10){
        sec_currentTime=`0${sec_currentTime}`;
    }

    let tot_currentTime=`${min_currentTime}:${sec_currentTime}`;
    if(currentTime)
    current_time.textContent=tot_currentTime;
})

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

