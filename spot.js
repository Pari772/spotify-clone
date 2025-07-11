console.log("welcome to spotify clone");
let songIndex=0;
let audioElement = new Audio('TumHiHo.mp3');
let masterPlay = document.querySelector("#masterplay");
let myProgressBar = document.querySelector("#progressbar");
let gif = document.querySelector("#gif");
let songitem=document.getElementsByClassName("songitem");
let icon=document.querySelectorAll(".icon");
let mastersongname = document.querySelector("#mastersongname");
let songs=[
    {songName:"Tum Hi Ho", filePath:"TumHiHo.mp3", coverPath:"cover1.jpg"},
    {songName:"Tu Hi Mera", filePath:"TuHiMera.mp3", coverPath:"cover2.jpg"},
    {songName:"Tum Se Hi", filePath:"TumSeHi.mp3", coverPath:"cover3.jpg"},
    {songName:"Ye Tune Kya Kiya", filePath:"YeTuneKyaKiya.mp3", coverPath:"cover4.jpg"},
    {songName:"Ishq", filePath:"Ishq.mp3", coverPath:"cover5.jpg"},
    {songName:"Jhol", filePath:"Jhol.mp3", coverPath:"cover6.jpg"},
    {songName:"Give Me Some Sunshine", filePath:"GiveMeSomeSunshine.mp3", coverPath:"cover7.jpg"},
    {songName:"Laapta", filePath:"Laapta.mp3", coverPath:"cover8.jpg"},
    {songName:"Dildaara", filePath:"Dildaara.mp3", coverPath:"cover9.jpg"},
];
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
        makeAllPlays();
        if (audioElement.play()) {
            icon[songIndex].classList.remove("fa-circle-play");
            icon[songIndex].classList.add("fa-circle-pause");
        }
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
         icon[songIndex].classList.remove("fa-circle-pause");
            icon[songIndex].classList.add("fa-circle-play");
    }
    mastersongname.innerText = songs[songIndex].songName;
});
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value =progress;
});
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration / 100;
});
const makeAllPlays=()=>{
    icon.forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}
icon.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        songIndex =e.target.id;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

        if (masterPlay.classList.contains("fa-circle-play")) {
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
        } else if (masterPlay.classList.contains("fa-circle-pause")) {
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
        }
        mastersongname.innerText = songs[songIndex].songName;
    });
});
document.querySelector("#forward").addEventListener("click",()=>{
    if(songIndex>=9){
songIndex=0
    }else{
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        mastersongname.innerText = songs[songIndex].songName;
});
document.querySelector("#backward").addEventListener("click",()=>{
    if(songIndex<=0){
songIndex=9
    }else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        mastersongname.innerText = songs[songIndex].songName;
});


