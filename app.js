const songs =[
    {
        name:"audio/Har-Har-Shambhu-Shiv-Mahadeva.mp3",
        imgSrc:"images/mahadev.jpg",
        title:"Har Har Shambhu",
        artist:"loyalist"
    },
    {
        name:"audio/Mehbooba Mein Teri Mehbooba.mp3",
        imgSrc:"images/kgf2.jpg",
        title:"Mehbooba",
        artist:"loyalist"
    },
    {
        name:"audio/Pasoori.mp3",
        imgSrc:"images/pasoori.jpg",
        title:"Pasoori",
        artist:"loyalist"
    },
]


const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.querySelector("#play");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const title=document.querySelector("#title");
const artist=document.querySelector("#artist");

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

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

