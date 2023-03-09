console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex=0;
let audioElement = new Audio('bara bara.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let songs = [
    {songName : "bara bara", filepath:"C:\Users\48539\Downloads\bara bara.mp3",coverpath:"C:\Users\48539\Downloads\bg1.jpg" },
    
]
/*songItem.forEach(element, i)=>{
    element.getElementByTagName("img")[0].src = songs[i].coverpath;
    element.getElementByTagName("songName")[0].innerText = songs[i].songName;
}*/

//Hnadle play/pause click
masterPlay.addEventListener('click',()=> {
        if (audioElement.paused || audioElement.currentTime<=0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;

        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
    })

//Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{

        //console.log('timeupdate');
        //update Seekbar
        progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        //console.log(progress);
        myProgressBar.value = progress;
    })
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value *audioElement.duration /100;
})
//const makeAllPlay =()=>{
    //Array.from(document.getElementsByClassName('songItemPlay').forEach(element)=>{
        //element.classList.remove('fa-pause-circle');
        //element.classList.add('fa-play-circle');

    /*})
}

//Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    //element.addEventListener('click' , (e)=>{
       //makeAllPlay();
        //e.target.classList.remove('fa-play-circle');
        /*e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime=0;
        audioElement.play();
})

})*/
    