document.querySelector("button").addEventListener("click",function () {
    let time = document.querySelector("#timeInput").value;
    const timerDisplay = document.querySelector("#timer");

    const countdown = setInterval(function(){
        timerDisplay.textContent = time;
        time--;
        

        if (time<0){
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            alarmSound.play();
        }
    },1000);
    
});