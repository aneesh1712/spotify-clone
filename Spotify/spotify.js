let songIndex = 0;
let audioElemenet = new Audio('music/1.m4a');      
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterPlayInfo = document.getElementById('masterPlayInfo'); 
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: 'Mayakama - Thiru', filePath: 'music/1.m4a', coverPath: 'cover/bg2.jpg',}, 
  {songName: 'Baitikochi chusthey', filePath: 'music/2.m4a', coverPath: 'cover/bg4.jpg'}, 
  {songName: 'Chudandi Saaru', filePath: 'music/3.m4a', coverPath: 'cover/bg1.jpg'}, 
  {songName: 'Emannavoo', filePath: 'music/4.m4a', coverPath: 'cover/bg5.jpg'}, 
  {songName: 'Gaali Vaaluga', filePath: 'music/5.m4a', coverPath: 'cover/bg4.jpg'}, 
  {songName: 'Hoyna Hoyna', filePath: 'music/6.m4a', coverPath: 'cover/bg3.jpg'}, 
  {songName: 'Luckkanna Mate Nillu', filePath: 'music/7.m4a', coverPath: 'cover/bg1.jpg'}, 
  {songName: 'Ori Devuda', filePath: 'music/8.m4a', coverPath: 'cover/bg1.jpg'}, 
  {songName: 'Po Pove Yekantham', filePath: 'music/9.m4a', coverPath: 'cover/bg5.jpg'}, 
  {songName: 'Thenmozhi', filePath: 'music/10.m4a', coverPath: 'cover/bg2.jpg'}, 
];

songItem.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
  if(audioElemenet.paused || audioElemenet.currentTime <= 0){
    audioElemenet.play();
    masterPlayInfo.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElemenet.pause();
    masterPlay.classList.remove('fa-circle-pause');
     masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;  
  }
})
audioElemenet.addEventListener('timeupdate', () => {
  progress = ((audioElemenet.currentTime / audioElemenet.duration) * 100);
  myProgressBar.value = progress;
  if(myProgressBar.value >= 100){
    myProgressBar.value = 0;
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});

myProgressBar.addEventListener('change', () => {
  audioElemenet.currentTime = (myProgressBar.value * audioElemenet.duration) / 100;
  console.log(myProgressBar.value);

});

let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

const makeAllPlays = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play')
  }
)};
songItemPlay.forEach((element) => {
  element.addEventListener('click', e => {
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    songIndex = parseInt(e.target.id);
    audioElemenet.src = `music/${songIndex + 1}.m4a`;
    audioElemenet.currentTime = 0;
    gif.style.opacity = 1;
    audioElemenet.play();
    masterPlayInfo.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
});
previous.addEventListener('click', () => {
  if(songIndex <= 0){
    songIndex = 0;
  }else{
    songIndex -= 1;
  }
  audioElemenet.src = `music/${songIndex + 1}.m4a`;
    audioElemenet.currentTime = 0;
    gif.style.opacity = 1;
    audioElemenet.play();
    masterPlayInfo.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
next.addEventListener('click', () => {
  if(songIndex >= 9){
    songIndex = 0;
  }else{
    songIndex += 1;
  }
  audioElemenet.src = `music/${songIndex + 1}.m4a`;
  audioElemenet.currentTime = 0;
  gif.style.opacity = 1;
  audioElemenet.play();
  masterPlayInfo.innerText = songs[songIndex].songName;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})