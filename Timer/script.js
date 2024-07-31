const tDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startButton");
const pauseBtn = document.querySelector("#pauseButton");
const resetBtn = document.querySelector("#resetButton");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId ;
let hr=0,min=0,sec=0;

startBtn.addEventListener("click",()=>{
    if(paused==true){
        paused=false;
    }
    startTime=Date.now() - elapsedTime;
    intervalId = setInterval(updateTime,75);

});
pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused=true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click",()=>{
    clearInterval(intervalId);
    paused=true;
    startTime=0;
    elapsedTime=0;
    currentTime=0;
      hr=0,min=0,sec=0;
    timeDisplay.textContent="00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    sec = Math.floor((elapsedTime / 1000) % 60);
    min= Math.floor((elapsedTime / (60000)) % 60);
    hr = Math.floor(elapsedTime / (360000000) % 60);

    sec = pad(sec); 
    min = pad(min); 
    hr = pad(hr);
    tDisplay.textContent = `${hr}:${min}:${sec}`;

    function pad(unit){
        return ((0)+unit).length > 2? unit: "0" +unit;
    }
}