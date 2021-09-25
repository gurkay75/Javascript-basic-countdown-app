var timer = document.getElementById("timer");
var timeinput = document.getElementById("timeinput");
var alertsound = document.getElementById("alertsound");
var starttimer = document.getElementById("starttimer");
var counter = 0;
var newcounter;
var timecounter;
$(timer).text(counter);

timeinput.addEventListener("keyup",function(){
    window.newcounter = timeinput.value;
    $(timer).text(newcounter);
})

starttimer.addEventListener("click",function(){
    window.timecounter= setInterval(backcounter, 1000);
})

function backcounter(){
    window.newcounter--;
        $(timer).text(newcounter);
    if(window.newcounter == 0){
       alertsound.play(); 
       clearInterval(window.timecounter);
    }
}