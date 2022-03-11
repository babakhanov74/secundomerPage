const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const startBtn = document.querySelector(".start_btn");
const stopBtn = document.querySelector(".stop_btn");
const secondes = document.querySelector(".secondes");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const pause = document.querySelector(".pause_btn");

let countSecund = 0;
let countMinute = 0;
let countHour = 0;

let countSecundes = 0;
let countMinutes = 0;
let countHours = 0;

function addSecund(){
    if(countSecund === 59){
        countSecund = -1;
        if( countMinute === 59){
            countMinute = -1;
            countHour += 1;
        }
        countMinute +=1;
    }
    countSecund += 1;
    second.innerText = countSecund.toString().padStart( 2,0);
    minute.innerText = countMinute.toString().padStart( 2,0);
    hour.innerText = countHour.toString().padStart( 2,0);

}

var interval;
startBtn.addEventListener("click" , function(){
    interval = setInterval(addSecund,1000);

});
stopBtn.addEventListener("click", function(){
    clearInterval(interval);
    countSecund = 0;
    second.innerText = countSecund.toString().padStart( 2,0);
});


// ----------------------------------------------------------
function addSecunds(){
    if(countSecundes === 59){
        countSecundes = -1;
        if( countMinutes === 59){
            countMinutes = -1;
            countHours += 1;
        }
        countMinutes +=1;
    }
    countSecundes += 1;
    secondes.innerText = countSecundes.toString().padStart( 2,0);
    minutes.innerText = countMinutes.toString().padStart( 2,0);
    hours.innerText = countHours.toString().padStart( 2,0);

}

var intervals;
startBtn.addEventListener("click" , function(){
    intervals = setInterval(addSecunds,1000);

});
stopBtn.addEventListener("click", function(){
    clearInterval(intervals);
    countSecundes = 0;
    secondes.innerText = countSecundes.toString().padStart( 2,0);
});
pause.addEventListener("click", function(){
    clearInterval(intervals);
    countSecundes = 0;
});
pause.addEventListener("click", function(){
    clearInterval(interval);
    countSecund = 0;
});